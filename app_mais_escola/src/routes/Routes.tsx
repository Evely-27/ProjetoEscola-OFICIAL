import * as React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import Inicio from '../layouts/inicio/Inicio';

export default function Routes() {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Inicio' component={Inicio} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}