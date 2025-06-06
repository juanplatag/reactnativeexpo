import React from 'react'
import { View,Text, Platform,StyleSheet,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface Props {
     data: any;
     ObtenerIAsiento: ( PIdInscripcion : string ) => Promise<void>;
}

export const RegistroPrevioActivo = ({ data, ObtenerIAsiento }: Props) => {


    return (
        <>
        <View style={styles.contenido}>
                <View style={{flex:1}}>
                    <View style={{flexDirection: 'row',justifyContent: 'center',alignItems:"center"}}>
                    <Text style={{flex: 1,fontSize:14,color: '#515154'}}>{data.DerechoActo}</Text>
                    </View>
                    <View style={{paddingBottom: 3}} ></View>
                    <View style={{flexDirection: 'row',justifyContent: 'center',alignItems:"center"}}>
                        <Text style={{fontWeight:"bold",fontSize:14,color: 'black'}}>Fecha : </Text>
                        <Text style={{flex: 1,fontSize:14,color: '#515154'}}>{data.FechaInscripcion}</Text>
                    </View>
                </View>

                <View style={{justifyContent:"center",alignItems:"center"}}>
                     {/*<TouchableOpacity 
                        activeOpacity={ 0.10 }
                        onPress={() => ObtenerIAsiento(data.Id_Asiento)}
                    >
                        <View style={styles.iconContent}>
                            <AntDesign name="pdffile1" color="red" size={ 30 }/>
                        </View>
                    </TouchableOpacity>  
                      */}
                    <TouchableOpacity 
                   
                    style={styles.iconContent} 
                    activeOpacity={ 0.10 }
                    onPress={() => ObtenerIAsiento(data.Id_Asiento)}
                >

                        <AntDesign name="pdffile1" color="#AD0B00" size={ 30 }/>

                </TouchableOpacity>  
                </View>

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
        //width: 60,
        //justifyContent:"center",
        //alignItems:"center"
        backgroundColor: 'white', 
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        justifyContent:"center",
        alignItems:"center",
        borderColor: '#AD0B00',
        borderWidth: 1
    }
}) 