import React from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-paper';

const Details = props => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text>Details</Text>
    <Button onPress={() => props.navigation.navigate.goBack()}>Press</Button>
  </View>
);

export default Details;
