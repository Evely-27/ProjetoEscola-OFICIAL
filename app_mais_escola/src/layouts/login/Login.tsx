import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import { stylesG } from "../../../assets/style/stylesGlobal";

export default function Login(){
    const navi = useNavigation();
    return (
        <View style={stylesG.background}>
            <Text>Tela Login </Text>
            <TouchableOpacity style={{backgroundColor: "red"}} onPress = {() => { navi.navigate('ListSchools' as never)}}>Lista de Escolas</TouchableOpacity>

        </View>
    )
}