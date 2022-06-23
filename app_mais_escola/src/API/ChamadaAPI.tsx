import { RouteProp, useRoute } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { View } from "react-native-animatable";
import { ParametrosDasRotas } from "../class/ParametrosDasRotas";
import { User } from "../class/User";
import UserSchool from "../class/UserSchool";

export default function ChamadaAPI(){
    const [dados, setDados] = useState([]);
    const [useSchool,setUserSchool] = useState<UserSchool>(new UserSchool("",""));

    // -------------------------------------------------------------------
    const routes = useRoute<RouteProp<ParametrosDasRotas, "ChamadaAPI">>();
    // Utilizando o useState para obter postagens (array)
    const [escola, setescola] = useState<UserSchool[]>([]);
    // Criando função para obter postagens 
    // (com uma URI informada na hora da chamada da função)
    async function GetEscolas(uri: string) {
        const { data } = await axios.get<UserSchool[]>(uri);
        setescola(data);
        console.log(data);
    }
    const effect = useEffect(() => {
        GetEscolas("http://192.168.0.21:3000/escola");
    }, []);

   async function CadastrarEscola(){
    try{
        await axios.post("http://192.168.0.21:3000/escola/send",useSchool);
        console.log("inserido!");
        
    } catch(e) {
        console.log(e);
    }
    }
    

    return (
        <View>

            <Text>Teste chamada API.</Text>
            <Text style={style.title}>Email</Text>
                <TextInput placeholder="Digita seu email" style={style.input} onChangeText={(text) =>{useSchool.name = text;}} />

            <Text style={style.title}>Endereço</Text>
            <TextInput placeholder="Digita seu endereço" style={style.input} onChangeText={(text) =>{useSchool.endereco = text;}} />

                <TouchableOpacity style={style.buttonRegister} >
                    <Text style={style.buttonText} onPress={() => {CadastrarEscola();}}> Cadastrar Escola</Text>
                </TouchableOpacity>

                <View style={style.contuser}>
                    <Text style={style.input}>Mostrar usuario escola</Text>

                    <Text>{routes.params?.name}</Text>

                    <FlatList 
                    data={escola}
                    renderItem={({item}) =>
                    <View>
                        <Text style={style.title}>{item.name}</Text>
                    </View> 
                }
                    >
                        
                    </FlatList>

                </View>
        </View>
    )
}

const style = StyleSheet.create({
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
    buttonText:{
        color: "#267DFF",
        fontSize:18,
        fontWeight: 'bold',

    },
    buttonRegister:{
        marginTop: 14,
        alignSelf: 'center',
    },
    contuser:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }


})