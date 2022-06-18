import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import PostSchools from "../../components/PostSchools";
import axios from "axios";
import { Feather } from '@expo/vector-icons'; 
import { RouteProp, useRoute } from "@react-navigation/native";
import { ParametrosDasRotas } from "../../class/ParametrosDasRotas";


export default function ListSchool(){

    const routes = useRoute<RouteProp<ParametrosDasRotas, "ListSchool" >>();
    const [posts, setPosts] = useState<any[]>([]);

    async function GetPosts(Uri:string){
        const { data } = await axios.get(Uri); 
        var  lista:any = []
        const metaData = data['result']['records'].forEach((element: any) => {
           lista.push({
            rpa: element.rpa,
            escola: element.escola,
            qtd_alunos: element.qtd_alunos
           })
        })
        setPosts(lista);
        console.log(data);
        
        console.log(`data minha: ${data['result']['records'][0].bairro}`);
    }

    const effect = useEffect(() => {
        GetPosts("http://dados.recife.pe.gov.br/pt_BR/api/3/action/datastore_search?resource_id=7c613836-9edd-4c0f-bc72-495008dd29c3");
    } , []);

    
    return (
        <View style={styles.container}>
                
                <View style={styles.feather}>
                    <Feather name="menu" size={30} color="white" />

                    <Text>Nome do conselhiro</Text>
                    <Text>Olá {routes.params?.email}</Text>

                    <Text>Botão Reportar</Text>

                </View>



            <View style={styles.containerPesq}>

                    <TextInput placeholder="Pequise" placeholderTextColor='black' style={styles.inptPesq}
                     />
                    <AntDesign name="search1" size={24} color="black"  onPress={() => console.log("fui clicado...")}  style={styles.icon}/>
            </View>

            <View style={styles.headerlist}>
                <Text>RPA</Text>
                <Text>Escolas</Text>
                <Text>Quant.Alunos</Text>
            </View>


        <FlatList style={styles.flat}
            data={posts}

            renderItem={({item}) =>
            <PostSchools postSc={item}></PostSchools> 
                 }>

        </FlatList>
        </View>
    )
}
const styles = StyleSheet.create ({
    container:{
        flex: 1,
        backgroundColor: '#fff',
 
    },

    feather:{
        height: 50,
        flexDirection: "row",
        justifyContent:'space-between',
        paddingVertical: 10,
        border: 'solid',
        backgroundColor: '#267DFF',
    },
    flat:{
        backgroundColor: '#fff',
        paddingStart: '5%',
        paddingEnd:'5%',
    },
    containerPesq:{
        backgroundColor: "#f9f9f6",
        flexDirection: "row",
        justifyContent:'space-between',
        borderRadius: 4,
        borderColor: '#7687',
        borderWidth: 2,        
        margin: 15,
    },
    inptPesq:{
        width: '90%',
        fontSize:16,
        paddingVertical:8,
        paddingHorizontal: 0 ,
        margin: 0,
        color: "#fff",
        // borderColor: 'black',
        // borderWidth: 1,
    },
    icon:{
        paddingRight:5,
        marginTop: 3,
    },
    headerlist:{
        height: 50,
        width:'100%',
        backgroundColor: '#f9f9f6',
        borderBottomWidth: 1,
        justifyContent: "space-between",
        flexDirection: 'row',
        paddingHorizontal: 30,
        paddingVertical: 30,
        paddingBottom:30,
        
    },
}
    
)