import HomePage from "./src/Components/HomePage";
import LogInPage from "./src/Components/LogInPage";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { BlurView } from 'expo-blur';
import { Calendar, CalendarList, Agenda, LocaleConfig } from 'react-native-calendars';
import React, { useState } from 'react';
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const Stack = createNativeStackNavigator();


export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="LogIn" component={LogInPage} options={{ headerShown: false }}/>
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ headerShown: false }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
