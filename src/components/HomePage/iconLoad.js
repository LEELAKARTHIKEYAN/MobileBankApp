import React, { useState } from 'react';
import { Text, View,ActivityIndicator,Pressable } from 'react-native';

import { SimpleLineIcons } from '@expo/vector-icons'; 

const IconLoad= () => {
    const [animate,setAnm] = useState(false);

    function close(){
        setAnm(false);
    }
  return (
    <View>
    <SimpleLineIcons name="refresh" size={30} color="green" />
    </View>
  );
}

export default IconLoad;