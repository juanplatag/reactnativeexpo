import React from 'react'
import { View,Text, Platform,StyleSheet } from 'react-native'

interface Props {
    data: any;
}

export const DetalleRegistro = ({ data }: Props) => {



    return (
        <>
        <View style={styles.contenido}>
            <Text style={{fontWeight:"bold",fontSize:14,color: 'black'}}>{data.titulo}</Text>
            <Text style={{flex: 1,fontSize:14,color: '#515154'}}>{data.campo}</Text>
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
      marginHorizontal: '2.5%',
    }, 
    separator: {
      borderBottomWidth: 2,
      opacity: 0.4,
      borderBottomColor: '#006CD5',
      marginHorizontal: '2.5%'
    }
}) 