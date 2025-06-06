import React, { createContext, useEffect, useReducer } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Encrypta } from '../utils/Encrypta'
import clienteApi from '../api/clienteApi';

import { Usuario, LoginResponse, LoginData, RegisterData } from '../interfaces/appInterfaces';
import { authReducer, AuthState } from './authReducer';


type AuthContextProps = {
    errorMessage: string;
    message: string;
    token: string | null;
    user: Usuario | null;
    status: 'checking' | 'authenticated' | 'not-authenticated';
    signUp: ( registerData: RegisterData ) => void;
    signIn: ( loginData: LoginData ) => void;
    logOut: () => void;
    removeError: () => void;
    removeMessage: () => void;
}



const authInicialState: AuthState = {
    status: 'checking',
    token: null,
    user: null,
    errorMessage: '',
    message: ''
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any)=> {

    const [ state, dispatch ] = useReducer( authReducer, authInicialState);

    useEffect(() => {
        checkToken();
    }, [])

    const checkToken = async () => {
        const token = await AsyncStorage.getItem('token');
        //console.log("uno")
  
        //console.log("Token")
        //console.log(token)
        // No token, no autenticado
        //console.log("dos")
        if ( !token ) return dispatch({ type: 'notAuthenticated' });

        // Hay token
       // console.log("tres")
       consultarApiToken()      

        /*
        const resp = await clienteApi.get<LoginResponse>('/auth');
    
        if ( resp.status !== 200 ) {
            return dispatch({ type: 'notAuthenticated' });
        }
         //   console.log(resp.data.token)
        
   
            await EncryptedStorage.setItem('token', resp.data.token);
            dispatch({ 
                type: 'signUp',
                payload: {
                    token: resp.data.token,
                    user: resp.data.usuario
                }
            });

        */
       

    }

    const consultarApiToken = async () => {        
        try {
            const resp = await clienteApi.get<LoginResponse>('/auth');
            await AsyncStorage.setItem('token', resp.data.token);
           
            //console.log(resp.status)
            if ( resp.status !== 200 ) {
                return dispatch({ type: 'notAuthenticated' });
            }
            dispatch({ 
                type: 'signUp',
                payload: {
                    token: resp.data.token,
                    user: resp.data.usuario
                }
            });

        } catch (error){
          //console.log("Error")
          return dispatch({ type: 'notAuthenticated' });
        }
    } 


    const signIn = async({ correo, password }: LoginData ) => {

        const passwordcrypto = Encrypta(password)
       // console.log(passwordcrypto)

        try {
            const { data } =  await clienteApi.post<LoginResponse>('/auth/login', { correo, password:passwordcrypto } );

            //console.log(data) 
            dispatch({ 
                type: 'signUp',
                payload: {
                    token: data.token,
                    user: data.usuario
                }
            });
           
            //await AsyncStorage.setItem('token', data.token );
            await AsyncStorage.setItem('password', password);
            await AsyncStorage.setItem('correo', correo);
            await AsyncStorage.setItem('token', data.token);
            await AsyncStorage.setItem('estado', data.usuario.estado.toString());

        } catch (error) {

           // console.log(error)

            dispatch({ 
                type: 'addError', 
                payload: error.response.data.message || 'Información incorrecta'
            })

        }
    };
    
    const signUp = async( { nombre, correo, password }: RegisterData ) => {

        const passwordcrypto = Encrypta(password)
        //console.log(passwordcrypto)

        try {
         
            const { data } = await clienteApi.post<LoginResponse>('/usuarios', { correo, password:passwordcrypto, nombre } );

            await AsyncStorage.setItem('password', password);
            await AsyncStorage.setItem('correo', correo);
            //await AsyncStorage.setItem('token', data.token);
            await AsyncStorage.setItem('estado', data.usuario.estado.toString());
           

            dispatch({ 
                type: 'addMessage', 
                payload: data.message
            });


            
        } catch (error) {
           // console.log(error.response.data)
            dispatch({ 
                type: 'addError', 
                payload: error.response.data.message || 'Revise la información'
            });
        }

    };

    const logOut = async() => {
        //await AsyncStorage.removeItem('token');
        await AsyncStorage.removeItem('token');
        dispatch({ type: 'logout' });
    };

    const removeError = () => {
        dispatch({ type: 'removeError' });
    };

    const removeMessage = () => {
        dispatch({ type: 'removeMessage' });
    };

    return (
        <AuthContext.Provider value={{
            ...state,
            signUp,
            signIn,
            logOut,
            removeError,
            removeMessage
        }}>
            { children }
        </AuthContext.Provider>
    )

}


