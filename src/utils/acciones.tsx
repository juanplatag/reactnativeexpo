import React from 'react';
import clienteApi from '../api/clienteApi';
import { Encrypta } from '../utils/Encrypta'
//Hola
import { RucResponse,RollosResponse,TomosResponse,FolioSuspendidoResponse,AgentesResponse,DetalleFoliosResponse,DetalleEntradaResponse,ObtenerEntradaResponse,AntecedentesFolioReal,DetallesTramite,DocumentosPresentadosContenido,HistorialTramitacion,Registro } from '../interfaces/appInterfaces';

export const obternerEntradas = async (anio:number, noentrada:number) => {
    let temp:any = []
    let response = { statusresponse: false,message:'', data: temp };

    try {
        const { data } =  await clienteApi.post<DetalleEntradaResponse>('/consultas/BuscarEntradas', { anio, noentrada } );
        response.data = data;
        response.statusresponse = false;
    } catch (err) {
       response.statusresponse = true;
       response.message = err.response.data.message || 'Información incorrecta'
    }
    return response;

};

export const obternerFolios = async (NumeroFolio:string, ubicacion:string,TitularesRegistrales:string,cedulaTitularRegistral:string,NumeroFolio_matriz:string,ubicacion_matriz:string,nombresociedad:string) => {
    let temp:any = []
    let response = { statusresponse: false,message:'', data: temp };

    try {
        const { data } =  await clienteApi.post<DetalleFoliosResponse>('/consultas/BuscarFolios', { NumeroFolio, ubicacion,TitularesRegistrales,cedulaTitularRegistral,NumeroFolio_matriz,ubicacion_matriz,nombresociedad } );
        response.data = data;
        response.statusresponse = false;
    } catch (error) {
       response.statusresponse = true;
       response.message = error.response.data.message || 'Información incorrecta'
    }
    return response;

};

export const obternerEntradasId = async (options:any) => {
    let temp:any = []
    let response = { statusresponse: false,message:'', datos : temp};

    try {
        const { data } = await clienteApi.post<ObtenerEntradaResponse>('/consultas/ObtenerEntrada', options );
        response.datos = data;
        response.statusresponse = false;
    } catch (error) {
       response.statusresponse = true;
       response.message = error.response.data.message || 'Información incorrecta'
       //console.log(error.response.data.message || 'Información incorrecta')
    }
    return response;

};

export const DocumentoPresentado = async (PIdDocumento:string,PIdEntrada:string) => {
    let temp:any = []
    let response = { statusresponse: false,message:'', data: '' };

    try {
        const res  =  await clienteApi.post('/consultas/DocumentoPresentado', { PIdEntrada, PIdDocumento } );
        response.data = res.data.Identificador;
        response.statusresponse = false;
    } catch (error) {
       response.statusresponse = true;
       response.message = error.response.data.message || 'Información incorrecta'
    }
    return response;
};

export const DocumentoPresentadoOEscaneado = async (PIdEntrada:string) => {
    let temp:any = []
    let response = { statusresponse: false,message:'', data: '' };

    try {
        const res  =  await clienteApi.post('/consultas/DocumentoPresentadoOEscaneado', { PIdEntrada } );
        response.data = res.data.Identificador;
        response.statusresponse = false;
    } catch (error) {
       response.statusresponse = true;
       response.message = error.response.data.message || 'Información incorrecta'
    }
    return response;
};

export const DocumentoFinalizacionTramite = async (PIdEntrada:string) => {
    let temp:any = []
    let response = { statusresponse: false,message:'', data: '' };

    try {
        const res  =  await clienteApi.post('/consultas/DocumentoFinalizacionTramite', { PIdEntrada } );
        response.data = res.data.Identificador;
        response.statusresponse = false;
    } catch (error) {
       response.statusresponse = true;
       response.message = error.response.data.message || 'Información incorrecta'
    }
    return response;
};

export const CotejoDocumentosMarca = async (Identificador:string) => {
    let temp:any = []
    let response = { statusresponse: false,message:'', data: '' };

    try {
        const res  =  await clienteApi.post('/consultas/CotejoDocumentosMarca', { Identificador } );
        response.data = res.data.archivo;
        response.statusresponse = false;
    } catch (error) {
       response.statusresponse = true;
       response.message = error.response.data.message || 'Información incorrecta'
    }
    return response;
};

export const CalificacionActual = async (PIdEntrada:string) => {
    let temp:any = []
    let response = { statusresponse: false,message:'', data: '' };

    try {
        const res  =  await clienteApi.post('/consultas/CalificacionActual', { PIdEntrada } );
        response.data = res.data.Identificador;
        response.statusresponse = false;
    } catch (error) {
       response.statusresponse = true;
       response.message = error.response.data.message || 'Información incorrecta'
    }
    return response;
};

