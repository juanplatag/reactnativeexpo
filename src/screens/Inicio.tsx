import React, { useContext, useEffect } from 'react';
import { SafeAreaView,ScrollView,StyleSheet,StatusBar,Text, View, TextInput, Platform, KeyboardAvoidingView,TouchableWithoutFeedback, Keyboard, Alert, TouchableOpacity,Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { StackScreenProps } from '@react-navigation/stack';

import { Background } from '../components/Background';
import { WhiteLogo } from '../components/WhiteLogo';

import { AuthContext } from '../context/AuthContext';
import LinearGradient from 'react-native-linear-gradient'



//import { StackScreenProps } from '@react-navigation/stack';
//import { AuthContext } from '../context/AuthContext';
interface Props extends StackScreenProps<any, any> {}

 
export const Inicio = ({ navigation }: Props) => {

    const { user, token, logOut } = useContext( AuthContext );

    return (
        <>
            {/* Background */}
            {/*<StatusBar backgroundColor="#003F93" /> */}
                
   

                <StatusBar barStyle="light-content" backgroundColor="#002B93" /> 
                <Background/>
                <SafeAreaView style={ styles.container }>   
                       
                 
                   
                    {/* Keyboard avoid view */}
                   
                    <WhiteLogo 
                       width = {Platform.OS === 'ios' ? 150 : 180}
                       height = {Platform.OS === 'ios' ? 180 : 210}
                    />


                <View style={[styles.categoryContainer, {paddingBottom: 30}]}>

                    <TouchableOpacity
                      style={styles.categoryBtn}
                      onPress={() => navigation.navigate('BuscarEntradas')}
                    >
                    
                    <View style={styles.categoryIcon}>
                        <Icon name="file-tray-full-outline" color="#fff" size={ 35 }/>
                    </View>
                    <Text style={styles.categoryBtnTxt}>Entradas y Defectos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.categoryBtn}
                      onPress={() => navigation.navigate('BuscarSociedad')}
                    >
                    <View style={styles.categoryIcon}>
                         <Icon name="newspaper-outline" color="#fff" size={ 35 }/>
                    </View>
                    <Text style={styles.categoryBtnTxt}>Sociedades</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                       style={styles.categoryBtn} 
                       onPress={() => navigation.navigate('BuscarPropiedad')}
                    >
                    <View style={styles.categoryIcon}>
                          <Icon name="document-text-outline" color="#fff" size={ 35 }/>  
                    </View>
                    <Text style={styles.categoryBtnTxt}>Propiedades</Text>
                    </TouchableOpacity>
                </View>

                <View style={[styles.categoryContainer, {paddingBottom: 30}]}>
                    <TouchableOpacity 
                       style={styles.categoryBtn} 
                       onPress={() => navigation.navigate('BuscarTasaUnica')}
                    >
                    <View style={styles.categoryIcon}>
                          <Icon name="card-outline" color="#fff" size={ 35 }/>
                    </View>
                    <Text style={styles.categoryBtnTxt}>Tasa Única</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.categoryBtn} 
                        onPress={() => navigation.navigate('BuscarAgentes')}
                    >
                    <View style={styles.categoryIcon}>
                          <Icon name="people-outline" color="#fff" size={ 35 }/>
                    </View>
                    <Text style={styles.categoryBtnTxt}>Agente Residente</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.categoryBtn} 
                        onPress={() => navigation.navigate('BuscarFolioSuspendido')}
                    >
                    <View style={styles.categoryIcon}>
                          <Icon name="receipt-outline" color="#fff" size={ 35 }/>
                    </View>
                    <Text style={styles.categoryBtnTxt}>Folio Suspendido</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.categoryContainer}>
                    <TouchableOpacity 
                        style={styles.categoryBtn} 
                        onPress={() => navigation.navigate('BuscarTomos')}
                    >
                    <View style={styles.categoryIcon}>
                          <Icon name="book-outline" color="#fff" size={ 35 }/>
                    </View>
                    <Text style={styles.categoryBtnTxt}>Tomos</Text>
                    </TouchableOpacity>
                    

         
                    <TouchableOpacity 
                        style={styles.categoryBtn} 
                        onPress={() => navigation.navigate('BuscarRollos')}
                    >
                    <View style={styles.categoryIcon}>
                          <Icon name="server-outline" color="#fff" size={ 35 }/>
                    </View>
                    <Text style={styles.categoryBtnTxt}>Rollos</Text>
                    </TouchableOpacity>
 


                    <TouchableOpacity 
                       style={styles.categoryBtn} 
                       onPress={() => navigation.navigate('BuscarCotejoDoc')}
                    >
                    <View style={styles.categoryIcon}>
                          <Icon name="qr-code-outline" color="#fff" size={ 35 }/>
                    </View>
                    <Text style={styles.categoryBtnTxt}>Validación de Documentos</Text>
                    </TouchableOpacity>
                </View>
             
             
            </SafeAreaView>

             
       

        </>
    )
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',

    },
    contenido: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: '0.5%',
      flex: 1
    }, 

    categoryContainer: {
      flexDirection: 'row',
      width: '99%',
     // marginHorizontal: '2.5%',
      alignSelf: 'center',
      marginTop: 25,
      marginBottom: 10,
    },
    categoryContainer2: {
      flexDirection: 'row',
      width: '90%',
     // marginHorizontal: '2.5%',
      alignSelf: 'center',
      marginTop: 25,
      marginBottom: 10,
    },
    categoryBtn: {
      flex: 1,
      width: '33%',
      height: 75,
      marginHorizontal: 0,
      alignSelf: 'center',
      //backgroundColor: 'red'
    },
    categoryBtn2: {
      flex: 1,
      width: '45%',
      height: 75,
      marginHorizontal: 0,
      alignSelf: 'center',
      //backgroundColor: 'red'
    },
    categoryIcon: {
      borderWidth: 1,
      borderColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      width: 70,
      height: 70,
      borderRadius: 50,
    },
    categoryIcon2: {
      borderWidth: 0,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      width: 70,
      height: 70,
      borderRadius: 50,
    },
    
    categoryBtnTxt: {
      alignSelf: 'center',
      marginTop: 5,
      color: '#fff',
    },
    cardsWrapper: {
      marginTop: 20,
      width: '90%',
      alignSelf: 'center',
    },
    card: {
      height: 100,
      marginVertical: 10,
      flexDirection: 'row',
      shadowColor: '#999',
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
    },
    cardImgWrapper: {
      flex: 1,
    },
    cardImg: {
      height: '100%',
      width: '100%',
      alignSelf: 'center',
      borderRadius: 8,
      borderBottomRightRadius: 0,
      borderTopRightRadius: 0,
    },
    cardInfo: {
      flex: 2,
      padding: 10,
      borderColor: '#ccc',
      borderWidth: 1,
      borderLeftWidth: 0,
      borderBottomRightRadius: 8,
      borderTopRightRadius: 8,
      backgroundColor: '#fff',
    },

  });


