import React from 'react';
import { Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto';
import { Ubuntu_400Regular, Ubuntu_700Bold, useFonts} from '@expo-google-fonts/ubuntu';
import { AppLoading } from 'expo';
import Routes from './src/routes.js';


export default function App() {
  const [fontsLoaded] = useFonts({
    Ubuntu_400Regular,
    Roboto_700Bold,
    Roboto_400Regular,
    Ubuntu_700Bold,
    });
    if(!fontsLoaded){
      return <AppLoading />
    }
  return (
    <Routes />
  );
}

