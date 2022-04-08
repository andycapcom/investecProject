import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Native module
import DeviceInfo from 'react-native-device-info';

import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import configureStore from './src/store/store';

const store = configureStore();

const Stack = createNativeStackNavigator();

function App() {
  useEffect(() => {
    DeviceInfo.isEmulator().then((isEmulator) => {
      if (isEmulator) {
        Alert.alert(
          "!!!",
          "You are running an emulator",
          [
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ]
        );
      }
    });
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
