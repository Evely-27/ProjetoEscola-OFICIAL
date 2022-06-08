import * as React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import ListSchool from '../layouts/list_schools/ListSchool';
import Welcome from '../layouts/welcome/Welcome';
import Register from '../layouts/register/Register';
import Login from '../layouts/login/Login';

export default function Routes() {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Welcome' component={Welcome} options={{header: () => null}}/>
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='ListSchool' component={ListSchool} />
                <Stack.Screen name= 'Register' component={Register} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}