export const FolioMatrices = async (PIdFolio:string) => {
    let temp:any = []
    let response = { statusresponse: false,message:'', data: temp };

    try {
        const res  =  await clienteApi.post('/consultas/FolioMatrices', { PIdFolio } );
        response.data = res.data;
        response.statusresponse = false;
    } catch (error) {
       response.statusresponse = true;
       response.message = error.response.data.message || 'Información incorrecta'
    }
    return response;
};

export const FolioRegistroPrevioElementosVigentes = async (PIdFolio:string) => {
    let temp:any = []
    let response = { statusresponse: false,message:'', data: temp };

    try {
        const res  =  await clienteApi.post('/consultas/FolioRegistroPrevioElementosVigentes', { PIdFolio } );
        response.data = res.data;
        response.statusresponse = false;
    } catch (error) {
       response.statusresponse = true;
       response.message = error.response.data.message || 'Información incorrecta'
    }
    return response;
};

export const FolioRegistroPrevioElementosNoVigentes = async (PIdFolio:string) => {
    let temp:any = []
    let response = { statusresponse: false,message:'', data: temp };

    try {
        const res  =  await clienteApi.post('/consultas/FolioRegistroPrevioElementosNoVigentes', { PIdFolio } );
        response.data = res.data;
        response.statusresponse = false;
    } catch (error) {
       response.statusresponse = true;
       response.message = error.response.data.message || 'Información incorrecta'
    }
    return response;
};

export const FolioElementosVigentes = async (PIdFolio:string) => {
    let temp:any = []
    let response = { statusresponse: false,message:'', data: temp };

    try {
        const res  =  await clienteApi.post('/consultas/FolioElementosVigentes', { PIdFolio } );
        response.data = res.data;
        response.statusresponse = false;
    } catch (error) {
       response.statusresponse = true;
       response.message = error.response.data.message || 'Información incorrecta'
    }
    return response;
};

export const FolioElementosNoVigentes = async (PIdFolio:string) => {
    let temp:any = []
    let response = { statusresponse: false,message:'', data: temp };

    try {
        const res  =  await clienteApi.post('/consultas/FolioElementosNoVigentes', { PIdFolio } );
        response.data = res.data;
        response.statusresponse = false;
    } catch (error) {
       response.statusresponse = true;
       response.message = error.response.data.message || 'Información incorrecta'
    }
    return response;
};

export const FolioPrelacion = async (PIdFolio:string) => {
    let temp:any = []
    let response = { statusresponse: false,message:'', data: temp };

    try {
        const res  =  await clienteApi.post('/consultas/FolioPrelacion', { PIdFolio } );
        response.data = res.data;
        response.statusresponse = false;
    } catch (error) {
       response.statusresponse = true;
       response.message = error.response.data.message || 'Información incorrecta'
    }
    return response;
};


export const FolioUsuariosRelacionados = async (PIdFolio:string) => {
    let temp:any = []
    let response = { statusresponse: false,message:'', data: temp };

    try {
        const res  =  await clienteApi.post('/consultas/FolioUsuariosRelacionados', { PIdFolio } );
        response.data = res.data;
        response.statusresponse = false;
    } catch (error) {
       response.statusresponse = true;
       response.message = error.response.data.message || 'Información incorrecta'
    }
    return response;
};

export const FolioResultantes = async (PIdFolio:string) => {
    let temp:any = []
    let response = { statusresponse: false,message:'', data: temp };

    try {
        const res  =  await clienteApi.post('/consultas/FolioResultantes', { PIdFolio } );
        response.data = res.data;
        response.statusresponse = false;
    } catch (error) {
       response.statusresponse = true;
       response.message = error.response.data.message || 'Información incorrecta'
    }
    return response;
};

export const TextoInscripcion = async (PIdInscripcion:string) => {
    let temp:any = []
    let response = { statusresponse: false,message:'', data: '' };

    try {
        const res  =  await clienteApi.post('/consultas/TextoInscripcion', { PIdInscripcion } );
        response.data = res.data.Identificador;
        response.statusresponse = false;
    } catch (error) {
       response.statusresponse = true;
       response.message = error.response.data.message || 'Información incorrecta'
    }
    return response;
};

export const AgenteResidente = async (nombreagente:string) => {
    let temp:any = []
    let response = { statusresponse: false,message:'', data: temp };

    try {
        const { data } =  await clienteApi.post<AgentesResponse>('/consultas/AgenteResidente', { nombreagente } );
        response.data = data;
        response.statusresponse = false;
    } catch (error) {
       response.statusresponse = true;
       response.message = error.response.data.message || 'Información incorrecta'
    }
    return response;

};

export const FolioAnotacion = async (RUC:string,Folio:string,Nombre_Sociedad:string) => {
    let temp:any = []
    let response = { statusresponse: false,message:'', data: temp };

    try {
        const { data } =  await clienteApi.post<FolioSuspendidoResponse>('/consultas/FolioAnotacion', { RUC,Folio,Nombre_Sociedad } );
        response.data = data;
        response.statusresponse = false;
    } catch (error) {
       response.statusresponse = true;
       response.message = error.response.data.message || 'Información incorrecta'
    }
    return response;

};



