import React from 'react'
import { View,Text, Platform,StyleSheet,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface Props {
     data: any;
     ObtenerIdPdf: ( IdDocumento : string,IdEntrada : string, TipoBusqueda:string ) => Promise<void>;
}

export const DocumentosPresentados = ({ data, ObtenerIdPdf }: Props) => {


    return (
        <>
        <View style={styles.contenido}>
                <Text style={styles.text}>{data.Nombre}</Text>
                <TouchableOpacity 
                    style={styles.iconContent} 
                    activeOpacity={ 0.10 }
                    onPress={() => ObtenerIdPdf(data.IdDocumento,data.IdEntrada,data.TipoBusqueda)}
                >

                        <AntDesign name="pdffile1" color="#AD0B00" size={ 30 }/>

                </TouchableOpacity>    
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
       // alignItems:"center"
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