//com.ionicframework.rpmovil
import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
enableScreens(false);
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';


import { Navigator } from './src/navigator/Navigator';
import { AuthProvider } from './src/context/AuthContext';

const AppState = ({ children }: any ) => {
  


  return (
    <>
    <AuthProvider>
       { children }
    </AuthProvider>
    </>
  )
}

const App = () => {
  return (
    <>
    <NavigationContainer>
      <AppState>
        <Navigator /> 
      </AppState>
    </NavigationContainer>
    </>
  )
}

export default App