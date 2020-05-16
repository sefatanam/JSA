/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native';
import {Formik} from 'formik';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Button} from 'react-native-paper';

function HomeScreen({navigation}) {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Formik />
      <Text>Home Screen</Text>
      {/* <Button title="Press" onPress={() => navigation.navigate('Details')} /> */}
      <Button onPress={() => navigation.navigate('Details')}>Press</Button>
    </View>
  );
}

function DetailsScreen({navigation}) {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button title="Press" onPress={() => navigation.navigate.goBack()} />
    </View>
  );
}

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
