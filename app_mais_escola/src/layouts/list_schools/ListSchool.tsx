import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { stylesG } from "../../../assets/style/stylesGlobal";
import PostSchools from "../../components/PostSchools";
// import PostEscolas from "../../class/PostEscolas";


export default function ListSchool(){
    const listaescolas = [
        {nomeEscola: "Escola Rosa Maria",rpa: "239b",quantAlun: 294},
        {nomeEscola: "Escola Fernando sousa", rpa: "123",quantAlun: 653}
    ]
    return (
        <View style={stylesG.background}>
            <Text>Tela lista de escolas </Text>


        <FlatList
            data={listaescolas}

            renderItem={({item}) =>
            <PostSchools postSc={item}></PostSchools> 
            }>

        </FlatList>
        </View>
    )
}
