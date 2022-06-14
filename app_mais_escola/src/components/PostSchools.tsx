import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ClassEscolas from "../class/ClassEscolas";


export default function PostSchools(props: { postSc: ClassEscolas }) {
    return (
        <View style={styles.container}>

                
            <View style={styles.contflat}>

                
                <TouchableOpacity style={styles.bot}>
                    <Text>{props.postSc.nomeEscola}</Text>
                    <Text>{props.postSc.rpa}</Text>
                    <Text>{props.postSc.quantAlun}</Text>

                </TouchableOpacity>

            </View>

        </View>
    );
}

const styles = StyleSheet.create ({
    container:{
        flex: 1,
        backgroundColor: '#14efdd',
 
    },
    contflat:{
        flex: 2,
        border: 'solid',
        marginTop: 3,
        backgroundColor: '#bece10',
    },
    bot:{
        marginTop: 20,
        height: 50,
        width:'80%',
        borderRadius: 12,
        backgroundColor: '#fff',
        justifyContent: "space-between",
        paddingHorizontal: 15,
        alignContent: 'center',
        flexDirection: 'row'
    }
}
    
)