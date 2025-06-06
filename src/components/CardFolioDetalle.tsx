import React, {useEffect, useState,useRef} from 'react'
import { Alert,View,Text, Platform,StyleSheet,Animated,TouchableOpacity } from 'react-native'
//import { useNavigation } from '@react-navigation/core';

import { CardStyles } from '../theme/CardTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { obternerEntradas,FolioResultantes,FolioUsuariosRelacionados,FolioMatrices,FolioRegistroPrevioElementosVigentes,TextoInscripcion,CotejoDocumentosMarca,FolioRegistroPrevioElementosNoVigentes,FolioElementosVigentes,FolioElementosNoVigentes,FolioPrelacion,DocumentoPresentadoOEscaneado } from '../utils/acciones';
import { FolioMatricesComp } from './FolioMatricesComp';
import { RegistroPrevioActivo } from './RegistroPrevioActivo';
import { DetallePrelacion } from './DetallePrelacion';
import { DetalleUsuariosRelacionados } from './DetalleUsuariosRelacionados';
import { DetalleFolioResultantes } from './DetalleFolioResultantes';
import { StackScreenProps } from '@react-navigation/stack';


//interface Props extends StackScreenProps<any,any>{}

//interface Props {
interface Props{    
    titulo: string;
    opcion: string;
    PIdFolio: string;
    navigation: any;
}


    
export const CardFolioDetalle = ({ titulo,opcion,PIdFolio,navigation }: Props) => {

    //const navigation = useNavigation();

    const [datos, setDatos] = useState([]);
    const [collapsed, setCollapsed] = useState(false);

    const mostrarPdf = async (urlPdf:string) => {
          navigation.navigate("VisorPdf", {urlPdf})
    }  
  
    const toggleCollapsed = () => {
      setCollapsed(!collapsed);
    };

  
    const consultarAPI = async () => {
        let response:any
        if(opcion === 'Relaciones_TieneFoliosMatrices'){
            response = await FolioMatrices(PIdFolio)
        }else if(opcion === 'Relaciones_TieneFoliosResultantes'){
            response = await FolioResultantes(PIdFolio)
        }else if(opcion === 'RegistroPrevio_TieneElementosVigentes'){
            response = await FolioRegistroPrevioElementosVigentes(PIdFolio)
        }else if(opcion === 'RegistroPrevio_TieneElementosNoVigentes'){
            response = await FolioRegistroPrevioElementosNoVigentes(PIdFolio)
        }else if(opcion === 'RegistroElectronico_TieneElementosVigentes'){
            response = await FolioElementosVigentes(PIdFolio)
        }else if(opcion === 'RegistroElectronico_TieneElementosNoVigentes'){
            response = await FolioElementosNoVigentes(PIdFolio)
        }else if(opcion === 'TienePrelacion'){
            response = await FolioPrelacion(PIdFolio)
        }else if(opcion === 'TieneUsuariosRelacionados'){
            response = await FolioUsuariosRelacionados(PIdFolio)
        }
        
        if (!response.statusresponse){
            await setDatos(response.data)
        }
    } 

    const ObtenerPrelacion = async (PIdEntrada:string) => {
        let Identificador:any
        let dataIdent:any
        let dataPdf:any
        dataIdent = await DocumentoPresentadoOEscaneado( PIdEntrada )
        Identificador = dataIdent.data
        if(!dataIdent.statusresponse){
            dataPdf = await CotejoDocumentosMarca(Identificador)
            if(!dataPdf.statusresponse){
              mostrarPdf(dataPdf.data)
            }
        }
    };

    const ObtenerEntrada = async (entrada : number, anio : number) => {
        let response = await obternerEntradas( anio, entrada )
        
        if (response.statusresponse){
           // console.log(response)
            Alert.alert(
                "",
                response.message,
                [
                { text: "Ok", onPress: () => null }
                ]
            )
            return
        }else{

            if(response.data.length > 1){
                navigation.navigate("ListadoEntradas", response.data)
            }else{
                navigation.navigate("DetalleEntrada", response.data[0])
            }
        
        }
    };
  

    const ObtenerIAsiento = async (PIdInscripcion:string) => {

        let Identificador:any
        let dataIdent:any
        let dataPdf:any
        dataIdent = await TextoInscripcion( PIdInscripcion )
        Identificador = dataIdent.data
        if(!dataIdent.statusresponse){
            dataPdf = await CotejoDocumentosMarca(Identificador)
            if(!dataPdf.statusresponse){
              mostrarPdf(dataPdf.data)
            }
        }
    
      }  
    
    
  
    useEffect(() => {
      if (collapsed) {
        consultarAPI()
      }
    }, [collapsed]);


    return (
        <>
            <View style={[CardStyles.card,CardStyles.shadow]}>
                
                <TouchableOpacity 
                    activeOpacity={ 0.10 }
                    onPress={toggleCollapsed}
                >  
                    <View style={CardStyles.header}>
                       <Text style={CardStyles.title}>{titulo}</Text>  
                            <View style={styles.iconContent}>
                                { collapsed ?
                                    (<Icon name="chevron-down-outline" color="#014DA3" size={ 23 }/>)
                                    :
                                    (<Icon name="chevron-forward-outline" color="#014DA3" size={ 23 }/>)
                                }
                            </View>
                    
                    </View>
                </TouchableOpacity>
                



                { collapsed &&
                    (
                        <>

                            { (opcion === 'Relaciones_TieneFoliosMatrices' ||
                               opcion === 'Relaciones_TieneFoliosResultantes') &&
                              (
                                <View style={CardStyles.Subheader}>
                                   <Text style={CardStyles.Subtitle}>Folio / Finca / Ficha</Text>
                                </View>
                              )                            
                            }
                            { (opcion === 'RegistroPrevio_TieneElementosVigentes' ||
                               opcion === 'RegistroPrevio_TieneElementosNoVigentes' ||
                               opcion === 'RegistroElectronico_TieneElementosVigentes' ||
                               opcion === 'RegistroElectronico_TieneElementosNoVigentes') &&
                              (
                                <View style={CardStyles.Subheader}>
                                   <Text style={CardStyles.Subtitle}>Derechos / Actos / Otras Operaciones</Text>
                                </View>
                              )                            
                            }
    
                        </>
                    )                            
                }
                

                { collapsed &&
                    (
                        <>
                        <View style={CardStyles.body} >
                            { (opcion === 'Relaciones_TieneFoliosMatrices') &&
                              (
                                datos.map((item:any) =>(	
                                    <FolioMatricesComp
                                        key={item.id}
                                        data={item}
                                    />
                                ))
                              )                            
                            }
                            { (opcion === 'Relaciones_TieneFoliosResultantes') &&
                              (
                                datos.map((item:any) =>(	
                                    <DetalleFolioResultantes
                                        key={item.id}
                                        data={item}
                                    />
                                ))
                              )                            
                            }
                            { (opcion === 'RegistroPrevio_TieneElementosVigentes' ||
                               opcion === 'RegistroPrevio_TieneElementosNoVigentes' ||
                               opcion === 'RegistroElectronico_TieneElementosVigentes' ||
                               opcion === 'RegistroElectronico_TieneElementosNoVigentes') &&
                              (
                                datos.map((item:any) =>(	
                                    <RegistroPrevioActivo
                                        key={item.Id}
                                        data={item}
                                        ObtenerIAsiento={ObtenerIAsiento}
                                    />
                                ))
                              )                            
                            }
                            { (opcion === 'TienePrelacion') &&
                              (
                                datos.map((item:any) =>(	
                                    <DetallePrelacion
                                        key={item.Id_Entrada}
                                        data={item}
                                        ObtenerPrelacion={ObtenerPrelacion}
                                        ObtenerEntrada={ObtenerEntrada}
                                    />
                                ))
                              )                            
                            }
                            { (opcion === 'TieneUsuariosRelacionados') &&
                              (
                                datos.map((item:any) =>(	
                                    <DetalleUsuariosRelacionados
                                        key={item.id}
                                        data={item}
                                    />
                                ))
                              )                            
                            }

                        </View>
                        </>
                    )                            
                }
            </View>
        </>

    )
}





const styles = StyleSheet.create({

    iconContent:{
        width: 60,
        justifyContent:'center',
        alignItems:"flex-end",
    }
}) 


//interface Props {
//    children: JSX.Element[] | JSX.Element
//}

//export const CardFolioDetalle = ({ children }: Props) => {