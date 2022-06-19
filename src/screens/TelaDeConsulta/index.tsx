import { StatusBar } from 'react-native';
import { View, Text, StyleSheet,TextInput,TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { ConsultaMedicamento } from '../../services/medicamentos';

type MedicamentoAttributes = {
    id?:number;
    nome?:string;
    descricao?:string;
};

export default function TelaConsulta() {
    const [listaMedicamentos, setListaMedicamentos] = useState([]);
    const[campoSearch, setCampoSearch] = useState('');

    const Search = async ():Promise<void> => {
        try{
            const {data} = await ConsultaMedicamento(campoSearch);
            setListaMedicamentos(data.dados);
        }
        catch(error){
            console.warn("Houve um erro! " + error)
        }
    }
    
    const handleChangeText = (text:any):void => {
        setCampoSearch(text);
    }

    const ListaMedicamentos = ():JSX.Element => {
        return (
            <>
                <Text style={styles.formLabel}>Medicamentos encontrados:</Text>
                <ScrollView>
                    {
                        listaMedicamentos.map((medicamento:MedicamentoAttributes) => {
                            return (
                                <View style={styles.listItem} key={medicamento.id}>
                                    <Text style={styles.listItemTitle}>{medicamento.nome}</Text>
                                    <Text style={styles.listItemDescription}>{medicamento.descricao}</Text>
                                </View>
                            );
                        })
                    }
                </ScrollView>
            </>
        );
    }

    return (
        <View style={styles.container}>
  
            <View style={{width: '100%'}}>
                <Text style={styles.formLabel}>Nome:</Text>
                <TextInput placeholder='Buscar' style ={styles.TextInput} onChangeText={handleChangeText} />
            </View>

            <TouchableOpacity style={styles.btnSearch} onPress={()=>Search()}>
                <Text style={{textAlign: 'center', color: 'white'}}>Buscar</Text>
            </TouchableOpacity>

            <View>
                {
                    listaMedicamentos.length ? ListaMedicamentos() : null
                }
            </View>

        </View>
    );
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
        marginBottom: 10,
    },
    btnSearch:{
        width: '100%',
        height: 40,
        backgroundColor: '#F96955',
        borderRadius: 10,
        paddingLeft: 5,
        marginBottom: 20,
        justifyContent: 'center',
        textAlign: 'center'
    },
    listItem: {
        width: '100%',
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 10
    },
    listItemTitle: {
        fontWeight: '600',
        fontSize: 20,
        color: '#009688'
    },
    listItemDescription: {
        fontWeight: '400',
        fontSize: 16,
        color: '#00000099',
        marginBottom: 5
    }
});