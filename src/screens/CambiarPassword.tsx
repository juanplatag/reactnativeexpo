import React, { useContext, useEffect } from 'react';
import {ScrollView ,StyleSheet,StatusBar,Text, View, TextInput, Platform, KeyboardAvoidingView,TouchableWithoutFeedback, Keyboard, Alert, TouchableOpacity,Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackScreenProps } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';


import { Background } from '../components/Background';
import { WhiteLogo } from '../components/WhiteLogo';
import { loginStyles } from '../theme/loginTheme';
import { useForm } from '../hooks/useForm';
import { actualizarPassword } from '../utils/acciones';


//import { StackScreenProps } from '@react-navigation/stack';
import { AuthContext } from '../context/AuthContext';

//interface Props extends StackScreenProps<any, any> {}
interface Props extends StackScreenProps<any,any>{}

export const CambiarPassword = ( { navigation }: Props ) => {

    const { signIn, errorMessage, removeError } = useContext( AuthContext );
   // const correo:string = "Correo"
    const { codigopass,password,password2,onChange } = useForm({
        codigopass: '',
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

        Alert.alert( 'Login incorrecto', errorMessage,[{
            text: 'Ok',
            onPress: removeError
        }]);

    }, [ errorMessage ])


    const onLogin = () => {
        //console.log({email, password});
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

        consultarAPI()
    }

    const consultarAPI = async () => {
        const correo:any = await AsyncStorage.getItem('correo');
        
        let response = await actualizarPassword(correo, parseInt(codigopass),password  )
        
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
           Alert.alert(
            "Estimado Usuario",
            response.message,
            [
            { text: "Ok", onPress: () => signIn({ correo, password }) }
            ]
           )
           
           
        
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
                    <View style={{paddingBottom: 10}} ></View>
                    <Text style={ loginStyles.title2 }>Para cambiar la contraseña</Text>
                    <Text style={ loginStyles.title2 }>Ingrese el código de confirmación</Text> 
                    
                    
                    <View style={{paddingBottom: 10}} ></View>
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
                            onChangeText={ (value) => onChange(value, 'codigopass') }
                            value={ codigopass }
                            selectionColor="#006CD5"
                            clearButtonMode="always"
                            keyboardType="numeric"
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


                    
                      <TouchableOpacity
                        onPress={ () => navigation.replace('RestaurarPassword') }
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
                            style={[loginStyles.button,(codigopass === '' || password === '' || password2 === '') ? {borderColor: 'white'} : {borderColor: '#FF7901',backgroundColor: '#FF7901'}]}
                            onPress={ onLogin }
                            disabled={codigopass === '' || password === '' || password2 === '' ? true : false}
                        >

                            <Text style={ loginStyles.buttonText } >Enviar</Text>
                        </TouchableOpacity>
                    </View>






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
