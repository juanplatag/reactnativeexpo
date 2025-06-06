import React, { useEffect,useState } from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Login} from "../screens/Login";
import {Registrar} from "../screens/Registrar";
import {RestaurarPassword} from "../screens/RestaurarPassword";
import {Aura} from "../screens/Aura";
import {CodigoVerificador} from "../screens/CodigoVerificador";
import {CambiarPassword} from "../screens/CambiarPassword";
import { LoadingScreen } from '../screens/LoadingScreen';
const Stack = createStackNavigator();

export const RutasNoAutenticadas = () => {

  const [loading, setLoading] = useState(false)
  const [estado, setEstado] = useState('')
  
  const checkEstado = async () => {
    const estadoTemp:string = await AsyncStorage.getItem('estado') || '1'
    setEstado(estadoTemp)
    setLoading(true)
  }


  useEffect(() => {
    checkEstado();
  }, [])

  
  return (

    <>
    { !loading ?
           (
             <> 
              <LoadingScreen />
             </>
           )
           :
           (
             <>

    
    
        <Stack.Navigator
          initialRouteName = {estado == '1' ? "Login" : "CodigoVerificador"} 
          screenOptions={{
            headerShown: false,
            cardStyle: {
              backgroundColor: 'white'
            },
            headerStyle: {
              elevation: 0,
              shadowColor: 'transparent'
            }
          }}
          
        >

        <Stack.Screen component={Login} name="Login" />
        
        <Stack.Screen 
             component={Registrar} 
             name="Registrar" 
             options={{
                  title: "Crear Cuenta", 
                  //headerShown: true,
                  headerTransparent: true,
                  headerBackTitleVisible: false,
                  headerTintColor: '#fff',
      
                  //headerStyle: {
                  //    backgroundColor: '#003F93'
                  //}, 
                  headerTitleStyle: {
                      fontWeight: 'bold'
                  },
              }}
        />


        <Stack.Screen 
              component={RestaurarPassword} 
              name="RestaurarPassword" 
              options={{
                title: "Recuperar Contrasena", 
                //headerShown: true,
                headerTransparent: true,
                headerBackTitleVisible: false,
                headerTintColor: '#fff',
    
                //eaderStyle: {
                //    backgroundColor: '#003883'
                //}, 
                headerTitleStyle: {
                    fontWeight: 'bold'
                },
            }}
        />

        <Stack.Screen 
              component={CodigoVerificador} 
              name="CodigoVerificador" 
              options={{
                title: "Código de confirmación", 
                //headerShown: true,
                headerTransparent: true,
                headerBackTitleVisible: false,
                headerTintColor: '#fff',
    
                //eaderStyle: {
                //    backgroundColor: '#003883'
                //}, 
                headerTitleStyle: {
                    fontWeight: 'bold'
                },
            }}
        />

        <Stack.Screen 
              component={CambiarPassword} 
              name="CambiarPassword" 
              options={{
                title: "Cambiar Password", 
                //headerShown: true,
                headerTransparent: true,
                headerBackTitleVisible: false,
                headerTintColor: '#fff',
    
                //eaderStyle: {
                //    backgroundColor: '#003883'
                //}, 
                headerTitleStyle: {
                    fontWeight: 'bold'
                },
            }}
        />

       <Stack.Screen 
        component={Aura} 
              name="Aura" 
              options={{
                headerShown: true,
                title: "Aura", 
                headerTransparent: false,
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerTintColor: '#fff',
                headerStyle: {
                  backgroundColor: '#014DA3'
                }, 
           }}
              
      />

   
      </Stack.Navigator>

      </>
          )
    }
    </>

  );
}
