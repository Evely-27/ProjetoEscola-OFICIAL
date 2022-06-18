import { useNavigation } from '@react-navigation/native';
import React, { useState } from "react";
import { StyleSheet, Text,View , TextInput, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable';
import { User } from '../../class/User';


export default function Login() {
    const navition = useNavigation();
    const oppenListSchool = () =>{ navition.navigate('ListSchool' as never)};
    const oppenLRegister = () =>{ navition.navigate('Register' as never)};

    const [user,setUser] = useState<User>(new User("",""));

    return (
        <View style={styleL.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styleL.containerHeader}>
                <Text style={styleL.message}>Faça seu login!</Text>
            </Animatable.View>
            <Animatable.View animation="fadeInUp" style={styleL.containerForm}>
                <Text style={styleL.title}>Email</Text>
                <TextInput placeholder="Digita seu email" style={styleL.input} onChangeText={(text) => { user.email = text;}}
                />

                <Text style={styleL.title}>Senha</Text>
                <TextInput placeholder="Sua Senha" 
                style={styleL.input}  
                onChangeText={(text) => { user.senha = text; }} 
                secureTextEntry={true}

                />

                <TouchableOpacity style={styleL.button} onPress ={oppenListSchool}>
                    <Text style={styleL.buttonText}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={oppenLRegister} style={styleL.buttonRegister} >
                    <Text style={styleL.regText}>Não tem conta? Cadastre-se!</Text>
                </TouchableOpacity>

            </Animatable.View>
        </View>
    )
}

const styleL = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0400CD'
    },
    containerHeader:{
        marginTop: '14%',
        marginBottom:'8%',
        paddingStart:'5%',

    },
    message:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
    },
    containerForm:{
        backgroundColor: '#fff',
        flex: 1,
        borderTopLeftRadius:25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd:'5%'
    },
    title:{
        fontSize: 20,
        marginTop: 28
    },
    input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize:16
    },
    button:{
        backgroundColor: '#0400CD',
        width:'100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        alignItems: 'center',
        justifyContent: 'center'

    },
    buttonText:{
        color: "#fff",
        fontSize:18,
        fontWeight: 'bold',

    },
    buttonRegister:{
        marginTop: 14,
        alignSelf: 'center',
    },
    regText:{
        color: '#a1a1a1'

    }
})