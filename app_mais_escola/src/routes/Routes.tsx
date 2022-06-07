import * as React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import Login from '../layouts/login/Login';
import ListSchool from '../layouts/list_schools/ListSchools';
import Welcome from '../layouts/welcome/Welcome';

export default function Routes() {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Welcome' component={Welcome} />
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='ListSchools' component={ListSchool} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}