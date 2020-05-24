import React from 'react';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeStack from './HomeStack'

const Tabs = createMaterialBottomTabNavigator();
const BottomTabs = ({params}) => {
    return(
        <Tabs.Navigator
        initialRouteName="Home"
        activeColor="#f0edf6"
        inactiveColor="#aca7a7"
        barStyle={{ backgroundColor: "#6200ee" }}
      >
        <Tabs.Screen
          name="Search"
          component={HomeStack}
          options={{
            tabBarLabel: "Search",
            tabBarColor: "#6200ee",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        {/* <Tabs.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarLabel: "Home",
            tabBarColor: "#6200ee",
    
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        /> */}
      </Tabs.Navigator>
    
    )
}

export default BottomTabs;
