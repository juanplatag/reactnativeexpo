import React, { useContext, useEffect,useState } from 'react';
import { ScrollView,StyleSheet,StatusBar,Text, View, TextInput, Platform, TouchableWithoutFeedback,KeyboardAvoidingView, Keyboard, Alert, TouchableOpacity,Image,ActivityIndicator } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { StackScreenProps } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';


import { Background } from '../components/Background';
import { WhiteLogo } from '../components/WhiteLogo';
import { loginStyles } from '../theme/loginTheme';
import { useForm } from '../hooks/useForm';
import { styles } from '../theme/appTheme';
import { Fab } from '../components/Fab';
import { ModalAura } from '../components/ModalAura';





import { AuthContext } from '../context/AuthContext';
interface Props extends StackScreenProps<any, any> {}

export const Login = ({ navigation }: Props) => {

    const [loading, setLoading] = useState(false);
    const { signIn, errorMessage, removeError } = useContext( AuthContext );
    const [modalVisible, setModalVisible] = useState(false);

    const { correo, password, onChange,setFormValue } = useForm({
       correo: '',
       password: '' 
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

    const correoActual = async () => {

        const passwordActual : string = await AsyncStorage.getItem("password") || ''
        const mailActual : string = await AsyncStorage.getItem("correo") || ''

        setFormValue({
            correo: mailActual,
            password: passwordActual
        })
    }

    useEffect(() => {
        correoActual()
    }, [])

    useEffect(() => {
        if( errorMessage.length === 0 ) return;

        Alert.alert( 'Mensaje', errorMessage,[{
            text: 'Ok',
            onPress: removeError
        }]);

    }, [ errorMessage ])

    const onLogin = () => {
        setLoading(true)
        Keyboard.dismiss();
        if(!correo){
            Alert.alert(
                "Mensaje",
                "Debe registrar el correo",
                [
                  { text: "Ok", onPress: () => null }
                ]
              )
              setLoading(false)
             return
        }
        if(!password){
            Alert.alert(
                "Mensaje",
                "Debe registrar el password",
                [
                  { text: "Ok", onPress: () => null }
                ]
              )
              setLoading(false)
             return
        }

        setLoading(false)
        
        //console.log("Contrasena crypto")
        //console.log(passwordcrypto)
        signIn({ correo, password });
    }
    const ocultarTeclado  =  () => {
        Keyboard.dismiss()
    }

    const modalChat  =  () => {
        setModalVisible(true)
    }

    const cerrarModalChat  =  () => {
        setModalVisible(false)
    }

    return (
        <>
            {/* Background */}
            <StatusBar barStyle="light-content" backgroundColor="#002B93" />  
            <Background/>
            

            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

            <View style={ loginStyles.formContainer }>    
    
             
     
                    {/* Keyboard avoid view */}
                    <WhiteLogo 
                       width = {Platform.OS === 'ios' ? 120 : 130}
                       height = {Platform.OS === 'ios' ? 120 : 130}
                    />
 
                    <View style={{paddingBottom: 30}} ></View>

                    {/*<Text style={ loginStyles.title }>Iniciar Sesión</Text> */} 

                    <View style={loginStyles.inputContainer}>
                        <View style={loginStyles.iconStyle}>
                            <Icon name="person-outline" color="#333333" size={ 20 }/>
                        </View>
                        <TextInput
                            placeholder="Ingrese su correo"
                            placeholderTextColor='#aaa' // "#666666"
                            style={[loginStyles.input, {
                                color: '#515154' //"#959699"
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
                            placeholderTextColor= '#aaa' // "#666666"
                            secureTextEntry={data.secureTextEntry ? true : false}
                            style={[loginStyles.input, {
                                color: '#515154' //"#959699"
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


                    {/* Boton login */}
                    <View style={ loginStyles.buttonContainer }>
                        <TouchableOpacity
                            activeOpacity={ 0.8 }
                            style={[loginStyles.button,(correo === '' || password === '') ? {borderColor: 'white'} : {borderColor: '#FF7901',backgroundColor: '#FF7901'}]}
                            onPress={ onLogin }
                            disabled={correo === '' || password === '' ? true : false}
                        >
                            { loading  ? (  
                               <ActivityIndicator size="small" color="#FFF" />
                            )
                            :
                              <Text style={ loginStyles.buttonText } >Iniciar sesión</Text>
                            }
                            
                        </TouchableOpacity>
                    </View>


                    <View style={loginStyles.categoryContainer}>
                        <TouchableOpacity
                            style={loginStyles.categoryBtn} 
                            onPress={ () => navigation.replace('Registrar') }
                        >    
                            <View style={loginStyles.categoryIcon}>
                                {/*
                                <Image
                                    source={require('../assets/icons/crear_usuario.png')}
                                    style={{

                                        width: 30, //Platform.OS === 'ios' ? 30 : 35,
                                        height: 30, //Platform.OS === 'ios' ? 30 : 35,
                                    }}
                                />
                                */}
                                <Icon name="person-add-outline" color="white" size={ 30 }/>


                            </View>
                            <Text style={loginStyles.categoryBtnTxt}>Crear cuenta</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={loginStyles.categoryBtn} 
                            onPress={ () => navigation.replace('RestaurarPassword') }
                            /*onPress={ () => navigation.replace('RestaurarPassword') } */
                        >
                            <View style={loginStyles.categoryIcon}>
                       {/**
                        *          <Image
                                    source={require('../assets/icons/recuperar_password.png')}
                                    style={{
                                        width: 35, //Platform.OS === 'ios' ? 35 : 40,
                                        height: 35, //Platform.OS === 'ios' ? 35 : 40,
                                    }}
                                />
                        * 
                        */}
                                <Icon name="lock-closed-outline" color="white" size={ 30 }/>
                            </View>
                            <Text style={loginStyles.categoryBtnTxt}>Recuperar contraseña</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{paddingBottom: 30}} ></View>
              
                    <ModalAura
                        modalVisible={modalVisible}
                        cerrarModalChat={cerrarModalChat}
                        navigation={navigation}
                    />

                      <View style={loginStyles.footer}>
                    
                     <Text style={loginStyles.categoryBtnTxt}>Versión 2.1</Text>
                    </View>
                    <Fab title="Aura" onPress={ () => modalChat() } />

        
              
              
               {/*
               </TouchableWithoutFeedback>
               */}

            </View>
            </TouchableWithoutFeedback>     

            
            
        </>
    )
}




