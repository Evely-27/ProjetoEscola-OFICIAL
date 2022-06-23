import React, { useEffect, useState } from "react";
import {  StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import BottonForm from "../components/BottonForm";
import { AntDesign } from '@expo/vector-icons';
import ClassReportStudents from "../class/ClassReportStudents";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
export default function NovoReportarAluno() {
    const navi = useNavigation();
    const oppenListReport = () =>{ navi.navigate('ListReports' as never )};
    const oppenListSchool = () =>{ navi.navigate('ListSchool' as never)};

    // const [dados, setDados] = useState([]);
    const [newreport,setUserSchool] = useState<ClassReportStudents>(new ClassReportStudents("",""));

    const [report, setReport] = useState<ClassReportStudents[]>([]);
    async function GetEscolas(uri: string) {
        const { data } = await axios.get<ClassReportStudents[]>(uri);
        setReport(data);
        console.log(data);
    }
    const effect = useEffect(() => {
        GetEscolas("http://192.168.0.21:3000/report");
    }, []);

    async function CreateReport(){
        try{
            await axios.post("http://192.168.0.21:3000/report/send",newreport);
            console.log("inserido!");
            
        } catch(e) {
            console.log(e);
        }
        }


    return (
        <View style={styles.container}>

        <View style={styles.feather}>
            <Text style={styles.textcons}>Reportar Aluno</Text>
             <FontAwesome5 name="list-alt" size={30} color="white" style={styles.icontfeather} onPress={oppenListReport}/>

        </View>
            <View style={styles.user}>
                <FontAwesome5 name="user-tag" size={80} color="#0400CD" />

            </View>

            <View style={ styles.form}> 
            {/* onChangeText={(text) => { user.email = text;}} */}
            <Text style={styles.title}>NOME COMPLETO:</Text>
                <TextInput placeholder="Digite seu nome" style={styles.input}  onChangeText={(text) =>{newreport.name_student = text;}}
                />

            <Text style={styles.title}>CPF do Aluno:</Text>
                <TextInput placeholder="Digite o CPF do aluno:" style={styles.input}  onChangeText={(text) =>{newreport.cpf_student = text;}}
                />
                 <Text style={styles.title}>ENDEREÇO:</Text>
                <TextInput placeholder="Digita seu email" style={styles.input}  onChangeText={(text) =>{newreport.endereco_student = text;}}
                />
                 <Text style={styles.title}>CPE:</Text>
                <TextInput placeholder="94856-97" style={styles.input}  onChangeText={(text) =>{newreport.cep_student = text;}}
                />
                 <Text style={styles.title}>Número:</Text>
                <TextInput placeholder=" 856" style={styles.input}  onChangeText={(text) =>{newreport.num_student = text;}}
                />
                 <Text style={styles.title}>TELEFONE</Text>
                <TextInput placeholder="(81) 9 65536-7564" style={styles.input}  onChangeText={(text) =>{newreport.tel_student = text;}}
                />
                 <Text style={styles.title}>MOTIVO</Text>
                <TextInput placeholder="motivo do aluno ser reportado:" style={styles.input}  onChangeText={(text) =>{newreport.moti_student = text;}}
                />
                 <Text style={styles.title}>MEDIDAS TOMADAS:</Text>
                <TextInput placeholder="Medidas tomadas para remediar a situação:" style={styles.input}  onChangeText={(text) =>{newreport.med_student = text;}}
                />

            </View>
            <View style={styles.bottons}>
                <TouchableOpacity style={styles.buttonCreate} >
                        <Text style={styles.buttonText} onPress={() => {CreateReport();}}> Enviar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonCreate} >
                        <Text style={styles.buttonText} onPress={oppenListSchool}> Cancelar</Text>
                    </TouchableOpacity>
                {/* <BottonForm nome="Cancelar"></BottonForm> */}
                    
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
    feather:{
        height: 50,
        flexDirection: "row",
        justifyContent:'space-between',
        paddingVertical: 10,
        paddingHorizontal: 6,
        backgroundColor: '#267DFF',
    },
    icontfeather:{
        paddingRight:5,
        marginEnd:3,
    },
    textcons:{
        fontSize: 25,
        fontWeight: '500',
        color: '#fff',
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
    form:{
        margin: 3,
        padding: 8,
    },
    buttonText:{
        color: "#fff",
        fontSize:18,
        fontWeight: 'bold',
    },
    buttonCreate:{
        backgroundColor: '#5552e2',
        width:'40%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        alignItems: 'center',
        justifyContent: 'center'
    },
        bottons:{
            flexDirection: 'row',
            justifyContent: "space-around",
        },
})