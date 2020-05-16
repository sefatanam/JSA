import React from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-paper';

const Home = props => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text>Home</Text>
    <Button onPress={() =>props.navigation.navigate('Details')}>Press</Button>
  </View>
);

export default Home;
