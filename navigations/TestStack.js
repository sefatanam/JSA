import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/AppHome/Home';
import Details from '../screens/Dashboard/Details';
const Stack = createStackNavigator();
const TestStack = ({params}) => (
  
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>

);

export default TestStack;
