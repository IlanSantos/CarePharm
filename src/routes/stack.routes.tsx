import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import CadastroRemedio from '../screens/CadastroRemedio';
import TelaDeConsulta from '../screens/TelaDeConsulta';

const { Screen, Navigator } = createNativeStackNavigator();


export function StackRoutes(){
    return (
        <Navigator>
            <Screen name="ScreenHome"
                component={Home}
                options={{
                    headerShown: false
                }}
            />
            <Screen name="ScreenCadastroRemedio"
                component={CadastroRemedio}
                options={{
                    title: 'Cadastro de Remédios'
                }}  />

            <Screen name="ScreenTelaDeConsulta"
                component={TelaDeConsulta}
                options={{
                    title: 'Consultar  Medicamentos'
                }}  />


        </Navigator>
    );
}










