import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text,View , TextInput, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable';

export default function Register() {
    const navi = useNavigation();

    return (
        <View style={styleL.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styleL.containerHeader}>
                <Text style={styleL.message}>Faça seu cadastro!</Text>
            </Animatable.View>
            <Animatable.View animation="fadeInUp" style={styleL.containerForm}>
                <Text style={styleL.title}>Email</Text>
                <TextInput placeholder="Digita seu email de conselheiro(a)" style={styleL.input}
                />
                 <Text style={styleL.title}>Matricula</Text>
                <TextInput placeholder="Digita sua matricula do RPA." style={styleL.input}
                />

                <Text style={styleL.title}>Senha</Text>
                <TextInput placeholder="Crie uma senha." style={styleL.input}
                />

                <TouchableOpacity style={styleL.button} onPress ={() =>{ navi.navigate('Login' as never)}}>
                    <Text style={styleL.buttonText}>Cadastrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styleL.buttonCancel} onPress ={() =>{ navi.navigate('Login' as never)}}>
                    <Text style={styleL.buttonText}>Cancelar</Text>
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
        width:'90%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,

    },
    buttonCancel:{
        backgroundColor: 'red',
        width:'60%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 80,
    },
    buttonText:{
        color: "#ffffff",
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