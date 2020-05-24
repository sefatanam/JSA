import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStack from './AuthStack';
import DrawerStack from './DrawerStack';

const Stack = createStackNavigator();
const RootStack = ({userToken}) => (
    <Stack.Navigator headerMode="none">
    {userToken ? (
      <Stack.Screen
        name="App"
        component={DrawerStack}
        options={{
          animationEnabled: false,
          headerStyle: { backgroundColor: "#6200ee" },
          headerTintColor: "white",
        }}
      />
    ) : (
      <Stack.Screen
        name="Auth"
        component={AuthStack}
        options={{
          animationEnabled: false,
          headerStyle: { backgroundColor: "#6200ee" },
          headerTintColor: "white",
        }}
      />
    )}
  </Stack.Navigator>
);

export default RootStack;
