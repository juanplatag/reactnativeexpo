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

import { useObtenerEntrada } from '../hooks/useObtenerEntrada'

import { Cargando } from '../components/Cargando';
import { DetalleRegistro } from '../components/DetalleRegistro';
import { DetalleTramite } from '../components/DetalleTramite';
import { AntecedentesFolioReal } from '../components/AntecedentesFolioReal';
import { HistorialTramitacion } from '../components/HistorialTramitacion';
import { DocumentosPresentados } from '../components/DocumentosPresentados';



import { CardStyles } from '../theme/CardTheme';

import { DocumentoPresentado,CotejoDocumentosMarca,DocumentoPresentadoOEscaneado,DocumentoFinalizacionTramite,CalificacionActual } from '../utils/acciones';

interface Props extends StackScreenProps<any,any>{}


export const DetalleEntrada = ( { navigation,route }: Props ) => {

  const parametro:any = route.params
  const options = { PIdEntrada :  parametro.Identificador }
	const [url, guardarUrl]   = useState("");
	const { response, error, message, isLoading } = useObtenerEntrada(options);

  /*
  useEffect(() => {
        consultarAPI();
  }, [])
  */

  const mostrarPdf = async (urlPdf:string) => {

     //console.log(urlPdf)
     navigation.navigate("VisorPdf", {urlPdf})
  }  

  const ObtenerIdFolioReal = async (Identificador:string) => {

     //console.log(Identificador)
     navigation.navigate("DetalleFolios", {Identificador})
  }  

  const ObtenerIdPdf = async (IdDocumento:string,IdEntrada:string,TipoBusqueda:string) => {

    let Identificador:any
    let dataIdent:any
    let dataPdf:any
    
    if(TipoBusqueda === 'DocumentosPresentados'){
      //console.log("DocumentosPresentados")
      dataIdent = await DocumentoPresentado( IdDocumento, IdEntrada )
      Identificador = dataIdent.data
    }else if(TipoBusqueda === 'DocumentosEscaneados'){
      //console.log("DocumentosEscaneados")
      dataIdent = await DocumentoPresentadoOEscaneado( IdEntrada )
      Identificador = dataIdent.data
    }else if(TipoBusqueda === 'DocumentoFinalizacionTramite'){
      //console.log("DocumentoFinalizacionTramite")
      dataIdent = await DocumentoFinalizacionTramite( IdEntrada )
      Identificador = dataIdent.data  
    }else if(TipoBusqueda === 'DocumentoDefecto'){
      //console.log("DocumentoDefecto")
     // console.log(IdEntrada)
      dataIdent = await CalificacionActual( IdEntrada )
      Identificador = dataIdent.data
    }


    if(!dataIdent.statusresponse){
      dataPdf = await CotejoDocumentosMarca(Identificador)
      if(!dataPdf.statusresponse){
        mostrarPdf(dataPdf.data)
      }
    }
  

  }  



    return (
        <>
         { isLoading ?
								(
                  <> 
                   {/*
                     <Cargando 
                       modalVisible={isLoading}
                    /> 
                   */}
                   <View style={{ flex:1, justifyContent:"center",alignItems:"center"}}> 
                      <ActivityIndicator size="large" color="#f35588"/>
                   </View>
                  </>
								)
								:
								(
                  
                  <>
                   
                  
                    
                    <SafeAreaView style={styles.container}>
                    <ScrollView >
                       {/*
                        <Cargando 
                          modalVisible={isLoading}
                        /> 
                       */}
                      
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
                            
                            { parametro.NombreSociedad.length > 0 &&
                              (
                                <>
                                <View style={styles.contenido}>
                                  <Text style={{fontWeight:"bold",fontSize:14,color: 'black'}}>Sociedad/Dueño/Titular Registral</Text>
                                  <Text style={{flex: 1,fontSize:14,color: '#515154'}}>{parametro.NombreSociedad}</Text>
                                </View>
                                <Separator/>
                                <View style={{paddingBottom: 15}} ></View>
                                </>
                              )                            
                            }




                            { (response.DocumentosEscaneados.length > 0 ||
                              response.DocumentosPresentadosContenido.length > 0 ||
                              response.DocumentosPresentados.length > 0 ||
                              response.DocumentoFinalizacionTramite.length > 0 ||
                              response.DocumentoDefecto.length > 0) &&
                              (
                                <>

                                  <View style={[CardStyles.card,CardStyles.shadow]}>
                                      <View style={CardStyles.header}>
                                        <Text style={CardStyles.title}>Documentos</Text>
                                      </View>
                                      <View style={CardStyles.body}>
                                          {
                                            response.DocumentosEscaneados.map((item:any) =>(	
                                                  <DocumentosPresentados
                                                      key={item.id}
                                                      data={item}
                                                      ObtenerIdPdf={ObtenerIdPdf}
                                                      
                                                  />
                                            ))

                                          }
                                          {
                                            response.DocumentosPresentadosContenido.map((item:any) =>(	
                                                  <DocumentosPresentados
                                                      key={item.id}
                                                      data={item}
                                                      ObtenerIdPdf={ObtenerIdPdf}
                                                  />
                                            ))

                                          }
                                          {
                                            response.DocumentosPresentados.map((item:any) =>(	
                                                  <DocumentosPresentados
                                                      key={item.id}
                                                      data={item}
                                                      ObtenerIdPdf={ObtenerIdPdf}
                                                  />
                                            ))

                                          }   
                                          {
                                            response.DocumentoFinalizacionTramite.map((item:any) =>(	
                                              <DocumentosPresentados
                                                  key={item.id}
                                                  data={item}
                                                  ObtenerIdPdf={ObtenerIdPdf}
                                              />
                                              ))
                                             
                                          }
                                          {
                                            response.DocumentoDefecto.map((item:any) =>(	
                                              <DocumentosPresentados
                                                  key={item.id}
                                                  data={item}
                                                  ObtenerIdPdf={ObtenerIdPdf}
                                              />
                                              ))
                                             
                                          }
                                      </View>
                                  </View>
                                  <View style={{paddingBottom: 15}} ></View>
                                  </>
                                  )                            
                            }
                                  

    

                        { response.DetallesTramite.length > 0 &&
                              (
                                <>
                                  <View style={[CardStyles.card,CardStyles.shadow]}>
                                      <View style={CardStyles.header}>
                                        <Text style={CardStyles.title}>Trámites y Servicios</Text>
                                      </View>
                                      <View style={CardStyles.body}>
                                         {
                                          response.DetallesTramite.map((item:any) =>(	
                                                <DetalleTramite
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


                        { response.IngresosEntrada.length > 0 &&
                              (
                                <>
                                  <View style={[CardStyles.card,CardStyles.shadow]}>
                                      <View style={CardStyles.header}>
                                        <Text style={CardStyles.title}>Documentos de pagos presentados</Text>
                                      </View>
                                      <View style={CardStyles.body}>
                                          {
                                            response.IngresosEntrada.map((item:any) =>(	
                                                  <DetalleTramite
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

                        { response.AntecedentesFolioReal.length > 0 &&
                              (
                                <>
                                  <View style={[CardStyles.card,CardStyles.shadow]}>
                                      <View style={CardStyles.header}>
                                        <Text style={CardStyles.title}>Antecedentes registrales</Text>
                                      </View>
                                      <View style={CardStyles.body}>
                                          {
                                            response.AntecedentesFolioReal.map((item:any) =>(	
                                                  <AntecedentesFolioReal
                                                      key={item.id}
                                                      data={item}
                                                      ObtenerIdFolioReal={ObtenerIdFolioReal}
                                                  />
                                            ))
                                          }
                                      </View>
                                  </View>
                                  <View style={{paddingBottom: 15}} ></View>
                                </>
                              )                            
                        }


                        { response.HistorialTramitacion.length > 0 &&
                              (
                                <>
                                  <View style={[CardStyles.card,CardStyles.shadow]}>
                                      <View style={CardStyles.header}>
                                        <Text style={CardStyles.title}>Historial de tramitación</Text>
                                      </View>
                                      <View style={CardStyles.body}>
                                          {
                                            response.HistorialTramitacion.map((item:any) =>(	
                                                  <HistorialTramitacion
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