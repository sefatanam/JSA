import React from 'react';
import {Text, View, StyleSheet, Alert} from 'react-native';
import {Button} from 'react-native-paper';

class Member {
  id = '';
  name = '';
  phone = '';
  email = '';
}

const Home = props => {

  let obj = new Member();
  obj.name = 'Sefat Anam';
  obj.phone = '4654648';
  obj.email = 'someone@email.com';
  obj.id = '1';

  const iconButtonClicked = () => {
    Alert.alert(`From Home.js ${obj.name} ${obj.email}\n ${obj.phone}`);
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
