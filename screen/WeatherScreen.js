import React from 'react';
import Weather from '../components/Weather';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function WeatherScreen({route}) {
    return (
        <View>
            <Weather zipCode={route.params.zipCode} />
            <StatusBar style="auto" />
        </View>
    );
}