import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import BottonForm from "./BottonForm";
import ComponentForm from "./ComponentForm";

export default function FormReportStudent(){
    return (

        <View style={styles.form}>
                <ComponentForm info="NOME COMPLETO:" exemplo="Digite seu nome"></ComponentForm>

                    {/* informe do aluno : cpf*/}
                 <ComponentForm info="CPF:" exemplo="Digite o CPF do aluno:"></ComponentForm>

                        {/* informe do aluno : endereço*/}
                <ComponentForm info="ENDEREÇO:" exemplo="Digite o endereço do aluno:"></ComponentForm>

                <View style={styles.formlado}>
                    <ComponentForm info="CEP:" exemplo="94856-97"></ComponentForm>
                    <ComponentForm info="NÚMERO:" exemplo="856"></ComponentForm>
                </View>

                <ComponentForm info="TELEFONE" exemplo="(81) 9 65536-7564"></ComponentForm>
                <ComponentForm info="MOTIVO" exemplo="motivo do aluno ser reportado:"></ComponentForm>
                <ComponentForm info="MEDIDAS TOMADAS:" exemplo="Medidas tomadas para remediar a situação:"></ComponentForm>

                {/* <BottonForm postSc={item}></BottonForm> */}

                </View>
            
    );
}
const styles = StyleSheet.create ({
    container:{
        flex: 1,
        backgroundColor: '#fff',
 
    },
    form:{
        margin: 3,
        padding: 8,
    },
    formlado:{
        flexDirection: 'row',
        justifyContent:'space-between',

    }
})