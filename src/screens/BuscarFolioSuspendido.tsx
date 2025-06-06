import React, { useContext, useEffect,useState } from 'react';
import { SafeAreaView,ScrollView,StatusBar,Text, View, TextInput, Platform, KeyboardAvoidingView,TouchableWithoutFeedback, Keyboard, Alert, TouchableOpacity,Image } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import LineargGradient from 'react-native-linear-gradient';

import { Cargando } from '../components/Cargando';
import { consultaStyles } from '../theme/consultasTheme';
import { useForm } from '../hooks/useForm';
import { FolioAnotacion } from '../utils/acciones';


//import { StackScreenProps } from '@react-navigation/stack';
//import { AuthContext } from '../context/AuthContext';

//interface Props extends StackScreenProps<any, any> {}
interface Props extends StackScreenProps<any,any>{}


export const BuscarFolioSuspendido = ( { navigation }: Props ) => {

   // const { signIn, errorMessage, removeError } = useContext( AuthContext );
   const [borderBottomColor, setBorderBottomColor] = useState('transparent');


   const [loading, setLoading] = useState(false);


   const { RUC,Folio,Nombre_Sociedad, onChange } = useForm({
      RUC : "",
      Folio : "",
      Nombre_Sociedad : ""
   });


   const consultarAPI = async () => {

    //let response = await obternerFolios( NumeroFolio, ubicacion,TitularesRegistrales,cedulaTitularRegistral,NumeroFolio_matriz,ubicacion_matriz,nombresociedad )
    let response = await FolioAnotacion( RUC,Folio,Nombre_Sociedad )
    
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
       //console.log(response.data)

       
       navigation.navigate("ListadoFolioSuspendido", response.data)

         
       
    }
}  

   const validarCriterio = () => {
       //setLoading(true)
       Keyboard.dismiss();
       if(!RUC && !Folio && !Nombre_Sociedad){
           Alert.alert(
               "",
               "Debe registrar un dato en la busqueda",
               [
                 { text: "Ok", onPress: () => null }
               ]
             )
            setLoading(false)
            return
       }

       //setLoading(false)
       //console.log(NumeroFolio)
       //console.log(nombresociedad)
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
                        placeholder="Número de Folio"
                        placeholderTextColor="#006CD5"
                        underlineColorAndroid='#006CD5'
                        style={[ 
                            consultaStyles.inputField,
                            ( Platform.OS === 'ios' ) && consultaStyles.inputFieldIOS
                        ]}
                        onChangeText={ (value) => onChange(value, 'Folio') }
                        selectionColor="#006CD5"
                        clearButtonMode="always"
                        keyboardType="numeric"
                    />

                    <TextInput 
                        placeholder="Ruc"
                        placeholderTextColor="#006CD5"
                        underlineColorAndroid='#006CD5'
                        style={[ 
                            consultaStyles.inputField,
                            ( Platform.OS === 'ios' ) && consultaStyles.inputFieldIOS
                        ]}
                        onChangeText={ (value) => onChange(value, 'RUC') }
                        selectionColor="#006CD5"
                        clearButtonMode="always"
                        autoCapitalize="words"
                        autoCorrect={ false }
                    />


                    <TextInput 
                        placeholder="Nombre de la Sociedad"
                        placeholderTextColor="#006CD5"
                        underlineColorAndroid='#006CD5'
                        style={[ 
                            consultaStyles.inputField,
                            ( Platform.OS === 'ios' ) && consultaStyles.inputFieldIOS
                        ]}
                        onChangeText={ (value) => onChange(value, 'Nombre_Sociedad') }
                        selectionColor="#006CD5"
                        clearButtonMode="always"
                        autoCapitalize="words"
                        autoCorrect={ false }
                    />


                    <View style={{paddingBottom: 50}} ></View>
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
                    

              <View style={{paddingBottom: 50}} ></View>


              </View>
            
            </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </>

    )
}


