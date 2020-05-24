import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../screens/Authentications/SignIn';
import SignUp from '../screens/Authentications/SignUp';

const Stack = createStackNavigator();
const AuthStack = ({params}) => (
    <Stack.Navigator initialRouteName="SignIn" headerMode="none">
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
);

export default AuthStack;
