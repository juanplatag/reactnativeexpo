import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import BotonSalir from '../components/BotonSalir';
import {BotonCompartir} from '../components/BotonCompartir';

import {Inicio} from "../screens/Inicio";
import {Home} from "../screens/Home";
import {BuscarEntradas} from "../screens/BuscarEntradas";
import {BuscarSociedad} from "../screens/BuscarSociedad";
import {BuscarPropiedad} from "../screens/BuscarPropiedad";
import { DetalleEntrada } from '../screens/DetalleEntrada';
import { ListadoEntradas } from '../screens/ListadoEntradas';
import { ListadoFolios } from '../screens/ListadoFolios';
import { DetalleFolios } from '../screens/DetalleFolios';
import {BuscarTasaUnica} from "../screens/BuscarTasaUnica";
import {BuscarAgentes} from "../screens/BuscarAgentes";
import {ListadoAgentes} from "../screens/ListadoAgentes";
import {BuscarFolioSuspendido} from "../screens/BuscarFolioSuspendido";
import {ListadoFolioSuspendido} from "../screens/ListadoFolioSuspendido";
import {BuscarTomos} from "../screens/BuscarTomos";
import {ListadoTomos} from "../screens/ListadoTomos";
import {BuscarRollos} from "../screens/BuscarRollos";
import {ListadoRollos} from "../screens/ListadoRollos";
import {BuscarCotejoDoc} from "../screens/BuscarCotejoDoc";
import {ListadoPaginas} from "../screens/ListadoPaginas";


import { VisorPdf } from '../screens/VisorPdf';


const Stack = createStackNavigator();

