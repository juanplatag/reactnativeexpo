import { useEffect, useState } from "react"
import clienteApi from '../api/clienteApi';
import { SeccionesRolloResponse, SeccionesRollos } from '../interfaces/appInterfaces';


export const useObtenerSeccionesRollo = () => {
    
    const [ isLoading, setIsLoading ] = useState( true )
    const [ ObtenerSeccionesRollo, setObtenerSeccionesRollo ] = useState<SeccionesRollos[]>([]);
    
    useEffect(() => {
        getObtenerTiposRollo();
    }, [])


    const getObtenerTiposRollo = async() => {
        const resp = await clienteApi.get<SeccionesRolloResponse>('/consultas/ObtenerSeccionesRollo');
        setObtenerSeccionesRollo( resp.data );
       // console.log(resp.data)
        setIsLoading(false);
    }


    return {
        isLoading,
        ObtenerSeccionesRollo
    }
}