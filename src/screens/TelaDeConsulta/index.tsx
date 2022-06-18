import { StatusBar } from 'react-native'
import { View, Text, StyleSheet,TextInput,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'






export default function TelaConsulta() {

  const[buscar, setbuscar] = useState('');
  



  
  const Search = () =>{
    /* Fazer chamada no back-end */
   }
    
    return (
      <View style={styles.container}>
            <StatusBar hidden/>
  
            <View style={{width: '100%'}}>
            
          <Text style={styles.formLabel}></Text>
          <TextInput placeholder='Buscar' style ={styles.TextInput} onChangeText={text=>setbuscar(text)} />
          </View>

          <TouchableOpacity style={styles.btnSearch} onPress={()=>Search()}>

          <Text style={{textAlign: 'center', color: 'white'}}>Buscar</Text>

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
  Text:{
    width: '100%',
    height: 120,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingLeft: 20,
    marginBottom: 30,
  },
  formLabel:{
    color: '#000000b3',
    fontWeight: '400',
    fontSize: 16,
    marginBottom: 10
  },
  TextInput:{
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 30,
  },
  btnSearch:{
    width: '25%',
    height: 40,
    backgroundColor: '#F96955',
    borderRadius: 10,
    paddingLeft: 5,
    marginBottom: 20,
    justifyContent: 'center',
    textAlign: 'center'
  }
  });