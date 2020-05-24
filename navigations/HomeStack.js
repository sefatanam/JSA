import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/AppHome/Home';
import Details from '../screens/Dashboard/Details';
import Profile from '../screens/Profiles/Profile';

import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
const HomeStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      options={{
        headerStyle: {backgroundColor: '#6200ee'},
        headerTintColor: 'white',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#6200ee"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
      }}
      name="Home"
      component={Home}
    />
    <Stack.Screen name="Details" component={Details} />
    <Stack.Screen name="Profile" component={Profile} />
  </Stack.Navigator>
);

export default HomeStack;
