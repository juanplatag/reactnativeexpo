import React, { useContext, useEffect } from 'react';
import {ScrollView,StatusBar, Text, View, TextInput, Platform, KeyboardAvoidingView,TouchableWithoutFeedback, Keyboard, Alert, TouchableOpacity,Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackScreenProps } from '@react-navigation/stack';

import { Background } from '../components/Background';
import { WhiteLogo } from '../components/WhiteLogo';
import { loginStyles } from '../theme/loginTheme';
import { useForm } from '../hooks/useForm';
import { crearUsuario } from '../utils/acciones';


//import { StackScreenProps } from '@react-navigation/stack';
//import { AuthContext } from '../context/AuthContext';

//interface Props extends StackScreenProps<any, any> {}


import { AuthContext } from '../context/AuthContext';

interface Props extends StackScreenProps<any,any>{}

export const Registrar = ( { navigation }: Props ) => {

    const { signUp, errorMessage,message, removeError,removeMessage } = useContext( AuthContext );

    const { nombre,correo, password,password2, onChange,setFormValue } = useForm({
        nombre: '',
        correo: '',
        password: '',
        password2: ''  
     });


    const [data, setData] = React.useState({
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }
    useEffect(() => {
        if( errorMessage.length === 0 ) return;

        Alert.alert( 'Error', errorMessage,[{
            text: 'Ok',
            onPress: removeError
        }]);

    }, [ errorMessage ])


    useEffect(() => {
        if( message.length === 0 ) return;

        Alert.alert( 'Gracias por registrarte', message,[{
            text: 'Ok',
            onPress: CodigoVerificador
        }]);

    }, [ message ])

    const CodigoVerificador = () => {
        removeMessage()
        navigation.replace('CodigoVerificador')
    }

    const onLogin = () => {
        //console.log({nombre,correo, password, password2});
        Keyboard.dismiss();

        // password al menos 8 caracteres
        if(password.length < 8) {
            Alert.alert(
            "Mensaje",
            "La contraseña debe tener al menos 8 caracteres.",
            [
                { text: "OK", onPress: () => null }
            ]
            );
            return;
        }

        if(password2.length < 8) {
            Alert.alert(
            "Mensaje",
            "La contraseña debe tener al menos 8 caracteres.",
            [
                { text: "OK", onPress: () => null }
            ]
            );
            return;
        }

        if(password !== password2){
            Alert.alert(
                "Mensaje",
                "Las contraseñas no son iguales",
                [
                  { text: "Ok", onPress: () => null }
                ]
              )

             return
        }
        signUp({nombre, correo, password });
        //consultarAPI()
    }

    /*const consultarAPI = async () => {

        let response = await crearUsuario( nombre, correo, password )
        
        if (response.statusresponse){
           // console.log(response)
            Alert.alert(
                "",
                response.message,
                [
                { text: "Ok", onPress: () => null }
                ]
            )
            return
        }else{
           // console.log(response)
            Alert.alert(
                "Gracias por registrarte",
                response.message,
                [
                { text: "Ok", onPress: () => navigation.replace('CodigoVerificador') }
                ]
            )
        
        }
    }  */


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

                    <Text style={ loginStyles.title }>Crear Cuenta</Text> 
                    <View style={loginStyles.inputContainer}>
                        <View style={loginStyles.iconStyle}>
                            <Icon name="person-outline" color="#333333" size={ 20 }/>
                        </View>
                        <TextInput
                            placeholder="Nombre y Apellido"
                            placeholderTextColor="#aaa"
                            style={[loginStyles.input, {
                                color: "#515154"
                            }]}
                            onChangeText={ (value) => onChange(value, 'nombre') }
                            value={ nombre }
                            clearButtonMode="always"
                            autoCapitalize="words"
                            autoCorrect={ false }

                        />
                    </View>

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

                    <View style={loginStyles.inputContainer}>
                        <View style={loginStyles.iconStyle}>
                            <Icon name="lock-closed-outline" color="#333333" size={ 20 }/>
                        </View>
                        <TextInput
                            placeholder="Contraseña"
                            placeholderTextColor="#aaa"
                            secureTextEntry={data.secureTextEntry ? true : false}
                            style={[loginStyles.input, {
                                color: "#515154"
                            }]}
                            onChangeText={ (value) => onChange(value, 'password') }
                            value={ password }
                            autoCapitalize="none"
                            autoCorrect={ false }
                        />
                        <TouchableOpacity
                            onPress={updateSecureTextEntry}
                        >
                            {data.secureTextEntry ? 
                                <View style={loginStyles.textStyle}>
                                    <Text style={ loginStyles.titleStyle }>Mostrar</Text> 
                                </View>
                            :
                                <View style={loginStyles.textStyle}>
                                    <Text style={ loginStyles.titleStyle }>Ocultar</Text> 
                                </View>
                            }
                        </TouchableOpacity>
                    </View>

                    <View style={loginStyles.inputContainer}>
                        <View style={loginStyles.iconStyle}>
                            <Icon name="lock-closed-outline" color="#333333" size={ 20 }/>
                        </View>
                        <TextInput
                            placeholder="Repetir contraseña"
                            placeholderTextColor="#aaa"
                            secureTextEntry={data.secureTextEntry ? true : false}
                            style={[loginStyles.input, {
                                color: "#515154"
                            }]}
                            onChangeText={ (value) => onChange(value, 'password2') }
                            value={ password2 }
                            autoCapitalize="none"
                            autoCorrect={ false }

                        />
                        <TouchableOpacity
                            onPress={updateSecureTextEntry}
                        >
                            {data.secureTextEntry ? 
                                <View style={loginStyles.textStyle}>
                                    <Text style={ loginStyles.titleStyle }>Mostrar</Text> 
                                </View>
                            :
                                <View style={loginStyles.textStyle}>
                                    <Text style={ loginStyles.titleStyle }>Ocultar</Text> 
                                </View>
                            }
                        </TouchableOpacity>
                    </View>

                    {/* Crear una nueva cuenta */}
                  
                    

                    {/* Boton login */}
                    <View style={ loginStyles.buttonContainer }>
                        <TouchableOpacity
                            activeOpacity={ 0.8 }
                            style={[loginStyles.button,(nombre === '' || correo === '' || password === '' || password2 === '') ? {borderColor: 'white'} : {borderColor: '#FF7901',backgroundColor: '#FF7901'}]}
                            onPress={ onLogin }
                            disabled={(nombre === '' || correo === '' || password === '' || password2 === '') ? true : false}
                        >
                            <Text style={ loginStyles.buttonText } >Crear cuenta</Text>
                        </TouchableOpacity>
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
                   
                    

                </View>
                
            
            </TouchableWithoutFeedback>
            </ScrollView>     
            </KeyboardAvoidingView>
        </>
    )
}




