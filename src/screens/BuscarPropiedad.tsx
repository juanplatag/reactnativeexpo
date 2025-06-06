import React, { useContext, useEffect,useState } from 'react';
import { SafeAreaView,ScrollView,StatusBar,Text, View, TextInput, Platform, KeyboardAvoidingView,TouchableWithoutFeedback, Keyboard, Alert, TouchableOpacity,Image } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import LineargGradient from 'react-native-linear-gradient';

import { Cargando } from '../components/Cargando';
import { consultaStyles } from '../theme/consultasTheme';
import { useForm } from '../hooks/useForm';
import { obternerEntradas,obternerFolios } from '../utils/acciones';


//import { StackScreenProps } from '@react-navigation/stack';
//import { AuthContext } from '../context/AuthContext';

//interface Props extends StackScreenProps<any, any> {}
interface Props extends StackScreenProps<any,any>{}


export const BuscarPropiedad = ( { navigation }: Props ) => {

   // const { signIn, errorMessage, removeError } = useContext( AuthContext );
   const [borderBottomColor, setBorderBottomColor] = useState('transparent');


   const [procesando, setisloading] = useState(false);


   const { NumeroFolio, ubicacion,TitularesRegistrales,cedulaTitularRegistral,NumeroFolio_matriz,ubicacion_matriz,nombresociedad, onChange } = useForm({
        NumeroFolio : "",
        ubicacion : "",
        TitularesRegistrales : "",
        cedulaTitularRegistral : "",
        NumeroFolio_matriz : "",
        ubicacion_matriz : "",
        nombresociedad : ""
   });


   const consultarAPI = async () => {

    let response = await obternerFolios( NumeroFolio, ubicacion,TitularesRegistrales,cedulaTitularRegistral,NumeroFolio_matriz,ubicacion_matriz,nombresociedad )
    
    if (response.statusresponse){
        await setisloading(false)
        Alert.alert(
            "",
            response.message,
            [
              { text: "Ok", onPress: () => null }
            ]
          )
         
         return
    }else{
        await setisloading(false)
       //console.log(response.data)
       if(response.data.length > 1){
         navigation.navigate("ListadoFolios", response.data)
       }else{
         navigation.navigate("DetalleFolios", response.data[0])
       }
       
    }
}  

   const validarCriterio = () => {
       //setLoading(true)
       Keyboard.dismiss();
      
       if(!NumeroFolio && !ubicacion && !TitularesRegistrales && !cedulaTitularRegistral && !NumeroFolio_matriz && !ubicacion_matriz){
           Alert.alert(
               "",
               "Debe registrar un dato en la busqueda",
               [
                 { text: "Ok", onPress: () => null }
               ]
             )
             setisloading(false)
            return
       }

       //setLoading(false)
       //console.log(NumeroFolio)
       //console.log(nombresociedad)
       setisloading(true)
       consultarAPI()

   }


    return (
        <>
            {/* Background */}
          
            <StatusBar barStyle="light-content" backgroundColor="#014DA3" />
            
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={ (Platform.OS === 'ios') ? 'padding': 'height' }
            >
               <ScrollView> 

               <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                

                
                <View style={ consultaStyles.formContainer }>    
            
                    {/*
                    <Cargando 
                       modalVisible={loading}
                    /> 
                    */}
                    <Cargando 
                       modalVisible={procesando}
                    /> 
      
                   <View style={{paddingBottom: 10}} ></View>
                   
           
                    <TextInput 
                        placeholder="Número de Folio"
                        placeholderTextColor="#006CD5"
                        underlineColorAndroid='#006CD5'
                        style={[ 
                            consultaStyles.inputField,
                            ( Platform.OS === 'ios' ) && consultaStyles.inputFieldIOS
                        ]}
                        onChangeText={ (value) => onChange(value, 'NumeroFolio') }
                        selectionColor="#006CD5"
                        clearButtonMode="always"
                        keyboardType="numeric"
                    />

                    <TextInput 
                        placeholder="Código de Ubicación"
                        placeholderTextColor="#006CD5"
                        underlineColorAndroid='#006CD5'
                        style={[ 
                            consultaStyles.inputField,
                            ( Platform.OS === 'ios' ) && consultaStyles.inputFieldIOS
                        ]}
                        onChangeText={ (value) => onChange(value, 'ubicacion') }
                        selectionColor="#006CD5"
                        clearButtonMode="always"
                        keyboardType="numeric"
                    />

                    <TextInput 
                        placeholder="Nº Identificación Titulares"
                        placeholderTextColor="#006CD5"
                        underlineColorAndroid='#006CD5'
                        style={[ 
                            consultaStyles.inputField,
                            ( Platform.OS === 'ios' ) && consultaStyles.inputFieldIOS
                        ]}
                        onChangeText={ (value) => onChange(value, 'cedulaTitularRegistral') }
                        selectionColor="#006CD5"
                        clearButtonMode="always"
                        autoCapitalize="words"
                        autoCorrect={ false }
                    />

                    <TextInput 
                        placeholder="Titulares Registrales"
                        placeholderTextColor="#006CD5"
                        underlineColorAndroid='#006CD5'
                        style={[ 
                            consultaStyles.inputField,
                            ( Platform.OS === 'ios' ) && consultaStyles.inputFieldIOS
                        ]}
                        onChangeText={ (value) => onChange(value, 'TitularesRegistrales') }
                        selectionColor="#006CD5"
                        clearButtonMode="always"
                        autoCapitalize="words"
                        autoCorrect={ false }
                    />


                    <TextInput 
                        placeholder="Número de Folio Matriz"
                        placeholderTextColor="#006CD5"
                        underlineColorAndroid='#006CD5'
                        style={[ 
                            consultaStyles.inputField,
                            ( Platform.OS === 'ios' ) && consultaStyles.inputFieldIOS
                        ]}
                        onChangeText={ (value) => onChange(value, 'NumeroFolio_matriz') }
                        selectionColor="#006CD5"
                        clearButtonMode="always"
                        keyboardType="numeric"
                    />

                    <TextInput 
                        placeholder="Código de Ubicación Matriz"
                        placeholderTextColor="#006CD5"
                        underlineColorAndroid='#006CD5'
                        style={[ 
                            consultaStyles.inputField,
                            ( Platform.OS === 'ios' ) && consultaStyles.inputFieldIOS
                        ]}
                        onChangeText={ (value) => onChange(value, 'ubicacion_matriz') }
                        selectionColor="#006CD5"
                        clearButtonMode="always"
                        keyboardType="numeric"
                    />


                    <View style={{paddingBottom: 30}} ></View>
                    <View style={ consultaStyles.buttonContainer }>
                        <TouchableOpacity
                            activeOpacity={ 0.8 }
                            onPress={ validarCriterio }
                           // disabled={!anio || !noentrada  ? true : false}
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
                    
                  
                  

                
              </View>

              

            </TouchableWithoutFeedback>  
            </ScrollView> 
            </KeyboardAvoidingView>
            
        </>

    )
}


