import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text,View,Image} from 'react-native';
import TopView from './topView';
export default function MobileWallie()
{


return(
    <View> 
        <TopView/>
        <View style={styles.HomeView}>
            <Text style={styles.usertag}>Hi, Leela!</Text>
            <View style={styles.statsview}>
                <View style={styles.accstats}>
                <Text style={styles.accTextstats}>Total Balance</Text>
                <Text style={styles.accNumstats}>$ 15,269</Text>
                </View>
                <View style={styles.accstats}>
                <Text style={styles.accTextstats}>Monthly Spending</Text>
                <Text style={styles.accNumstats}>$ 7,175</Text>
                {/* <Image source={require('../HomePage/Pictures')} style = {{height: 200, width: 250}} /> */}
                </View>
            </View>
        </View>
    </View>
)

}
const styles = StyleSheet.create({
    HomeView: {
        backgroundColor:'#1a1c47',
        paddingBottom:'200%',
    },
    usertag:{
        fontWeight:'bold',
        color:'white',
        fontFamily:'sans-serif',
        fontSize:20,
    },
    statsview:{
        paddingTop:50,
        paddingLeft:15,
        display: 'flex',
        flexDirection:'row',
    },
    accstats:{
        backgroundColor:'#2b2a65',
        height:150,
        width:170,
        borderRadius:40,
        marginRight:10,
    },
    accTextstats:{
        color:'white',
        fontSize:11.85,
        paddingTop:35,
        paddingLeft:30,
        alignItems:'center',
        justifyContent:'center',
    },
    accNumstats:{
        color:'white',
        fontSize:22,
        fontWeight:'bold',
        paddingTop:10,
        paddingLeft:30,
        alignItems:'center',
        justifyContent:'center',
    },
    tinyLogo: {
        width: 50,
        height: 50,
      },
})