export const Tomos = async (PNumeroFinca:string,PIdProvincia:string,PIdTipoTomo:string,PNumeroTomo:string,PNumeroFolio:string) => {
    let temp:any = []
    let response = { statusresponse: false,message:'', data: temp };

    try {
        const { data } =  await clienteApi.post<TomosResponse>('/consultas/BuscarTomos', { PNumeroFinca,PIdProvincia,PIdTipoTomo,PNumeroTomo,PNumeroFolio } );
        response.data = data;
        response.statusresponse = false;
    } catch (error) {
       response.statusresponse = true;
       response.message = error.response.data.message || 'Información incorrecta'
    }
    return response;

};

export const ImagenTomo = async (PIdTomo:string) => {
    let temp:any = []
    let response = { statusresponse: false,message:'', data: '' };

    try {
        const res  =  await clienteApi.post('/consultas/ImagenTomo', { PIdTomo } );
        response.data = res.data.archivo;
        response.statusresponse = false;
    } catch (error) {
       response.statusresponse = true;
       response.message = error.response.data.message || 'Información incorrecta'
    }
    return response;
};


export const Rollos = async (PNumeroRollo:string,PIdSeccion:string,PIdTipoRollo:string) => {
    let temp:any = []
    let response = { statusresponse: false,message:'', data: temp };

    try {
        const { data } =  await clienteApi.post<RollosResponse>('/consultas/BuscarRollos', { PNumeroRollo,PIdSeccion,PIdTipoRollo } );
        response.data = data;
        response.statusresponse = false;
    } catch (error) {
       response.statusresponse = true;
       response.message = error.response.data.message || 'Información incorrecta'
    }
    return response;

};

export const CotejoDocumentos = async (Identificador:string) => {
    let temp:any = []
    let response = { statusresponse: false,message:'', data: '' };

    try {
        const res  =  await clienteApi.post('/consultas/CotejoDocumentos', { Identificador } );
        response.data = res.data.archivo;
        response.statusresponse = false;
    } catch (error) {
       response.statusresponse = true;
       response.message = error.response.data.message || 'Información incorrecta'
    }
    return response;
};

export const ImagenRollo = async (PIdRollo:number,PNumeroImagen:number) => {
    let temp:any = []
    let response = { statusresponse: false,message:'', data: '' };

    try {
        const res  =  await clienteApi.post('/consultas/ImagenRollo', { PIdRollo,PNumeroImagen } );
        //console.log(res)
        response.data = res.data.archivo;
        response.statusresponse = false;
    } catch (error) {
       response.statusresponse = true;
       response.message = error.response.data.message || 'Información incorrecta'
    }
    return response;
};

export const TasaUnica = async (ruc:string) => {
    let temp:any = []
    let response = { statusresponse: false,message:'', data: temp };

    try {
        const { data } =  await clienteApi.post<RucResponse>('/consultas/TasaUnica', { ruc } );
        response.data = data;
        response.statusresponse = false;
    } catch (error) {
       response.statusresponse = true;
       response.message = error.response.data.message || 'Información incorrecta'
    }
    return response;

};



export const recuperarPassword = async (correo:string) => {
    let temp:any = []
    let response = { statusresponse: false,message:'', data: '' };

    try {
        const res  =  await clienteApi.post('/auth/recuperarpassword', { correo } );
        //console.log(res)
        response.message = res.data.message;
        response.statusresponse = false;
    } catch (error) {
       // console.log(error)
       response.statusresponse = true;
       response.message = error.response.data.message || 'Información incorrecta'
       //response.message = error.response.data.errors[0].msg  || 'Información incorrecta'
    }
    return response;
};


export const confirmarCuenta = async (correo:string,codigoconf:number) => {
    let temp:any = []
    let response = { statusresponse: false,message:'', data: '' };


    try {
        const res  =  await clienteApi.post('/auth/confirmarCuenta', { correo, codigoconf } );
        //console.log(res)
        response.message = res.data.message;
        response.statusresponse = false;
    } catch (error) {
       response.statusresponse = true;
       response.message = error.response.data.message  || 'Información incorrecta'
    }
    return response;
};

export const actualizarPassword = async (correo:string,codigopass:number,password:string) => {
    let temp:any = []
    let response = { statusresponse: false,message:'', data: '' };
    const passwordcrypto = Encrypta(password)
    //console.log(passwordcrypto)

    try {
        const res  =  await clienteApi.post('/auth/actualizarpassword', { correo, codigopass, password:passwordcrypto } );
        //console.log(res)
        response.message = res.data.message;
        response.statusresponse = false;
    } catch (error) {
       response.statusresponse = true;
       response.message = error.response.data.message  || 'Información incorrecta'
    }
    return response;
};
