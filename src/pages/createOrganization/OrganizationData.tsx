import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, Switch, Text, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

interface Organization {
  id:number;
  nome:string;
  email:String;
  telefone:number;
  cidade:String;
  estado:String;
  pais:String;
  endereco:String;
  cep:String;
  site:String;
  coodenador:String;
  dataFundacao: Date;
  info:String;
  latitude:number;
  longitude:number;
  images: Array<{
    id:number;
    url:string;
  }>;
}

export default function OrganizationData() {
  const [Organization, setOrganization] = useState<Organization>();

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 24 }}>

      <Text style={styles.label}>Seu e-mail *</Text>
      <TextInput
        style={styles.input}
        placeholder="joao@exemplo.com"
      />

      <Text style={styles.title}>Dados da Instituição</Text>

      <Text style={styles.label}>Nome/Título *</Text>
      <TextInput
        style={styles.input}
        placeholder="Instituto PF"
        value={Organization?.nome}
      />

      <Text style={styles.label}>Telefone (Com DDD)</Text>
      <TextInput
        style={styles.input}
        placeholder="87 9999 6666"
        value={Organization?.nome}
      />

      <Text style={styles.label}>País</Text>
      <TextInput
        style={styles.input}
        placeholder="Brasil"
        value={Organization?.nome}
      />

      <Text style={styles.label}>Estado</Text>
      <TextInput
        style={styles.input}
        placeholder="Pernambuco"
        value={Organization?.nome}
      />

      <Text style={styles.label}>Cidade</Text>
      <TextInput
        style={styles.input}
        placeholder="Garanhuns"
        value={Organization?.nome}
      />

      <Text style={styles.label}>Endereço</Text>
      <TextInput
        style={styles.input}
        placeholder="Rua Gomes"
        value={Organization?.nome}
      />

      <Text style={styles.label}>CEP</Text>
      <TextInput
        style={styles.input}
        placeholder="123456 000"
        value={Organization?.nome}
      />

      <Text style={styles.label}>Site</Text>
      <TextInput
        style={styles.input}
        placeholder="paulofreire.com.br"
        value={Organization?.nome}
      />

      <Text style={styles.label}>Data da Fundação</Text>
      <TextInput
        style={styles.input}
        placeholder="22/02/2000"
        value={Organization?.nome}
      />

      <Text style={styles.label}>Coordenador</Text>
      <TextInput
        style={styles.input}
        placeholder="Joao Silva"
        value={Organization?.nome}
      />

      <Text style={styles.label}>Mais Informações</Text>
      <TextInput
        style={[styles.input, { height: 110 }]}
        multiline
        value={Organization?.nome}
      />

      <RectButton style={styles.nextButton} onPress={() => {}}>
        <Text style={styles.nextButtonText}>Enviar</Text>
      </RectButton>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    color: '#000000',
    fontSize: 24,
    fontFamily: 'Nunito_700Bold',
    marginBottom: 32,
    paddingTop: 24,
    borderTopWidth: 0.8,
    borderTopColor: '#D3E2E6',
    alignSelf: 'center',
  },

  label: {
    color: '#000000',
    fontFamily: 'Nunito_600SemiBold',
    marginBottom: 8,
  },

  comment: {
    fontSize: 11,
    color: '#8fa7b3',
  },

  input: {
    backgroundColor: '#fff',
    borderWidth: 1.4,
    borderColor: '#d3e2e6',
    borderRadius: 2,
    height: 56,
    padding: 18,
    marginBottom: 16,
    textAlignVertical: 'top',
  },

  nextButton: {
    backgroundColor: '#2dc200',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    marginTop: 32,
  },

  nextButtonText: {
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 16,
    color: '#FFF',
  }
})