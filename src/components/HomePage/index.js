import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';

import { StyleSheet, Text,View,Image,SafeAreaView,ScrollView,FlatList,TouchableOpacity} from 'react-native';

import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';

import TopView from './topView';
import CardView from './cardModal';
import ExpView from './expView';

export default function MobileWallie()
{


return(
    <View> 
        {/* To adjust Phone top View */}
        <TopView/>
        {/* The page view */}
        <View style={styles.HomeView}>
            {/* The user nav bar */}
            <View style={{paddingTop:10}}>
                <View style={styles.usernav}>
                <FontAwesome5 name="user-circle" size={35} color="#f5426c" />
                <Text style={styles.usertag}>Hi, LK!</Text>
                <View style={{paddingLeft:100 , paddingTop:5}}>
                <SimpleLineIcons name="refresh" size={30} color="#42f575"/>
                </View>
                </View>
            </View>

            {/* balance and spending view */}
            <View style={styles.statsview}>
                <View style={styles.accstats}>
                <Text style={styles.accTextstats}>Total Balance</Text>
                <Text style={styles.accNumstats}>$ 15,269</Text>
                <View style={{paddingLeft:50 , paddingTop:5}}>
                    <Entypo name="line-graph" size={35} color="#42f54b" />
                </View>
                </View>
                <View style={styles.accstats}>
                    <Text style={styles.accTextstats}>Monthly Spending</Text>
                    <Text style={styles.accNumstats}>$ 7,175</Text>
                    <View style={{paddingLeft:50 , paddingTop:5}}>
                        <SimpleLineIcons name="graph" size={50} color="#e61949" />
                    </View>
                </View>
            </View>
            <View style={{flexDirection:'row'}}>
            <View style={styles.myexpenditure}>
                <Text style={{fontSize:18,fontWeight: 'bold', color: 'white',paddingRight:5}}>Your expenditures</Text>
                <FontAwesome5 name="coins" size={25} color="#e0b638" />
                {/* ---------add view card modal */}
            </View>
            <CardView/>
            </View>
            <View>
               {/* scrollView of expenditures */}
               <ExpView/>
            </View>
            {/* ----pay bar */}
            <View style={styles.paybar}>
                <MaterialIcons name="payment" size={30} color="#fcba03" style={styles.payicon}/>
                <AntDesign name="google" size={30} color="#ed2442"style={styles.payicon} />
                <MaterialCommunityIcons name="contactless-payment-circle-outline" size={30} color="#3fa6ba" style={styles.payicon} />
                <FontAwesome5 name="rupee-sign" size={30} color="#45ba3f" style={styles.payicon}/>
            </View>
        </View>
    </View>
)

}
const styles = StyleSheet.create({
    usernav:{
        backgroundColor:'#2b2a65',
        paddingTop:5,
        paddingBottom:5,
        flexDirection:'row',
        paddingLeft:15,
        borderRadius:40,
    },
    HomeView: {
        backgroundColor:'#1a1c47',
        paddingBottom:'200%',
    },
    usertag:{
        fontWeight:'bold',
        color:'white',
        fontFamily:'sans-serif',
        fontSize:20,
        paddingTop:5,
        paddingLeft:100,
    },
    statsview:{
        paddingTop:20,
        paddingLeft:15,
        display: 'flex',
        flexDirection:'row',
    },
    accstats:{
        backgroundColor:'#2b2a65',
        height:160,
        width:170,
        borderRadius:40,
        marginRight:10,
    },
    accTextstats:{
        color:'white',
        fontSize:11.85,
        paddingTop:25,
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
        width: 20,
        height: 20,
      },
      myexpenditure:{
          flexDirection:'row',
          paddingTop:20,
          paddingLeft:20,
      },
      //paybar
      paybar:{
          marginTop:10,
          paddingTop:8,
          paddingBottom:8,
          flexDirection:'row',
          justifyContent:'space-around',
          backgroundColor:'#2b2a65',
          borderRadius:40,
      },
      payicon:{
          padding:2,
      },
})