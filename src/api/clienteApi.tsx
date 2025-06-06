import React, {useContext} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PROD_BACKEND_URL } from '@env'
//import { AuthContext } from '../context/AuthContext';

const baseURL = PROD_BACKEND_URL;
const clienteApi = axios.create({ baseURL });
//const { logOut } = useContext( AuthContext );


//import { authReducer, AuthState } from '../context/authReducer';

clienteApi.interceptors.request.use(
    async (config:any) => {
        const token = await AsyncStorage.getItem('token');
        //console.log("Interceptor")
        //console.log(token)
        if ( token ) {
            config.headers['x-token'] = token;
        }
        return config;
    }
);


export default clienteApi;
