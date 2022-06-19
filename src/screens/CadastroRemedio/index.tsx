import { View, Text,TextInput, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native';
import React, { useState } from 'react';
import { CadastrarMedicamento } from '../../services/medicamentos';

export default function CadastroRemedio() {

    const[nomeMedicamento, setNomeMedicamento] = useState('');
    const[descricaoMedicamento, setDescricaoMedicamento] = useState('');

    const formReset = ():void => {
        setNomeMedicamento('');
        setDescricaoMedicamento('');
    }

    const handleSubmit = async ():Promise<void> => {
        try{
            await CadastrarMedicamento(nomeMedicamento, descricaoMedicamento);
            ToastAndroid.show("Medicamento cadastrado com sucesso", ToastAndroid.LONG);
            formReset();
        }    
        catch(error){
            ToastAndroid.show("Não foi possível cadastrar o medicamento", ToastAndroid.LONG);
        }
    }

    return (
        <View style={styles.container}>

            <View style={{width: '100%'}}>
                <Text style={styles.formLabel}>Nome do Medicamento: </Text>
                <TextInput placeholder='Nome do medicamento' style ={styles.TextInput} onChangeText={text=>setNomeMedicamento(text)} value={nomeMedicamento} />
            </View>

            <View style={{width: '100%'}}>
                <Text style={styles.formLabel}>Descrição: </Text>
                <TextInput placeholder='Descreva o medicamento' style={styles.TextArea} multiline={true} numberOfLines={5} onChangeText={text=>setDescricaoMedicamento(text)} value={descricaoMedicamento}/>
            </View>

            <TouchableOpacity style={styles.btnCadastro} onPress={()=>handleSubmit()}>
                <Text style={{textAlign: 'center', color: 'white'}}>CADASTRAR</Text>
            </TouchableOpacity>

        </View>
    );
}

/*Sytles */

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 20
  },
  TextInput:{
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: 30,
  },
  TextArea: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 30,
    textAlignVertical: 'top'
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