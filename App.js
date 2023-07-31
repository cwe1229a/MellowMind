import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Text, View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import SoundboardScreen from "./screens/SoundboardScreen";
import { useFonts } from "expo-font";


const Stack = createStackNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    'DancingScript': require('./assets/fonts/DancingScript-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <View />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Soundboard' component={SoundboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
