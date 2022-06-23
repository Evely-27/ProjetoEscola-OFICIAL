import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ClassReportStudents from "../class/ClassReportStudents";


export default function PostReport(props: { postSc: ClassReportStudents }) {
    return (
        <View style={styles.container}>
                
            <TouchableOpacity style={styles.bot}>

                    <Text style={styles.textbotlist}>{props.postSc.name_student}</Text>
                    {/* <Text style={styles.textbotlist}>{props.postSc.cep_student}</Text>
                    <Text style={styles.textbotlist}>{props.postSc.med_student}</Text> */}
                </TouchableOpacity> 

        </View>
    );
}

const styles = StyleSheet.create ({
    container:{
        flex: 1,
    },
    bot:{
        marginTop: 20,
        height: 50,
        width:'90%',
        borderRadius: 13,
        backgroundColor: '#267DFF',
        flex: 1,
        justifyContent: "center",
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 15,
        alignContent: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    textbotlist:{
        color: '#fff',
        fontSize: 20
    },
}
    
)