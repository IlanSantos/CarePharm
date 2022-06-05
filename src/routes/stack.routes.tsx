import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import CadastroRemedio from '../screens/CadastroRemedio';

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
        </Navigator>
    );
}










