import React from 'react'
import { View,Text, Platform,StyleSheet } from 'react-native'

interface Props {
     data: any;
}

export const DetalleTramite = ({ data }: Props) => {


    return (
        <>
        <View style={styles.contenido}>
               <Text style={styles.text}>{data.Nombre}</Text>
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
      paddingVertical: 10,
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