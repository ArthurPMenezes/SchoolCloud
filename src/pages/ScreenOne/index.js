import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,

} from 'react-native';

export default function () {

    return (
        <View style={styles.container}>
            <Text>Tela do primeiro ano</Text>
        </View>
)}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#05386b',
      alignItems:"center",
    }

})