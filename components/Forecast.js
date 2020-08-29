import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function Forecast(props) {
    let img = ""
    switch(props.main){
        case 'Rain' : img = require('../rain.png') 
        break;
        case 'Mist' : img = require('../mist.png') 
        break;
        case 'Clouds' : img = require('../clouds.jpg') 
        break;
        case 'Sunny' : img = require('../sunny.png') 
        break;
        case 'Thunderstorms' : img = require('../thunderstorm.png') 
        break;
        case 'Fog' : img = require('../mist.png') 
        break;

    }

    return (
        <View>
            <Text style = {styles.content}>{props.main}</Text>
            <View style={styles.imgIcon}>
                <Image source={img} style={{width:70,height:70,top:30,left:55}} />
            </View>
            <Text style = {styles.contentone}>{props.description}</Text>

            <View style={{flexDirection: 'row', padding: 30}}>
                <Text style={{paddingRight: 22}}></Text>
                <Text style = {styles.contenttwo}>{props.temp}</Text>
                <Text style = {styles.contentthree}>°C</Text>
            </View>    

        </View>
    )
   }
const styles = StyleSheet.create({
    content:{
        paddingTop: 30,
        textAlign : 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
    },
    contentone:{
        paddingTop: 30,
        textAlign : 'center',
        fontSize: 25,
        color: 'white'
    },
    contenttwo:{  
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white'
    },
    contentthree:{
        textAlignVertical: 'center',
        fontSize: 15,
        color: 'white'
    },
    mg:{
        justifyContent: 'center',
        alignItems: 'center'
    }

}) 