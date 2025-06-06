import { useEffect, useState } from "react"
import clienteApi from '../api/clienteApi';
import { TiposRolloResponse, TiposRollos } from '../interfaces/appInterfaces';


export const useObtenerTiposRollo = () => {
    
    const [ isLoading, setIsLoading ] = useState( true )
    const [ ObtenerTiposRollos, setObtenerTiposRollos ] = useState<TiposRollos[]>([]);
    
    useEffect(() => {
        getObtenerTiposRollo();
    }, [])


    const getObtenerTiposRollo = async() => {
        const resp = await clienteApi.get<TiposRolloResponse>('/consultas/ObtenerTiposRollo');
        setObtenerTiposRollos( resp.data );
       // console.log(resp.data)
        setIsLoading(false);
    }


    return {
        isLoading,
        ObtenerTiposRollos
    }
}