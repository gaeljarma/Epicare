import HomePage from "./src/Components/HomePage";
import LogInPage from "./src/Components/SignUpPage";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { BlurView } from 'expo-blur';
import { Calendar, CalendarList, Agenda, LocaleConfig } from 'react-native-calendars';
import React, { useState, useEffect } from 'react';
import { createClient } from "@supabase/supabase-js";

const Stack = createNativeStackNavigator();
const supabase = createClient("https://yteasuzcyusqvmxsvggt.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0ZWFzdXpjeXVzcXZteHN2Z2d0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY5MjAxMzQsImV4cCI6MjAzMjQ5NjEzNH0.jWQhBPEmH3brwrnIOk0T-wBGO7JorH6A_wMVFtWLDd8");

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
