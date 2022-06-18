import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default function ComponentForm(props: {info:string, exemplo:string}){
    return (
             <View>
                <Text style={styles.info}>{props.info}</Text>
                <TextInput style={styles.exem} placeholder={props.exemplo}></TextInput>
            </View>
    );
}
const styles = StyleSheet.create ({
    container:{
        flex: 1,
    },
    info:{
        fontSize: 15,
        marginTop: 28,
        fontWeight: '500',
        color: '#0400CD' ,
    },
    exem:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize:16,
        borderColor:'#0400CD' ,

    }
})