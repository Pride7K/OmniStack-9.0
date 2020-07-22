import React,{useEffect,useState} from "react"
import api from "../services/api"
import {View,Text} from "react-native"

export default function SpotList({tech}){
    const [spots,setSpots] = useState([])

    useEffect(()=>{
        async function loadSpots(){
            const response = await api.get(`/spots?tech=${tech}`)
            setSpots(response.data)
        }
        loadSpots()
    },[])

    return(
        <View>
            <Text>
                {tech}
            </Text>
        </View>
    )
}