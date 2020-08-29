import React, { useState, useEffect } from 'react'
import { Text, View, ImageBackground, StyleSheet } from 'react-native'
import Forecast from './Forecast'
export default function Wheather(props){
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0,
        temp_min: 0,
        temp_max: 0,
        name: 'name',
        country: 'country'
    })

useEffect(() => {
    console.log(`fetching data with zipCode = ${props.zipCode}`)
    if (props.zipCode) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=a44f55626de8f51f38b7a1819b3c8a2a`)
        .then((response) => response.json())
        .then((json) => {
            setForecastInfo({
                main: json.weather[0].main,
                description: json.weather[0].description,
                temp: json.main.temp,
                temp_min: json.main.temp_min,
                temp_max: json.main.temp_max,
                name: json.name,
                country: json.sys.country
            });
        })
        .catch((error) => {
                console.warn(error);
        });
    }
}, [props.zipCode])
    
return (
    <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
        <View style={styles.temp}>
        <Text style={styles.zipCode}>Zip Code is {props.zipCode}.</Text>
        <Forecast {...forecastInfo}/>
        </View>
    </ImageBackground>
)
}
const styles = StyleSheet.create({
    backdrop: {
        width: '100%',
        height: '100%'
    },
    temp: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor : 'black',
        opacity: 0.5, 
        height: '55%',


    },
    zipCode: {
        paddingTop : 25, 
        textAlign : 'center',
        fontSize : 20,
        color: 'white'
    }
})