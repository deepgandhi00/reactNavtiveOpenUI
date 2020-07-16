/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SignUp from './screens/SignUp/SignUp';
import Login from './screens/Login/Login';
import DrawerNavigator from './screens/laleet/drawernavigator';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="tab">
        <Stack.Screen name="signup" component={SignUp}/>
        <Stack.Screen name="login" component = {Login}/>
        <Stack.Screen name="tab" component={DrawerNavigator}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
