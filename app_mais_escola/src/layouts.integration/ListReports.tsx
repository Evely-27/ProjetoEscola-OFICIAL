
import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, TextInput } from "react-native";
import { AntDesign } from '@expo/vector-icons';
// import PostSchools from "../../components/PostSchools";
import axios from "axios";
import { Feather } from '@expo/vector-icons'; 
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import ClassReportStudents from "../class/ClassReportStudents";
import PostReport from "../components/PostReport";
// import { ParametrosDasRotas } from "../../class/ParametrosDasRotas";


export default function ListReports(){

    
    const navi = useNavigation();
    const oppenReportStudent = () =>{ navi.navigate('NovoReportarAluno' as never )};
     const [report, setReport] = useState<ClassReportStudents[]>([]);
    async function GetReport(uri: string) {
        const { data } = await axios.get<ClassReportStudents[]>(uri);
        setReport(data);
        console.log(data);
    }
    const effect = useEffect(() => {
        GetReport("http://192.168.0.21:3000/report");
    }, []);
    
    return (
        <View style={styles.container}>
                
                <View style={styles.feather}>
                    <Feather name="menu" size={30} color="white" />

                    {/* <Text style={styles.textcons}>{routes.params?.nome}</Text> */}

                    <AntDesign name="notification" size={30} color="white" style={styles.icontfeather} onPress={oppenReportStudent}/>

                </View>



            <View style={styles.containerPesq}>

                    <TextInput placeholder="Pequise" placeholderTextColor='black' style={styles.inptPesq}
                     />
                    <AntDesign name="search1" size={24} color="black"  onPress={() => console.log("fui clicado...")}  style={styles.icon}/>
            </View>

            <View style={styles.headerlist}>
                <Text style={styles.textheaderlist}>Aluno(a) Reportado!</Text>
            </View>


        <FlatList style={styles.flat}
            data={report}

            renderItem={({item}) =>
            // <PostSchools postSc={item}></PostSchools> 
            <PostReport postSc={item}></PostReport>
            // <View>
            //     <Text>{item.name_student}</Text>

            // </View>
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
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 15,
        paddingBottom:30,
        
    },
    textheaderlist:{
        fontSize: 18,
        color: 'black',
    }

}
    
)