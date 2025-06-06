import React from 'react'
import { View,Text, Platform,StyleSheet } from 'react-native'

interface Props {
     data: any;
}

export const DetalleFolioResultantes = ({ data }: Props) => {


    return (
        <>
        <View style={styles.contenido}>
            <View style={{flexDirection: 'row'}}>
                 <Text style={{flex: 1,fontSize:14,color: '#515154'}}>{data.Folio}</Text>
            </View>
            <View style={{flexDirection: 'row',justifyContent: 'center',alignItems:"center"}}>
                <Text style={{fontWeight:"bold",fontSize:14,color: 'black'}}>Relación : </Text>
                <Text style={{flex: 1,fontSize:14,color: '#515154'}}>{data.Relacion}</Text>
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
      flex: 1,
      justifyContent: 'center',
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
        fontSize:14
    },
}) 