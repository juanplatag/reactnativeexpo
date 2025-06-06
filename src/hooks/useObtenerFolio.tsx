import React, { useState, useEffect } from 'react';
import clienteApi from '../api/clienteApi';

import { ObtenerFolioResponse,Registro } from '../interfaces/appInterfaces';


export const useObtenerFolio = (options:any) => {
    const [response, setResponse]   = useState<ObtenerFolioResponse>({})
    const [error, setError]         = useState(false);
    const [message, setMessage]     = useState(null);
    const [isLoading, setIsLoading] = useState(true);


    const consultarAPI = async () => {
     	try {
         const resp  =  await clienteApi.post('/consultas/ObtenerFolio', options );
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