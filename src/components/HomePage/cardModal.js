import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Fontisto } from '@expo/vector-icons'; 


export default function CardView()
{
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Card View has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
              <View style={{paddingBottom:20,}}>
              <Text style={{marginTop:0 ,color:'white',fontSize:10,fontWeight:'bold'}}>Not valid for payment in Foreign Exchange</Text>
              <Text style={styles.modalText}>H LEELA KARTHIKEYAN</Text>
              <Text style={{marginTop:0 ,color:'#4b4a7f'}}>2456 5532 5731</Text>
              <Text style={{marginTop:0 ,color:'#4b4a7f',marginTop:10,fontSize:15,fontStyle:'italic'}}>VALID THRU     02/24</Text>
              <Text style={{marginTop:0 ,color:'black',marginTop:20,backgroundColor:'#faa162',marginRight:180,fontWeight: 'bold'}}>5731 348</Text>
              <View style={styles.visaicon}>
            <Fontisto name="visa" size={30} color="black" />
            </View>
              </View>
            <View style={styles.hidecard}>
            <Pressable
              style={[styles.hidebut,styles.button,styles.buttonClose]}
              onPress={() =>setModalVisible(!modalVisible)}>
            <Text style={styles.hidecardtext}>Hide Card</Text>
            </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>View Card</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop:10,
  },
  modalView: {
    backgroundColor: "#fec295",
    borderRadius: 30,
    paddingTop:20,
    paddingBottom:10,
    paddingLeft:15,
    paddingRight:50,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height:2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#fca7e1",
  },
  buttonClose: {
    backgroundColor: "#7a65e7",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    paddingBottom: 5,
    marginRight: 100,
    fontWeight: "bold",
    fontSize:15,
    marginTop:20,
    color:'#4b4a7f'

  },

  //hidecard button
  hidecard:{
      paddingTop:5,
  },

  hidecardtext: {
      color: "white",
      textAlign: "center",
      fontSize:10,
      fontWeight: "bold",
  },
  hidebut:{
      width:100,
      color: "black",
  },

  visaicon:{
        marginLeft:250,
        marginBottom:1,
  },
});
