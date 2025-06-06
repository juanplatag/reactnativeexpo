import { useEffect, useState } from "react"
import clienteApi from '../api/clienteApi';
import { ObtenerProvinciasResponse, Provincias } from '../interfaces/appInterfaces';


export const useObtenerProvincias = () => {
    
    const [ isLoading, setIsLoading ] = useState( true )
    const [ ObtenerProvincia, setObtenerProvincia ] = useState<Provincias[]>([]);
    
    useEffect(() => {
        getObtenerProvincia();
    }, [])


    const getObtenerProvincia = async() => {
        const resp = await clienteApi.get<ObtenerProvinciasResponse>('/consultas/ObtenerProvincias');
        setObtenerProvincia( resp.data );
       // console.log(resp.data)
        setIsLoading(false);
    }


    return {
        isLoading,
        ObtenerProvincia
    }
}