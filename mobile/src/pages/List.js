import React, { useState, useEffect } from 'react'
import api from "../services/api"
// Aparentemente o SafeAreaView funciona apenas para IOS
import { SafeAreaView, AsyncStorage, Text, Image,StyleSheet } from 'react-native'
import logo from "../assets/logo.png"
import SpotList from "../Components/SpotList"


export default function List() {
    const [techs, setTechs] = useState([]);
    useEffect(() => {
        AsyncStorage.getItem("techs").then(storageTechs => {
            const techsArray = storageTechs.split(',').map(tech => tech.trim());
            setTechs(techsArray)
        })
    }, [])
    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={logo} />
            {techs.map(tech=> <SpotList key={tech} tech={tech}></SpotList>)}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
    logo:{
        height:32,
        resizeMode:"contain",
        alignSelf:"center",
        marginTop:10
    }
})