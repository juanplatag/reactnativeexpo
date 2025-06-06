import React from 'react'
import { View,Text, Platform,StyleSheet,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { StackScreenProps } from '@react-navigation/stack';

interface Props{
     data: any;
     ObtenerPrelacion: ( PIdEntrada : string ) => Promise<void>;
     ObtenerEntrada: ( entrada : number, anio : number ) => Promise<void>;
}



export const DetallePrelacion = ({ data, ObtenerPrelacion,ObtenerEntrada}: Props) => {

    return (
        <>
        <View style={styles.contenido}>
                <View style={{flex:1}}>
                    
                        <TouchableOpacity 
                                activeOpacity={ 0.10 }
                                onPress={() => ObtenerEntrada(data.entrada,data.anio)}
                        >
                              <View style={{flexDirection: 'row',justifyContent: 'center',alignItems:"center"}}>
                        
                        <Text style={{fontWeight:"bold",fontSize:14,color: 'black'}}>No. de Entrada   : </Text>
                             <Text style={{flex: 1,fontSize:14,color: '#1267ea'}}>{data.NumeroEntrada}...ver</Text>
                             </View>
                        </TouchableOpacity>    
                    
                    <View style={{paddingBottom: 3}} ></View>
                    <View style={{flexDirection: 'row',justifyContent: 'center',alignItems:"center"}}>
                        <Text style={{fontWeight:"bold",fontSize:14,color: 'black'}}>Tipo de Entrada : </Text>
                        <Text style={{flex: 1,fontSize:14,color: '#515154'}}>{data.TipoEntrada}</Text>
                    </View>
                    <View style={{paddingBottom: 3}} ></View>
                    <View style={{flexDirection: 'row',justifyContent: 'center',alignItems:"center"}}>
                        <Text style={{fontWeight:"bold",fontSize:14,color: 'black'}}>Tramite : </Text>
                        <Text style={{flex: 1,fontSize:14,color: '#515154'}}>{data.TipoTramite}</Text>
                    </View>
                    <View style={{paddingBottom: 3}} ></View>
                    <View style={{flexDirection: 'row',justifyContent: 'center',alignItems:"center"}}>
                        <Text style={{fontWeight:"bold",fontSize:14,color: 'black'}}>Estado  : </Text>
                        <Text style={{flex: 1,fontSize:14,color: '#515154'}}>{data.Estado}</Text>
                    </View>
                </View>

                { data.Tiene_Documentos_Escaneados === "true" &&
                    (
                        <TouchableOpacity 
                            activeOpacity={ 0.10 }
                            onPress={() => ObtenerPrelacion(data.Id_Entrada)}
                            style={{ backgroundColor: 'white', width: 50,height: 50,borderRadius: 50 / 2,justifyContent:"center",alignItems:"center",borderColor: '#AD0B00',borderWidth: 1}}
                        >
                            <View style={styles.iconContent}>
                                <AntDesign name="pdffile1" color="#AD0B00" size={ 30 }/>
                            </View>
       
                        </TouchableOpacity>    

                    )                            
                }
        </View>

        <Separator/>
       
       
        </>

    )
}

const Separator = () => (
    <View style={styles.separator} />
);
  
const styles = StyleSheet.create({

    contenido: {
      //flex: 1,
      flexDirection:"row",
      //justifyContent: 'space-between',
      alignItems:"center",
      backgroundColor:"#FFF",
      paddingVertical: 15,
      //marginHorizontal: '2.5%',
    }, 
    separator: {
      borderBottomWidth: 2,
      opacity: 0.4,
      borderBottomColor: '#006CD5',
     // marginHorizontal: '2.5%'
    },  
    text: {
        color: '#515154',
        fontSize:14,
        flex: 1,
    },
    iconContent:{
        width: 60,
        justifyContent:"center",
        alignItems:"center"
    }
}) 