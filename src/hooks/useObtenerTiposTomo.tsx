import { useEffect, useState } from "react"
import clienteApi from '../api/clienteApi';
import { TiposTomoResponse, TiposTomo } from '../interfaces/appInterfaces';


export const useObtenerTiposTomo = () => {
    
    const [ isLoading, setIsLoading ] = useState( true )
    const [ ObtenerTiposTomo, setObtenerTiposTomo ] = useState<TiposTomo[]>([]);
    
    useEffect(() => {
        getObtenerTiposTomo();
    }, [])


    const getObtenerTiposTomo = async() => {
        const resp = await clienteApi.get<TiposTomoResponse>('/consultas/ObtenerTiposTomo');
        setObtenerTiposTomo( resp.data );
       // console.log(resp.data)
        setIsLoading(false);
    }


    return {
        isLoading,
        ObtenerTiposTomo
    }
}