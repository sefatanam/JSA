import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

const Home = props => (
  <View style={styles.container}>
    <Text>Home</Text>
    <Button onPress={() => props.navigation.navigate('Details')}>Press</Button>
    <Button icon="camera">Press me</Button>
    
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
export default Home;
