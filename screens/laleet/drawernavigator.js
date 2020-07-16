import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';

const Tab = createMaterialTopTabNavigator();

const DrawerNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="login" component={Login}/>
            <Tab.Screen name="signup" component={SignUp}/>
        </Tab.Navigator>
    );
}

export default DrawerNavigator;