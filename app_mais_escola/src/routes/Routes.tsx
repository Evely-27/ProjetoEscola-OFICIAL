import * as React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import Inicio from '../layouts/inicio/Inicio';
import Login from '../layouts/login/Login';
import ListSchool from '../layouts/list_schools/ListSchools';

export default function Routes() {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Inicio' component={Inicio} />
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='ListSchools' component={ListSchool} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}