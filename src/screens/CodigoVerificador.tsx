import React, { useContext, useEffect } from 'react';
import { ScrollView,StyleSheet,StatusBar,Text, View, TextInput, Platform, KeyboardAvoidingView,TouchableWithoutFeedback, Keyboard, Alert, TouchableOpacity,Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackScreenProps } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';


import { Background } from '../components/Background';
import { WhiteLogo } from '../components/WhiteLogo';
import { loginStyles } from '../theme/loginTheme';
import { useForm } from '../hooks/useForm';
import { confirmarCuenta } from '../utils/acciones';


//import { StackScreenProps } from '@react-navigation/stack';
import { AuthContext } from '../context/AuthContext';

//interface Props extends StackScreenProps<any, any> {}
interface Props extends StackScreenProps<any,any>{}

export const CodigoVerificador = ( { navigation }: Props ) => {

    const { signIn, errorMessage, removeError } = useContext( AuthContext );
   // const correo:string = "Correo"
    const { codigoconf,onChange } = useForm({
        codigoconf: '' 
    });


    useEffect(() => {
        if( errorMessage.length === 0 ) return;

        Alert.alert( 'Login incorrecto', errorMessage,[{
            text: 'Ok',
            onPress: removeError
        }]);

    }, [ errorMessage ])


    const onLogin = () => {
        //console.log({email, password});
        Keyboard.dismiss();
        consultarAPI()
    }

    const consultarAPI = async () => {
        const correo:any = await AsyncStorage.getItem('correo');
        const password:any = await AsyncStorage.getItem('password');
        
        let response = await confirmarCuenta(correo, parseInt(codigoconf)  )
        
        if (response.statusresponse){
           // console.log(response)
            Alert.alert(
                "Estimado Usuario",
                response.message,
                [
                { text: "Ok", onPress: () => null }
                ]
            )
            return
        }else{
           // console.log(response)
           
           signIn({ correo, password })
        
        }
    }  


    return (
        <>
            {/* Background */}
            <StatusBar barStyle="light-content" backgroundColor="#002B93" />  
            <Background/>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={ (Platform.OS === 'ios') ? 'padding': 'height' }
            >
                <ScrollView> 
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>



                <View style={ loginStyles.formContainer }>               
                    {/* Keyboard avoid view */}
                    <WhiteLogo 
                       width = {Platform.OS === 'ios' ? 90 : 100}
                       height = {Platform.OS === 'ios' ? 90 : 100}
                    />
                    <View style={{paddingBottom: 40}} ></View>
                    <Text style={ loginStyles.title2 }>Ingrese el código de confirmación</Text> 
                    <Text style={ loginStyles.title2 }>para activar su cuenta</Text>
                    <View style={{paddingBottom: 20}} ></View>
                    <View style={loginStyles.inputContainer}>
                        <View style={loginStyles.iconStyle}>
                            <Icon name="lock-closed-outline" color="#333333" size={ 20 }/>
                        </View>
                        <TextInput
                            placeholder="Código de confirmación"
                            placeholderTextColor="#aaa"
                            style={[loginStyles.input2, {
                                color: "#515154"
                            }]}
                            onChangeText={ (value) => onChange(value, 'codigoconf') }
                            value={ codigoconf }
                            selectionColor="#006CD5"
                            clearButtonMode="always"
                            keyboardType="numeric"
                        />
                    </View>
          
                    <TouchableOpacity
                        onPress={ () => navigation.replace('Login') }
                        activeOpacity={ 0.8 }
                        style={ loginStyles.buttonReturn }
                    >
                        <View style={loginStyles.iconStyle}>
                               <Icon name="chevron-back-outline" color="#fff" size={ 40 }/>
                         </View>
                    </TouchableOpacity>                  
 
                    {/* Boton login */}
                    <View style={ loginStyles.buttonContainer }>
                        <TouchableOpacity
                            activeOpacity={ 0.8 }
                            style={[loginStyles.button,(codigoconf === '') ? {borderColor: 'white'} : {borderColor: '#FF7901',backgroundColor: '#FF7901'}]}
                            onPress={ onLogin }
                            disabled={codigoconf === '' ? true : false}
                        >

                            <Text style={ loginStyles.buttonText } >Enviar</Text>
                        </TouchableOpacity>
                    </View>



                    <View style={{paddingBottom: 40}} ></View>


                </View>

 

                
           
                </TouchableWithoutFeedback>
                </ScrollView> 
                
            </KeyboardAvoidingView>
            <View style={styles.footer}>
                    <View style={styles.card}>
                        <View style={styles.header}>
                            <Text style={{fontWeight:"bold",fontSize:18,color:"white"}}>Estimado(a) usuario:</Text>
                        </View>
                        <Text style={{fontWeight:"bold",color:"white",fontSize:14,paddingTop:10}}>Para obtener el código de confirmación, revise su correo electrónico.</Text>
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
        //backgroundColor:"white",
        borderColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        //borderRadius:15,
        padding:10,
       //elevation:10,
        //shadowColor: '#000',
       // shadowOffset: { width: 0, height: 3 },
       // shadowOpacity: 0.5,
       // shadowRadius: 5, 
      },
      card2: {
        alignSelf:"center",
        marginTop: 5,
        marginBottom: 10,
        width: '95%',
        //height: 50,
        height: 100,
        borderColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
      },
      header: {
        flexDirection:"row",
      }
  });





