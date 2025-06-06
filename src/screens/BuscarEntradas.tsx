import React, { useContext, useEffect,useState } from 'react';
import { SafeAreaView,ScrollView,StatusBar,Text, View, TextInput, Platform, KeyboardAvoidingView,TouchableWithoutFeedback, Keyboard, Alert, TouchableOpacity,Image } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import LineargGradient from 'react-native-linear-gradient';

import { Cargando } from '../components/Cargando';
import { consultaStyles } from '../theme/consultasTheme';
import { useForm } from '../hooks/useForm';
import { obternerEntradas } from '../utils/acciones';

//import { AuthContext } from '../context/AuthContext';
//import { StackScreenProps } from '@react-navigation/stack';
//import { AuthContext } from '../context/AuthContext';
//interface Props extends StackScreenProps<any, any> {}
interface Props extends StackScreenProps<any,any>{}


export const BuscarEntradas = ( { navigation }: Props ) => {


   // const { signIn, errorMessage, removeError } = useContext( AuthContext );
   const [borderBottomColor, setBorderBottomColor] = useState('transparent');

   //const { checkToken } = useContext( AuthContext );
  // const { user, token, logOut } = useContext( AuthContext );


   const [loading, setLoading] = useState(false);


   const { anio, noentrada, onChange } = useForm({
      anio: 0,
      noentrada: 0 
   });


   const consultarAPI = async () => {

        let response = await obternerEntradas( anio, noentrada )
        
        if (response.statusresponse){
            Alert.alert(
                "",
                response.message,
                [
                { text: "Ok", onPress: () => null }
                ]
            )
            setLoading(false)
            return
        }else{
            setLoading(false)

            if(response.data.length > 1){
                navigation.navigate("ListadoEntradas", response.data)
            }else{
                navigation.navigate("DetalleEntrada", response.data[0])
            }
        
        }
    }  


   const validarCriterio = () => {
       //setLoading(true)
       Keyboard.dismiss();
       if(!anio){
           Alert.alert(
               "",
               "Debe registrar el anio de la entrada",
               [
                 { text: "Ok", onPress: () => null }
               ]
             )
            setLoading(false)
            return
       }
       if(!noentrada){
           Alert.alert(
               "",
               "Debe registrar el numero de entrada",
               [
                 { text: "Ok", onPress: () => null }
               ]
             )
             setLoading(false)
            return
       }

       //setLoading(false)
       //console.log(anio)
       //console.log(noentrada)
       //checkToken()
       setLoading(true)
       consultarAPI()

   }



    return (
        <>
            {/* Background */}
          
            <StatusBar barStyle="light-content" backgroundColor="#014DA3" />
           
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={ (Platform.OS === 'ios') ? 'padding': 'height' }
            >
              
                <View style={ consultaStyles.formContainer }>    

                    <Cargando 
                       modalVisible={loading}
                    /> 
      
                   <View style={{paddingBottom: 50}} ></View>
                   
           
                    <TextInput 
                        placeholder="Año de la Entrada"
                        placeholderTextColor="#006CD5"
                        underlineColorAndroid='#006CD5'
                        style={[ 
                            consultaStyles.inputField,
                            ( Platform.OS === 'ios' ) && consultaStyles.inputFieldIOS
                        ]}
                        onChangeText={ (value) => onChange(value, 'anio') }
                        selectionColor="#006CD5"
                        clearButtonMode="always"
                        keyboardType="numeric"
                    />

                    <TextInput 
                        placeholder="No. de Entrada / No. de Asiento"
                        placeholderTextColor="#006CD5"
                        underlineColorAndroid='#006CD5'
                        style={[ 
                            consultaStyles.inputField,
                            ( Platform.OS === 'ios' ) && consultaStyles.inputFieldIOS
                        ]}
                        onChangeText={ (value) => onChange(value, 'noentrada') }
                        selectionColor="#006CD5"
                        clearButtonMode="always"
                        keyboardType="numeric"
                    />


                    <View style={{paddingBottom: 50}} ></View>
                    <View style={ consultaStyles.buttonContainer }>
                        <TouchableOpacity
                            activeOpacity={ 0.8 }
                            onPress={ validarCriterio }
                            disabled={!anio || !noentrada  ? true : false}
                        >
                             <LineargGradient
                                start={{ x: 0, y: 0 }}
                                end={{x: 1, y: 1 }}
                                colors={['#014DA3', '#006CD5']}
                                style={consultaStyles.button}
                            >
                                <Text style={ consultaStyles.buttonText } >Buscar</Text>
                            </LineargGradient>
  
                            

                        </TouchableOpacity>
                    </View>
                    
                    {/*
                    <View style={ consultaStyles.buttonContainer }>
                        <TouchableOpacity
                            activeOpacity={ 0.14 }
                            style={ consultaStyles.buttonLimpiar }
                        >
  
                            <Text style={ consultaStyles.buttonTextLimpiar } >Limpiar Pantalla</Text>

                        </TouchableOpacity>
                    </View>
                    */}


              <View style={{paddingBottom: 30}} ></View>

 
            </View>
            
            </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </>

    )
}


