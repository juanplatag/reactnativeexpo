import React, { useState, useEffect } from 'react';
import clienteApi from '../api/clienteApi';

import { AuraResponse } from '../interfaces/appInterfaces';


export const useAuraChat = () => {
    const [response, setResponse]   = useState<AuraResponse>()
    const [error, setError]         = useState(false);
    const [message, setMessage]     = useState(null);
    const [isLoading, setIsLoading] = useState(true);


    const consultarAPI = async () => {
     	try {
         const resp  =  await clienteApi.get('/consultas/AuraChat');
         //console.log(resp.data)
		 await setResponse(resp.data);
         await setIsLoading(false);
           // console.log(resp.data)
  
		} catch (error){
          await setError(true);
          await setIsLoading(false);
          await setMessage(error.response.data.message || 'Información incorrecta');
            //console.log(error.response.data.message || 'Información incorrecta')
		}
	}  
	
    useEffect(() => {
      consultarAPI();
    }, []);

    return { response, error, message, isLoading };
};