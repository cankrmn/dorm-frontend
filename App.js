import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Gender from "./Pages/ilgiAlanlari/gender";
import Beklenti from "./Pages/ilgiAlanlari/beklenti";
import EsCinsi from "./Pages/ilgiAlanlari/esCinsi";
import CinselYönelim from "./Pages/ilgiAlanlari/cinselYönelim";
import Foto from "./Pages/ilgiAlanlari/foto";
import IlgiAlani from "./Pages/ilgiAlanlari/ilgiAlanlari";
import FirstPage from "./Pages/firstPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstPage" screenOptions={ {headerShown: false} }>
        <Stack.Screen name = "FirstPage" component = {FirstPage} />
        <Stack.Screen name = "Gender" component = {Gender} />
        <Stack.Screen name = "Beklenti" component = {Beklenti} />
        <Stack.Screen name = "EsCinsi" component = {EsCinsi} />
        <Stack.Screen name = "CinselYönelim" component = {CinselYönelim} />
        <Stack.Screen name = "Foto" component = {Foto} />
        <Stack.Screen name = "IlgiAlani" component = {IlgiAlani} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


