import React from 'react';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeStack from './HomeStack'
import Profile from '../screens/Profiles/Profile'
const Tabs = createMaterialBottomTabNavigator();
const BottomTabs = ({params}) => {
    return(
        <Tabs.Navigator
        initialRouteName="Home"
        activeColor="#6420ee"
        inactiveColor="#aca7a7"
        barStyle={{ backgroundColor: "white" }}
      >
        <Tabs.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarLabel: "Home",
            tabBarColor: "#6200ee",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tabs.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: "Profile",
            tabBarColor: "#6200ee",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
      </Tabs.Navigator>
    
    )
}

export default BottomTabs;
