import React, { useContext, useEffect } from 'react';
import { FlatList,SafeAreaView,ScrollView,StyleSheet,StatusBar,Text, View, TextInput, Platform, KeyboardAvoidingView,TouchableWithoutFeedback, Keyboard, Alert, TouchableOpacity,Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


import { StackScreenProps } from '@react-navigation/stack';

import { Background } from '../components/Background';
import { WhiteLogo } from '../components/WhiteLogo';
import { BackgroundHeader } from '../components/BackgroundHeader';

import { AuthContext } from '../context/AuthContext';
import LinearGradient from 'react-native-linear-gradient'

interface Props extends StackScreenProps<any, any> {}

const menuinicio = [
  {
      "titulo": "Entradas y Defectos",
      "descripcion": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor",
      "nombremenu" : "BuscarEntradas",
      "icon": "file-tray-full-outline"
  },
  {
    "titulo": "Propiedades",
    "descripcion": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor",
    "nombremenu" : "BuscarPropiedad",
    "icon": "reader-outline"
  },
  {
    "titulo": "Sociedades",
    "descripcion": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor",
    "nombremenu" : "BuscarSociedad",
    "icon": "receipt-outline"
  },

  {
    "titulo": "Estatus de Tasa Única",
    "descripcion": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor",
    "nombremenu" : "BuscarTasaUnica",
    "icon": "pricetag-outline"
  },
  {
    "titulo": "Agente Residente",
    "descripcion": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor",
    "nombremenu" : "BuscarAgentes",
    "icon": "people-outline"
  },
  {
    "titulo": "Folio Suspendido",
    "descripcion": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor",
    "nombremenu" : "BuscarFolioSuspendido",
    "icon": "newspaper-outline"
  },
  {
    "titulo": "Tomos",
    "descripcion": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor",
    "nombremenu" : "BuscarTomos",
    "icon": "albums-outline"
  },
  {
    "titulo": "Rollos",
    "descripcion": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor",
    "nombremenu" : "BuscarRollos",
    "icon": "recording-outline"
  },
  /*{
    "titulo": "Validación de Documentos",
    "descripcion": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor",
    "nombremenu" : "BuscarCotejoDoc",
    "icon": "file-tray-full-outline"
  }*/
]







 
export const Home = ({ navigation }: Props) => {

    const { user, token, logOut } = useContext( AuthContext );

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#014DA3" /> 
            {/*<Background/> */}
            <View style={ styles.container }>
                <BackgroundHeader />  
                
               {/*
               <View style={{paddingBottom: Platform.OS === 'ios' ? 10 : 80}} ></View>
                <WhiteLogo 
                    width = {Platform.OS === 'ios' ? 150 : 90}
                    height = {Platform.OS === 'ios' ? 80 : 90}
                />
               */}
                <View style={ styles.BodyContainer }>

                <FlatList
                    style={{flex:1}}
                    data={menuinicio}
                    renderItem={({ item }) => 
                    <>
                    <TouchableOpacity 
                      activeOpacity={ 0.10 }
                      onPress={() => navigation.navigate(item.nombremenu)}
                      style={[styles.menucard,styles.shadow]}
                    >
                       <Item item={item}/>
                    </TouchableOpacity>
                    <View style={{paddingBottom: 10}} ></View>
                    </>
                  }
                    keyExtractor={item => item.nombremenu}
                />
                </View>
                     
    
            </View>
        </>
    )
}


function Item({ item}:any) {
    return (
      <>
      <Icon name={item.icon} color="#021b79" size={ 25 }/>
      <View style={{flex : 1, marginLeft: 12}}>
          <Text style={styles.title} >{item.titulo}</Text>
          {/*<Text style={styles.title2} >{item.descripcion}</Text> */}
      </View>   
  
      <Icon 
          name="chevron-forward-outline"
          color="#021b79"
          size={ 25 }
      />
      </>
    );
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#C5D8ED',
    },

    BodyContainer: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 160 : 120,
    },

    header:{
        backgroundColor: "#00BFFF",
      },
      headerContent:{
        padding:30,
        alignItems: 'center',
      },
      name:{
        fontSize:22,
        color:"#FFFFFF",
        fontWeight:'600',
      },
    menucard: {
       
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
       // marginTop: 10,//24 * 4.5,
        marginHorizontal: 10,
        paddingVertical: Platform.OS === 'ios' ? 20 : 20, //12
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
       // paddingBottom: 30
        
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 12,
    },
    title: {
        fontWeight:"bold",
        fontSize: 16 , //Platform.OS === 'ios' ? 16 : 20,
        color:"#021b79"
      },
      title2: {
        fontSize: 10, //Platform.OS === 'ios' ? 10 : 12,
        color:"#021b79"
      },  

    scrollView2: {
        flex: 1,
        paddingBottom: 1000,
       //justifyContent: 'center'
    },
  });

