import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ClassEscolas from "../class/ClassEscolas";


export default function PostSchools(props: { postSc: ClassEscolas }) {
    return (
        <View style={styles.container}>
                
            <TouchableOpacity style={styles.bot}>
                    <Text style={styles.textbotlist}>{props.postSc.rpa}</Text>
                    <Text style={styles.textbotlist}>{props.postSc.escola}</Text>
                    <Text style={styles.textbotlist}>{props.postSc.qtd_alunos}</Text>
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
        justifyContent: "space-between",
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 15,
        alignContent: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    textbotlist:{
        color: '#fff',
    },
}
    
)