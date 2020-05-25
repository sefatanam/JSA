import React from 'react';
import {Text, View, StyleSheet, Alert} from 'react-native';
import {Button} from 'react-native-paper';

const Home = props => {
  const iconButtonClicked = () => {
    Alert.alert('Icon Button Clicked');
  };
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button onPress={() => props.navigation.navigate('Details')}>
        Go to Details Page
      </Button>
      <Button onPress={() => props.navigation.navigate('Profile')}>
        Go to Profile Page
      </Button>
      <Button icon="camera" onPress={() => iconButtonClicked()}>
        Press me
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
export default Home;
