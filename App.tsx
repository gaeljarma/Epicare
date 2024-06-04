import HomePage from "./src/Components/HomePage";
import LogInPage from "./src/Components/LogInPage";
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

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