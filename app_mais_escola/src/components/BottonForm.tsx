import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

export default function BottonForm(props: {nome:string}){
    return (
           <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{props.nome}</Text>
           </TouchableOpacity>
    );
}
const styles = StyleSheet.create ({
    buttonText:{
        color: "#fff",
        fontSize:18,
        fontWeight: 'bold',
    },
    button:{
        backgroundColor: '#5552e2',
        width:'40%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        alignItems: 'center',
        justifyContent: 'center'

    },
})