import React ,{useEffect, useState} from 'react';
import { Image, View, ScrollView, Text, StyleSheet, Dimensions } from 'react-native';
import {useRoute} from '@react-navigation/native';
import IconeTelefone from '../images/png/logo_telefone.png';
import IconeEmail from '../images/png/logo_email.png';


import api from '../services/api';

interface OrganizationDetailsRouteParams{
  id:number;
}

interface Organization {
  id:number;
  nome:string;
  email:String;
  telefone:number;
  cidade:String;
  estado:String;
  DatadeRealizacao: number;
  NomedaRealizacao: String;
  info:number;
  latitude:number;
  longitude:number;
  images: Array<{
    id:number;
    url:string;
  }>;
}

export default function PFDetails() {
  const route = useRoute();
  const [Organization, setOrganization] = useState<Organization>();
  const params = route.params as OrganizationDetailsRouteParams;

  useEffect(()=>{
    api.get(`pfs/${params.id}`).then(response =>{
      setOrganization(response.data);
    })
  },[params.id])

  if (!Organization){
    return(
      <View style={styles.container}>
        <Text style={styles.email}>Carregando....</Text>
      </View>
    )
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imagesContainer}>
        <ScrollView horizontal pagingEnabled>
          
          {Organization.images.map(images =>{
              return(
                <Image
                key={images.id} 
                style={styles.image} 
                source={{ uri: images.url }}
                />

              );
          })}

         
        </ScrollView>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.NomeInstituicao}>{Organization.nome}</Text>
        <Text style={styles.ntelefone}>{Organization.telefone}</Text>
        <Image style={styles.IconeTelefone} source={IconeTelefone} />
        <Text style={styles.email}>{Organization.email}</Text>
        <Image style={styles.IconeEmail} source={IconeEmail} />
        <Text style={styles.titulos}>Endereço</Text>
        <Text style={styles.textos}>{Organization.cidade}</Text>
        <Text style={styles.textos}>{Organization.estado}</Text>
        <View style={styles.separator} /> 
        <Text style={styles.titulos}>Data de Realização</Text>
        <Text style={styles.textos}>{Organization.DatadeRealizacao}</Text>
        <Text style={styles.titulos}>Nome da Realização</Text>
        <Text style={styles.textos}>{Organization.NomedaRealizacao}</Text>
        <Text style={styles.titulos}>Mais Informações</Text>
        <Text style={styles.textos}>{Organization.info}</Text>





      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imagesContainer: {
    height: 240,
  },

  image: {
    width: Dimensions.get('window').width,
    height: 180,
    resizeMode: 'cover',
  },

  detailsContainer: {
    padding: 24,
  },

  NomeInstituicao: {
    color: '#0d0d0e',
    fontSize: 30,
    fontFamily: 'Nunito_700Bold',
    marginTop:-80,
  },

  ntelefone: {
    fontFamily: 'Nunito_600SemiBold',
    color: '#9b9fa1',
    fontSize:-9,
    lineHeight: 24,
    marginTop: 19,
    left:35,
  },
  email: {
    fontFamily: 'Nunito_600SemiBold',
    color: '#9b9fa1',
    fontSize:-9,
    lineHeight: 24,
    marginTop: 5,
    left:35,
  },
  titulos: {
    fontFamily: 'Nunito_600SemiBold',
    color: '#0f0f0f',
    fontSize:16,
    lineHeight: 24,
    marginTop: 5,
    
  },
  textos: {
    fontFamily: 'Nunito_600SemiBold',
    color: '#9b9fa1',
    fontSize:16,
    lineHeight: 24,
    marginTop: -5,
    
  },
  

  separator: {
    height: 0.8,
    width: '100%',
    backgroundColor: '#8b8129',
    marginVertical:10,
  },

  IconeTelefone:{
    position: 'absolute',
    left:25,
    width: 20,
    height: 20,
    marginTop: 5,

  },
  IconeEmail:{
  position: 'absolute',
  left:25,
  width: 20,
  height: 20,
  marginTop: 35,

}
})