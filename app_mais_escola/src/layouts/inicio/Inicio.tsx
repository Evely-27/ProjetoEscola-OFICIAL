import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { stylesG } from "../../../assets/style/stylesGlobal";

export default function Inicio(){
    const navi = useNavigation();
    return (
        <View style={stylesG.background}>
            <Text>Tela Inicio </Text>
            <TouchableOpacity style={{backgroundColor: "red"}} onPress = {() => { navi.navigate('Login' as never)}}>Login</TouchableOpacity>

        </View>
    )
}