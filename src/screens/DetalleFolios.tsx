import React, { useContext, useEffect,useState } from 'react';
import { StatusBar,
         ScrollView,
         SafeAreaView,
         Text,
         View,
         Alert,
         StyleSheet,
         ActivityIndicator
        } from 'react-native';     
import Icon from 'react-native-vector-icons/Ionicons';
import { StackScreenProps } from '@react-navigation/stack';

import clienteApi from '../api/clienteApi';
import { useObtenerFolio } from '../hooks/useObtenerFolio'
import { DetalleRegistro } from '../components/DetalleRegistro';
import { CardFolioDetalle } from '../components/CardFolioDetalle';
import { Cargando } from '../components/Cargando';
//import { ObtenerFolio } from '../components/ObtenerFolio';


import { CardStyles } from '../theme/CardTheme';
import { ObtenerFolioResponse,Registro } from '../interfaces/appInterfaces';
import { DocumentoPresentado,CotejoDocumentosMarca,DocumentoPresentadoOEscaneado,DocumentoFinalizacionTramite,CalificacionActual } from '../utils/acciones';

interface Props extends StackScreenProps<any,any>{}


export const DetalleFolios = ( { navigation,route }: Props ) => {

  const parametro:any = route.params
  const options = { PIdFolio :  parametro.Identificador }
	const [url, guardarUrl]   = useState("");
  const [visible, setVisible] = useState(true);
  const [response, setResponse]   = useState<ObtenerFolioResponse>({})



	//const { response, error, message, isLoading } = useObtenerFolio(options);

    const consultarAPI = async () => {        
        try {
          const resp  =  await clienteApi.post('/consultas/ObtenerFolio', options );
          await setResponse(resp.data);
          await setVisible(false);
        } catch (error){
          navigation.goBack()
        }
    } 

  useEffect(() => {
    consultarAPI()
  }, []);


  /*
  useEffect(() => {
        consultarAPI();
  }, [])
  */

    return (
        <>
         { visible ?
								(
                  <> 
                   {/*  <Cargando 
                       modalVisible={isLoading}
                    /> */}
                    <View style={{ flex:1, justifyContent:"center",alignItems:"center"}}> 
                      <ActivityIndicator size="large" color="#f35588"/>
                   </View>
                  </>
								)
								:
								(
                  <>
                    <SafeAreaView style={styles.container}>
                    <ScrollView>  
                    {/* <Cargando modalVisible={isLoading}/>  */}
                  
                    <StatusBar barStyle="light-content" backgroundColor="#014DA3" /> 
                    
                        { response.registro.length > 0 &&
                              (
                                response.registro.map((item:any) =>(	
                                      <DetalleRegistro
                                          key={item.id}
                                          data={item}
                                      />
                                ))
                              )
                        }	
                        <View style={{paddingBottom: 15}} ></View>

                        { response.DatosEmulador.length > 0 &&
                          (
                            <>
                              <View style={[CardStyles.card,CardStyles.shadow]}>
                                  <View style={CardStyles.header}>
                                    <Text style={CardStyles.title}>Datos del Sistema Registral Anterior</Text>
                                  </View>
                                  <View style={CardStyles.body}>
                                      {
                                      response.DatosEmulador.map((item:any) =>(	
                                            <DetalleRegistro
                                                key={item.id}
                                                data={item}
                                            />
                                      ))
                                      }
                                      

                                  </View>
                              </View>
                              <View style={{paddingBottom: 15}} ></View>
                            </>
                          )                            
                        }    

                        { response.DatosPersonaMoral.length > 0 &&
                          (
                            <>
                              <View style={[CardStyles.card,CardStyles.shadow]}>
                                  <View style={CardStyles.header}>
                                    <Text style={CardStyles.title}>Datos de la Persona Jurídica</Text>
                                  </View>
                                  <View style={CardStyles.body}>
                                      {
                                      response.DatosPersonaMoral.map((item:any) =>(	
                                            <DetalleRegistro
                                                key={item.id}
                                                data={item}
                                            />
                                      ))
                                      }
                                      

                                  </View>
                              </View>
                              <View style={{paddingBottom: 15}} ></View>
                            </>
                          )                            
                        }    

                        { response.Relaciones_TieneFoliosMatrices === "true" &&
                          (
                            <>
                            <CardFolioDetalle
                              titulo="Folios Madre"
                              opcion="Relaciones_TieneFoliosMatrices"
                              PIdFolio={response.IdFolio}
                              navigation={navigation}
                            />
                            <View style={{paddingBottom: 15}} ></View> 
                            </>
                        )                            
                        }
                        { response.Relaciones_TieneFoliosResultantes === "true" &&
                          (
                            <>
                            <CardFolioDetalle
                              titulo="Folios Resultantes"
                              opcion="Relaciones_TieneFoliosResultantes"
                              PIdFolio={response.IdFolio}
                              navigation={navigation}
                            />
                            <View style={{paddingBottom: 15}} ></View> 
                            </>
                        )                            
                        }
                        { response.RegistroPrevio_TieneElementosVigentes === "true" &&
                          (
                            <>
                            <CardFolioDetalle
                              titulo="Registro Previo Activo"
                              opcion="RegistroPrevio_TieneElementosVigentes"
                              PIdFolio={response.IdFolio}
                              navigation={navigation}
                            />
                            <View style={{paddingBottom: 15}} ></View> 
                            </>
                        )                            
                        }
                        { response.RegistroPrevio_TieneElementosNoVigentes === "true" &&
                          (
                            <>
                            <CardFolioDetalle
                              titulo="Registro Previo Inactivo"
                              opcion="RegistroPrevio_TieneElementosNoVigentes"
                              PIdFolio={response.IdFolio}
                              navigation={navigation}
                            />
                            <View style={{paddingBottom: 15}} ></View> 
                            </>
                        )                            
                        }
                        { response.RegistroElectronico_TieneElementosVigentes === "true" &&
                          (
                            <>
                            <CardFolioDetalle
                              titulo="Elementos Activos"
                              opcion="RegistroElectronico_TieneElementosVigentes"
                              PIdFolio={response.IdFolio}
                              navigation={navigation}
                            />
                            <View style={{paddingBottom: 15}} ></View> 
                            </>
                        )                            
                        }
                        { response.RegistroElectronico_TieneElementosNoVigentes === "true" &&
                          (
                            <>
                            <CardFolioDetalle
                              titulo="Elementos Inactivos"
                              opcion="RegistroElectronico_TieneElementosNoVigentes"
                              PIdFolio={response.IdFolio}
                              navigation={navigation}
                            />
                            <View style={{paddingBottom: 15}} ></View> 
                            </>
                        )                            
                        }
                        { response.TienePrelacion === "true" &&
                          (
                            <>
                            <CardFolioDetalle
                              titulo="Prelación"
                              opcion="TienePrelacion"
                              PIdFolio={response.IdFolio}
                              navigation={navigation}
                            />
                            <View style={{paddingBottom: 15}} ></View> 
                            </>
                        )                            
                        }

                        { response.TieneUsuariosRelacionados === "true" &&
                          (
                            <>
                            <CardFolioDetalle
                              titulo="Miembros Relacionados"
                              opcion="TieneUsuariosRelacionados"
                              PIdFolio={response.IdFolio}
                              navigation={navigation}
                            />
                            <View style={{paddingBottom: 15}} ></View> 
                            </>
                        )                            
                        }
                  
                  
                  </ScrollView>
                </SafeAreaView>                        
                    </>
                 
                )
          }
        </>

    )
}



const Separator = () => (
  <View style={styles.separator} />
);

const styles = StyleSheet.create({
    container: {
      flex: 1,
     // alignItems: 'center',
      backgroundColor: '#FFFFFF',
    
      
      
    },
    containerActivity: {
      flex: 1,
      backgroundColor: '#014DA3',
      justifyContent: 'center',
      alignItems: 'center',
    },
    contenido: {
      flex: 1,
      justifyContent: 'center',
      //flexDirection: 'row',
      backgroundColor:"#FFF",
      paddingVertical: 15,
      marginHorizontal: '2.5%',
    }, 
    separator: {
      borderBottomWidth: 2,
      opacity: 0.4,
      //marginVertical: 12,
      borderBottomColor: '#006CD5',
      marginHorizontal: '2.5%',
    },
    title: {
      color: 'white',
      fontWeight:"bold",
      fontSize: 20,
      margin: 20
    }
}) 