import React from 'react';
import {Text, View,Image, StyleSheet} from 'react-native';
import { Button } from 'react-native-paper';

const Profile = (props) => (
  <View style={styles.container}>
    <Image style={styles.imageStyle} source = {require('../../assets/sefat.jpg')} />
    <Text style={styles.textStyle}>Sefat Anam</Text>

    <Button onPress={()=>props.navigation.navigate('Home')}>Go Back to Home </Button>
   
  </View>
);

export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

 
  },
  imageStyle:{
    height:150,
    width:150,
    borderRadius:150/2
  },
  textStyle:{
    fontSize:25,
    fontFamily:'Fira Code',
    color:'black',
    margin:8
  }
});
