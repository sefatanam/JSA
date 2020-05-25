import React from 'react';
import {Text, View,Image, StyleSheet} from 'react-native';

const Splash = () => (
  <View style={styles.container}>
    <Image style={styles.imageStyle} source = {require('../../assets/AITS.png')} />
   
  </View>
);

export default Splash;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#205a66'
 
  },
  imageStyle:{
    height:150,
    width:150,
    borderRadius:150/2
  },
  textStyle:{
    fontSize:25,
    fontFamily:'Fira Code',
    color:'#fff'
  }
});
