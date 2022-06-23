import React from "react";
import {  StyleSheet, Text, View } from "react-native";
import BottonForm from "../../components/BottonForm";
import { FontAwesome5 } from '@expo/vector-icons';
import FormReportStudent from "../../components/FormReportStudent";

export default function ReportStudent() {
    return (
        <View style={styles.container}>

        <View style={styles.feather}>
            <Text style={styles.textcons}>Reportar Aluno</Text>

        </View>
            <View style={styles.user}>
                <FontAwesome5 name="user-tag" size={80} color="#0400CD" />
            </View>

            <FormReportStudent></FormReportStudent>

            <View style={styles.bottons}>
                
                <BottonForm nome="Enviar"></BottonForm>
                <BottonForm nome="Cancelar"></BottonForm>

            </View>
    
        </View>
    )
}

const styles = StyleSheet.create ({
    container:{
        flex: 1,
        backgroundColor: '#fff',
 
    },
    user:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    bottons:{
        flexDirection: 'row',
        justifyContent: "space-around",
    },
    feather:{
        height: 50,
        flexDirection: "row",
        justifyContent:'space-between',
        paddingVertical: 10,
        paddingHorizontal: 6,
        backgroundColor: '#267DFF',
    },
    textcons:{
        fontSize: 25,
        fontWeight: '500',
        color: '#fff',
    },
})