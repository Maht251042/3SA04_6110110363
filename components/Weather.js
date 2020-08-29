import React, { useState, useEffect } from 'react'
import { Text, View, ImageBackground, StyleSheet } from 'react-native'
import Forecast from './Forecast'
export default function Wheather(props){
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0
    })
    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=386285ce0816bcfa6c10a7c2ff8076de`)
            .then((response) => response.json())
            .then((json) => {
                setForecastInfo({
                    main: json.weather[0].main,
                    description: json.weather[0].description,
                    temp: json.main.temp
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
        height: '45%'
    },
    zipCode: {
        paddingTop : 25, 
        textAlign : 'center',
        fontSize : 20,
        color: 'white'
    }
})