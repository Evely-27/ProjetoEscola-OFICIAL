import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Animatable from 'react-native-animatable'

export default function Welcome () {
    const navigati = useNavigation();
    return (
        <View style={stylest.container}>

            <View style={stylest.containerLogo}>
                <Animatable.Image  
                animation="flipInY" 
                 source={require('../../../assets/Logo.Welcome.png')} 
                resizeMode= 'contain'
                style={stylest.foto}
                
                />
            </View>

            <Animatable.View  delay={700}animation='fadeInUp' style={stylest.containerForm}>
                <TouchableOpacity style={stylest.button}>
                    <Text  style={stylest.buttonText}>Sou Conselheiro</Text>
                </TouchableOpacity> 

                <TouchableOpacity style={stylest.button}>
                    <Text  style={stylest.buttonText}>Sou Responsável Escolar</Text>
                </TouchableOpacity> 

            </Animatable.View>
        </View>

    );
}

const stylest = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    containerLogo:{
        flex: 3,
        justifyContent: 'center',
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius:25, 
        borderTopRightRadius:25,
        paddingStart: '10%', 
        paddingEnd: '5%', 
        
    },
    foto: {
        height:'55%', 
    },
    button:{
        backgroundColor: '#267DFF',
        width:'90%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText:{
        fontSize:18,
        color: '#fff',
        fontWeight: 'bold' 
    },
})