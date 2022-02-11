import React from 'react';
import { SafeAreaView,ScrollView,View, VirtualizedList, StyleSheet, Text, StatusBar } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { Fontisto } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 



export default function ExpView()
{
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.itemsView}>
          <AntDesign name="amazon" size={24} color="grey" />
          <Text style={styles.itemtext}> Amazon Prime</Text>
          <Text style={styles.itemrate}> - $49</Text>
        </View>
        <View style={styles.itemsView}>
        <FontAwesome5 name="briefcase-medical" size={24} color="green" />
          <Text style={styles.itemtext}>  HealthCare</Text>
          <Text style={styles.itemrate}> - $55</Text>
        </View>
        <View style={styles.itemsView}>
        <FontAwesome name="shopping-cart" size={24} color="yellow" />
          <Text style={styles.itemtext}> FlipKart</Text>
          <Text style={styles.itemrate}> - $34</Text>
        </View>
        <View style={styles.itemsView}>
        <Ionicons name="fast-food" size={24} color="orange" />
          <Text style={styles.itemtext}>  Swiggy</Text>
          <Text style={styles.itemrate}> - $45</Text>
        </View>
        <View style={styles.itemsView}>
        <Fontisto name="netflix" size={24} color="red" />
          <Text style={styles.itemtext}>   Netflix</Text>
          <Text style={styles.itemrate}> - $28</Text>
        </View>
        <View style={styles.itemsView}>
        <FontAwesome name="shopping-cart" size={24} color="grey" />
          <Text style={styles.itemtext}>Amazon Shopping</Text>
          <Text style={styles.itemrate}> - $90</Text>
        </View>
        <View style={styles.itemsView}>
        <FontAwesome5 name="spotify" size={24} color="green" />
          <Text style={styles.itemtext}>Spotify</Text>
          <Text style={styles.itemrate}> - $31</Text>
        </View>
        <View style={styles.itemsView}>
        <Fontisto name="uber" size={24} color="white" />
          <Text style={styles.itemtext}>Uber</Text>
          <Text style={styles.itemrate}> - $84</Text>
        </View>
        <View style={styles.itemsView}>
        <MaterialCommunityIcons name="motorbike" size={24} color="yellow" />
          <Text style={styles.itemtext}>Rapido</Text>
          <Text style={styles.itemrate}> - $49</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingTop:10,
    marginTop:10,
    height:380,
  },
  scrollView: {
    backgroundColor: '#2b2a65',
    marginHorizontal:10,
    borderRadius:30,
  },
  itemsView:{
    margin:5,
    padding:18,
    backgroundColor:'#1a1c47',
    borderRadius:30,
    flexDirection: 'row',
    justifyContent:'space-between',
  },
  itemtext:{
    color: 'white',
    fontSize:15,
  },
  itemrate:{
    color: '#f5426c',
    fontWeight:'bold',
  },
});
