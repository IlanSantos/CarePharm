import { View, Text,TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { StatusBar } from 'react-native'
import React, { useState } from 'react'

export default function CadastroRemedio() {

  const[nome_medicamento, setNome_medicamento] = useState('');
  const[descricao, setDescricao] = useState('');


  const cadast = () =>{
   /* Fazer chamada no back-end */
  }

  
  return (
    <View style={styles.container}>
          <StatusBar hidden/>


          <View style={{width: '100%'}}>
            
          <Text style={styles.formLabel}>Nome do Medicamento: </Text>
          <TextInput placeholder='Nome do medicamento' style ={styles.TextInput} onChangeText={text=>setNome_medicamento(text)}/>
          </View>

          <View style={{width: '100%'}}>
          <Text style={styles.formLabel}>Descrição: </Text>
          <TextInput placeholder='Descreva o medicamento' style ={styles.TextInput} onChangeText={text=>setDescricao(text)}/>
          </View>


        <TouchableOpacity style={styles.btnCadastro} onPress={()=>cadast()}>

          <Text style={{textAlign: 'center', color: 'white'}}>CADASTRAR</Text>

        </TouchableOpacity>

    </View>
  )
}



/*Sytles */

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 20
  },
TextInput:{
  width: '100%',
  height: 40,
  backgroundColor: 'white',
  borderRadius: 10,
  paddingLeft: 10,
  marginBottom: 30,
},
btnCadastro:{
  width: '100%',
  height: 40,
  backgroundColor: '#F96955',
  borderRadius: 10,
  paddingLeft: 10,
  marginBottom: 30,
  justifyContent: 'center',
  textAlign: 'center'
},
formLabel:{
  color: '#000000b3',
  fontWeight: '400',
  fontSize: 16,
  marginBottom: 10
}
});