export const RutasAutenticadas = () => {
  return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          //headerShown: false,
          cardStyle: {
            backgroundColor: 'white'
          }
        }}
      >


      <Stack.Screen 
          component={Inicio} 
          name="Inicio"
          options={{
            //title: "Proteger y Servir",
            //headerShown: false,
            headerRight: props => <BotonSalir />,
            headerBackTitleVisible: false,
            headerStyle: {
               backgroundColor: '#00000070'
            }, 
            //headerTitle: false,
            title: "", 
            headerTransparent: true,
            //headerTintColor: '#fff',

        }}
     
      />  

      <Stack.Screen 
          component={Home} 
          name="Home"
          options={{
            //title: "Proteger y Servir",
            //headerShown: false,
            headerRight: props => <BotonSalir />,
            headerBackTitleVisible: false,
            headerStyle: {
               backgroundColor: '#00000070'
            }, 
            //headerTitle: false,
            title: "", 
            headerTransparent: true,
            //headerTintColor: '#fff',

        }}
     
      />

 
       <Stack.Screen 
        component={BuscarEntradas} 
              name="BuscarEntradas" 
              options={{
                headerShown: true,
                title: "Entradas y Defectos", 
                headerTransparent: false,
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerTintColor: '#fff',
                headerStyle: {
                  backgroundColor: '#014DA3'
                }, 
           }}
              
      />

      <Stack.Screen 
        component={BuscarSociedad} 
              name="BuscarSociedad" 
              options={{
                headerShown: true,
                title: "Sociedades", 
                headerTransparent: false,
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerTintColor: '#fff',
                headerStyle: {
                  backgroundColor: '#014DA3'
                }, 
           }}
              
      />

      <Stack.Screen 
        component={DetalleEntrada} 
              name="DetalleEntrada" 
              options={{
                headerShown: true,
                title: "Entradas y Defectos", 
                headerTransparent: false,
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerTintColor: '#fff',
                headerStyle: {
                  backgroundColor: '#014DA3'
                }, 
           }}
      />

      <Stack.Screen 
        component={ListadoEntradas} 
              name="ListadoEntradas" 
              options={{
                headerShown: true,
                title: "Listado de Entradas y Defectos", 
                headerTransparent: false,
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerTintColor: '#fff',
                headerStyle: {
                  backgroundColor: '#014DA3'
                }, 
           }}
              
      />

      <Stack.Screen 
        component={ListadoFolios} 
              name="ListadoFolios" 
              options={{
                headerShown: true,
                title: "Folios / Fincas / Fichas", 
                headerTransparent: false,
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerTintColor: '#fff',
                headerStyle: {
                  backgroundColor: '#014DA3'
                }, 
           }}
              
      />

      <Stack.Screen 
        component={DetalleFolios} 
              name="DetalleFolios" 
              options={{
                headerShown: true,
                title: "Folios / Fincas / Fichas", 
                headerTransparent: false,
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerTintColor: '#fff',
                headerStyle: {
                  backgroundColor: '#014DA3'
                }, 
           }}
      />


      <Stack.Screen 
        component={BuscarPropiedad} 
              name="BuscarPropiedad" 
              options={{
                headerShown: true,
                title: "Propiedades", 
                headerTransparent: false,
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerTintColor: '#fff',
                headerStyle: {
                  backgroundColor: '#014DA3'
                }, 
           }}
              
      />

      <Stack.Screen 
        component={BuscarTasaUnica} 
              name="BuscarTasaUnica" 
              options={{
                headerShown: true,
                title: "Tasa Única", 
                headerTransparent: false,
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerTintColor: '#fff',
                headerStyle: {
                  backgroundColor: '#014DA3'
                }, 
           }}
              
      />

      <Stack.Screen 
        component={BuscarAgentes} 
              name="BuscarAgentes" 
              options={{
                headerShown: true,
                title: "Agente Residente", 
                headerTransparent: false,
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerTintColor: '#fff',
                headerStyle: {
                  backgroundColor: '#014DA3'
                }, 
           }}
              
      />

      <Stack.Screen 
        component={ListadoAgentes} 
              name="ListadoAgentes" 
              options={{
                headerShown: true,
                title: "Listado de Agente Residente", 
                headerTransparent: false,
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerTintColor: '#fff',
                headerStyle: {
                  backgroundColor: '#014DA3'
                }, 
           }}
              
      />

      <Stack.Screen 
        component={BuscarFolioSuspendido} 
              name="BuscarFolioSuspendido" 
              options={{
                headerShown: true,
                title: "Folio Suspendido", 
                headerTransparent: false,
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerTintColor: '#fff',
                headerStyle: {
                  backgroundColor: '#014DA3'
                }, 
           }}
              
      />


      <Stack.Screen 
        component={ListadoFolioSuspendido} 
              name="ListadoFolioSuspendido" 
              options={{
                headerShown: true,
                title: "Listado de Folio Suspendido", 
                headerTransparent: false,
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerTintColor: '#fff',
                headerStyle: {
                  backgroundColor: '#014DA3'
                }, 
           }}
              
      />


      <Stack.Screen 
        component={BuscarTomos} 
              name="BuscarTomos" 
              options={{
                headerShown: true,
                title: "Buscar Tomos", 
                headerTransparent: false,
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerTintColor: '#fff',
                headerStyle: {
                  backgroundColor: '#014DA3'
                }, 
           }}
              
      />

      <Stack.Screen 
        component={ListadoTomos} 
              name="ListadoTomos" 
              options={{
                headerShown: true,
                title: "Tomos", 
                headerTransparent: false,
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerTintColor: '#fff',
                headerStyle: {
                  backgroundColor: '#014DA3'
                }, 
           }}
              
      />

      <Stack.Screen 
        component={BuscarRollos} 
              name="BuscarRollos" 
              options={{
                headerShown: true,
                title: "Buscar Rollos", 
                headerTransparent: false,
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerTintColor: '#fff',
                headerStyle: {
                  backgroundColor: '#014DA3'
                }, 
           }}
              
      />

      <Stack.Screen 
        component={ListadoRollos} 
              name="ListadoRollos" 
              options={{
                headerShown: true,
                title: "Rollos", 
                headerTransparent: false,
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerTintColor: '#fff',
                headerStyle: {
                  backgroundColor: '#014DA3'
                }, 
           }}
              
      />

      <Stack.Screen 
        component={ListadoPaginas} 
              name="ListadoPaginas" 
              options={{
                headerShown: true,
                title: "Páginas", 
                headerTransparent: false,
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerTintColor: '#fff',
                headerStyle: {
                  backgroundColor: '#014DA3'
                }, 
           }}
              
      />

      <Stack.Screen 
        component={BuscarCotejoDoc} 
              name="BuscarCotejoDoc" 
              options={{
                headerShown: true,
                title: "Validar Documentos", 
                headerTransparent: false,
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerTintColor: '#fff',
                headerStyle: {
                  backgroundColor: '#014DA3'
                }, 
           }}
              
      />

      <Stack.Screen 
        component={VisorPdf} 
              name="VisorPdf" 
              options={{
                headerShown: true,
                title: "Visor PDF", 
                headerTransparent: false,
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerTintColor: '#fff',
                headerStyle: {
                  backgroundColor: '#014DA3'
                }, 
           }}
              
      />
      
    {/*   
      <Stack.Screen 
        component={VisorPdf} 
              name="VisorPdf" 
              options={{
                headerRight: props => <BotonCompartir/>,
                headerShown: true,
                title: "Visor PDF", 
                headerTransparent: false,
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerTintColor: '#fff',
                headerStyle: {
                  backgroundColor: '#014DA3'
                }, 
             }}


             
            })}
              
      />
      */}


        {/*
        <DetailsStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#1f65ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</DetailsStack.Navigator>
        */}
      </Stack.Navigator>
  );
}
