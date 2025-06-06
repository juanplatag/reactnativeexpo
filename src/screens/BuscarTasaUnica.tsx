import React, { useContext, useEffect,useState } from 'react';
import { StyleSheet,SafeAreaView,ScrollView,StatusBar,Text, View, TextInput, Platform, KeyboardAvoidingView,TouchableWithoutFeedback, Keyboard, Alert, TouchableOpacity,Image } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import LineargGradient from 'react-native-linear-gradient';

import { Cargando } from '../components/Cargando';
import { consultaStyles } from '../theme/consultasTheme';
import { useForm } from '../hooks/useForm';
import { TasaUnica } from '../utils/acciones';


//import { StackScreenProps } from '@react-navigation/stack';
//import { AuthContext } from '../context/AuthContext';

//interface Props extends StackScreenProps<any, any> {}
interface Props extends StackScreenProps<any,any>{}


export const BuscarTasaUnica = ( { navigation }: Props ) => {

   // const { signIn, errorMessage, removeError } = useContext( AuthContext );
   const [borderBottomColor, setBorderBottomColor] = useState('transparent');


   const [loading, setLoading] = useState(false);


   const { ruc, onChange } = useForm({
    ruc : ""
   });


   const consultarAPI = async () => {

    //let response = await obternerFolios( NumeroFolio, ubicacion,TitularesRegistrales,cedulaTitularRegistral,NumeroFolio_matriz,ubicacion_matriz,nombresociedad )
    let response = await TasaUnica( ruc )
    
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
       Alert.alert(
        response.data.message,
        "",
        [
          { text: "Ok", onPress: () => null }
        ]
       )
       //console.log(response.data)

       
      //navigation.navigate("ListadoAgentes", response.data)

         
       
    }
}  

   const validarCriterio = () => {
       //setLoading(true)
       Keyboard.dismiss();
       if(!ruc){
           Alert.alert(
               "Debe ingresar el Número de Ruc",
               "",
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
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={ (Platform.OS === 'ios') ? 'padding': 'height' }
            >         
              <ScrollView> 
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                

                
                <View style={ consultaStyles.formContainer }>    
    

                    <Cargando 
                       modalVisible={loading}
                    /> 
      
                   <View style={{paddingBottom: 60}} ></View>
                   
           

                    <TextInput 
                        placeholder="Número de Ruc"
                        placeholderTextColor="#006CD5"
                        underlineColorAndroid='#006CD5'
                        style={[ 
                            consultaStyles.inputField,
                            ( Platform.OS === 'ios' ) && consultaStyles.inputFieldIOS
                        ]}
                        onChangeText={ (value) => onChange(value, 'ruc') }
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
             
            
            
            </TouchableWithoutFeedback>
            </ScrollView> 
            </KeyboardAvoidingView>
            <View style={styles.footer}>
                <View style={styles.card}>
                    <View style={styles.header}>
                        <Text style={{fontWeight:"bold",fontSize:18}}>Estimado(a) usuario:</Text>
                    </View>
                    <Text style={{fontWeight:"bold",color:"gray",fontSize:14}}>Cualquier consulta sobre el estatus de su RUC, favor acercarse a las oficinas de la DGI.</Text>
                </View>
            </View>
        </>

    )
}

const styles = StyleSheet.create({
    footer: {
        position: 'absolute', 
        left: 0, 
        right: 0, 
        bottom: '3%',
        alignItems:"center"
    },
    card:{
        justifyContent: 'center',
        height:100,
        width:"95%",
        backgroundColor:"white",
        borderRadius:15,
        padding:10,
        elevation:10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5, 
      },
      header: {
        flexDirection:"row",
      }
  });
