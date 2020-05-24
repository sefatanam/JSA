import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabs from './BottomTabs';
import {DrawerContent} from '../components/DrawerContent';

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Profile"
      drawerContent={props => <DrawerContent {...props} />}>
      {/* <Drawer.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          headerStyle: {backgroundColor: '#6200ee'},
          headerTintColor: 'white',
        }}
      /> */}
      <Drawer.Screen
        name="DrawerHome"
        component={BottomTabs}
        options={{
          headerStyle: {backgroundColor: '#6200ee'},
          headerTintColor: 'white',
        }}
      />
    </Drawer.Navigator>
  );
};
export default DrawerStack;