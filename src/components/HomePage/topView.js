import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text,View} from 'react-native';

export default function TopView()
{
return(
    <View style={styles.fullView}>
        <Text>.</Text>
    </View>
)

}
const styles = StyleSheet.create({
    fullView:{
        flex:1,
        backgroundColor:'#6557c3',
        paddingBottom:50,
    },
})