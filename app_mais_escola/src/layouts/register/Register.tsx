import {  useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, Text,View , TextInput, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable';
import { User } from "../../class/User";


export default function Register() {
    const navi = useNavigation();
    const oppenLogin = () =>{ navi.navigate('Login' as never, )};
    const oppenListSchool = () =>{ navi.navigate('ListSchool' as never,user as never)};

    const [user, setUser] = useState<User>(new User("",""));


    
    return (
        <View style={styleL.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styleL.containerHeader}>
                <Text style={styleL.message}>Faça seu cadastro!</Text>
            </Animatable.View>
            <Animatable.View animation="fadeInUp" style={styleL.containerForm}>

            <Text style={styleL.title}>Nome</Text>
                <TextInput placeholder="Como gostaria de ser chamado(a)?" 
                onChangeText={(text) => { user.nome = text; }} 
                onFocus={()=> {console.log("Em foco ...");}}
                style={styleL.input}
                />
                
                <Text style={styleL.title}>Email</Text>
                <TextInput placeholder="Digita seu email de conselheiro(a)" style={styleL.input}
                />
                 <Text style={styleL.title}>Matricula</Text>
                <TextInput placeholder="Digita sua matricula do RPA." style={styleL.input}
                />

                <Text style={styleL.title}>Senha</Text>
                <TextInput placeholder="Crie uma senha." style={styleL.input}
                />

                <TouchableOpacity style={styleL.button} onPress ={ oppenListSchool}>
                    <Text style={styleL.buttonText}>Cadastrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styleL.buttonCancel} onPress ={ oppenLogin}>
                    <Text style={styleL.buttonTextC}>Cancelar</Text>
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
    buttonText:{
        color: "#ffffff",
        fontSize:18,
        fontWeight: 'bold',

    },
    buttonCancel:{
        backgroundColor: '#fff',
        width:'90%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
        border: 'solid'
    },
    buttonTextC:{
        color: "#0400CD",
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