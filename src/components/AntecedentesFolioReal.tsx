import React from 'react'
import { View,Text, Platform,StyleSheet,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface Props {
     data: any;
     ObtenerIdFolioReal: ( Identificador : string) => Promise<void>;
}

export const AntecedentesFolioReal = ({ data,ObtenerIdFolioReal }: Props) => {


    return (
        <>

        <View style={styles.contenido}>
                <Text style={styles.text}>{data.FolioRealToString}</Text>



                <TouchableOpacity 
                    activeOpacity={ 0.10 }
                    onPress={() => ObtenerIdFolioReal(data.IdFolioReal)}
                >
                    <View style={styles.iconContent}>
                    <Icon name="eye-outline" color="#014DA3" size={ 25 } />
                    </View>
                </TouchableOpacity>    

        </View>

        <Separator/>
        {/*
                <View style={styles.contenido}>
                <Text style={styles.text}>{data.FolioRealToString}</Text>

                <View style={styles.iconContent}>
                <AntDesign 
                    name="pdffile1"
                    color="red"
                    size={ 30 }
                />
         </View>

        </View>

        <Separator/>
        */}
       
       
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