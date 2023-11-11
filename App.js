import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './components/SplashScreen';
import Intro from './components/Intro';
import Auth from './components/Auth';
import Home from './components/Home';
import Splash2 from './components/Splash2';
import PetInput from './components/PetInput'; // Import PetInput component
import HomeSplash from './components/HomeSplash';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="HomeSplash" component={HomeSplash} options={{ headerShown: false }} />
        <Stack.Screen name="Intro" component={Intro} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={Auth} options={{ headerShown: false }}/>
        <Stack.Screen name="Signup" component={Auth} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Splash2" component={Splash2} options={{ headerShown: false }}/>
        <Stack.Screen name="PetInput" component={PetInput} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;