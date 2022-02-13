import React, { Component } from 'react';
import { Text, View,ActivityIndicator,Pressable } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons'; 

class IconLoad extends Component {
  constructor(){
    super()
    this.state={
      showIcon:true
    }
  }
  componentDidMount()
  {
    setTimeout(() =>{
      this.setState({
        showIcon:false
      })
    },7000)
  }
  render() {
    return (
      <View >
        {
          this.state.showIcon ?
          <ActivityIndicator size="large" color="#00ff00" />
          :
<MaterialCommunityIcons name="refresh" size={35} color="#40a629" />        }
      </View>
    );
  }
}

export default IconLoad;