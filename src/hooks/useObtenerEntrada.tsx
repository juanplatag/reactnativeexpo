import React, { useState, useEffect } from 'react';
import clienteApi from '../api/clienteApi';

import { ObtenerEntradaResponse,AntecedentesFolioReal,DetallesTramite,HistorialTramitacion,Registro } from '../interfaces/appInterfaces';


export const useObtenerEntrada = (options:any) => {
    const [response, setResponse]   = useState<ObtenerEntradaResponse>({})
    const [error, setError]         = useState(false);
    const [message, setMessage]     = useState(null);
    const [isLoading, setIsLoading] = useState(true);


    const consultarAPI = async () => {
     	try {
            const resp  =  await clienteApi.post('/consultas/ObtenerEntrada', options );
		     setResponse(resp.data);
             setIsLoading(false);
           // console.log(resp.data)
  
		} catch (error){
            setError(true);
            setMessage(error.response.data.message || 'Información incorrecta');
            //console.log(error.response.data.message || 'Información incorrecta')
		}
	}  
	
    useEffect(() => {
      consultarAPI();
    }, []);

    return { response, error, message, isLoading };
};