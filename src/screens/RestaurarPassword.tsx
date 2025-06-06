import React, { useContext, useEffect } from 'react';
import { StatusBar,Text, View, TextInput, Platform, KeyboardAvoidingView,TouchableWithoutFeedback, Keyboard, Alert, TouchableOpacity,Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackScreenProps } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Background } from '../components/Background';
import { WhiteLogo } from '../components/WhiteLogo';
import { loginStyles } from '../theme/loginTheme';
import { useForm } from '../hooks/useForm';
import { recuperarPassword } from '../utils/acciones';


//import { StackScreenProps } from '@react-navigation/stack';
//import { AuthContext } from '../context/AuthContext';

//interface Props extends StackScreenProps<any, any> {}
interface Props extends StackScreenProps<any,any>{}

export const RestaurarPassword = ( { navigation }: Props ) => {

   // const { signIn, errorMessage, removeError } = useContext( AuthContext );
   // const correo:string = "Correo"
    const { correo,onChange } = useForm({
        correo: '' 
    });

    /*
     useEffect(() => {
        if( errorMessage.length === 0 ) return;

        Alert.alert( 'Login incorrecto', errorMessage,[{
            text: 'Ok',
            onPress: removeError
        }]);

    }, [ errorMessage ])

    */
    const onLogin = () => {
        //console.log({email, password});
        Keyboard.dismiss();
        consultarAPI()
    }

    const consultarAPI = async () => {

        let response = await recuperarPassword( correo )
        
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
           await AsyncStorage.setItem('correo', correo);

            Alert.alert(
                "Estimado Usuario",
                response.message,
                [
                { text: "Ok", onPress: () => navigation.replace('CambiarPassword') }
                ]
            )
        
        }
    }  


    return (
        <>
            {/* Background */}
            <StatusBar barStyle="light-content" backgroundColor="#002B93" />  
            <Background/>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={ (Platform.OS === 'ios') ? 'padding': 'height' }
            >


                <View style={ loginStyles.formContainer }>               
                    {/* Keyboard avoid view */}
                    <WhiteLogo 
                       width = {Platform.OS === 'ios' ? 90 : 100}
                       height = {Platform.OS === 'ios' ? 90 : 100}
                    />

                    <Text style={ loginStyles.title }>Ingrese el correo electrónico de la cuenta.</Text> 

                    <View style={loginStyles.inputContainer}>
                        <View style={loginStyles.iconStyle}>
                            <Icon name="mail-outline" color="#333333" size={ 20 }/>
                        </View>
                        <TextInput
                            placeholder="Ingrese su correo"
                            placeholderTextColor="#aaa"
                            style={[loginStyles.input, {
                                color: "#515154"
                            }]}
                            onChangeText={ (value) => onChange(value, 'correo') }
                            value={ correo }
                            clearButtonMode="always"
                            autoCapitalize="none"
                            autoCorrect={ false }
                            keyboardType="email-address"
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
                            style={[loginStyles.button,(correo === '') ? {borderColor: 'white'} : {borderColor: '#FF7901',backgroundColor: '#FF7901'}]}
                            onPress={ onLogin }
                            disabled={correo === '' ? true : false}
                        >

                            <Text style={ loginStyles.buttonText } >Recuperar</Text>
                        </TouchableOpacity>
                    </View>



              <View style={{paddingBottom: 30}} ></View>
                </View>

                
            </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </>

    )
}




