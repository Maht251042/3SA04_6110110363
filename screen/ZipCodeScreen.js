import React from 'react';
import { FlatList, View, Text, StyleSheet, ImageBackground, Button, Linking } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


const availableZipItems = [
    { place: '𝐻𝑎𝑡𝑦𝑎𝑖', code: '90110', img:require('../hatyai.jpg') },
    { place: '𝑃ℎ𝑢𝑘𝑒𝑡', code: '83000', img:require('../phuket.jpg') },
    { place: '𝑇𝑟𝑎𝑛𝑔', code: '92000', img:require('../trang.jpg') },
    { place: '𝐶ℎ𝑖𝑎𝑛𝑔𝑚𝑎𝑖', code: '50000', img:require('../chiangmai.jpg') },
    { place: '𝐵𝑎𝑛𝑔𝑘𝑜𝑘', code: '10200', img:require('../bangkok.jpg') }, 
    { place: '𝐾ℎ𝑜𝑛𝑘𝑎𝑒𝑛', code: '40000', img:require('../khonkaen.jpg') },
    { place: '𝐶ℎ𝑜𝑛𝑏𝑢𝑟𝑖', code: '20000', img:require('../chonburi.jpg') },
    { place: '𝑅𝑎𝑦𝑜𝑛𝑔', code: '21000', img:require('../rayong.jpg') },
]

const ZipItem = ({place, code, navigation, img}) => (
    <TouchableHighlight onPress={() => {
        navigation.navigate('Weather', {zipCode: code})
    }}>
        <View style={styles.zipItem}>
            <ImageBackground source={img} style = {styles.backdrop}>
                <Text style = {styles.zipPlace}>{place}</Text>
                <Text style = {styles.zipCode}>{code}</Text>
            </ImageBackground>
        </View>
    </TouchableHighlight>
)
export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return (
        <View>
            <Button
                    style={styles.Button} color="black" 
                    title="Wellcome to Website"
                    onPress={() => Linking.openURL("https://weather.com/weather/today/l/7.00,100.48?par=google&temp=c")}
            ></Button>

            <FlatList
                    data = {availableZipItems}
                    keyExtractor = {item => item.code}
                    renderItem = {({item}) => <ZipItem {...item} navigation={navigation}/>}
            />             
        </View>   
                 
    );
}
const styles = StyleSheet.create({
    zipItem:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    zipPlace: {
        textAlign: 'center',
        textAlignVertical: 'center',
        flex: 1,
        fontSize: 25,
        fontWeight: 'bold',
        backgroundColor: 'black',
        opacity: 0.7,
        color: 'white'
    },
    zipCode: {
        flex: 1,
        padding: 5,
        textAlign: 'right',
        color: 'white',
    },
    backdrop: {
        width: '100%',
        height: 200
    }
}) 