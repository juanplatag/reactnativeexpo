import React from 'react'
import { View,Text, Platform,StyleSheet,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface Props {
     data: any;
}

export const DetalleUsuariosRelacionados = ({ data }: Props) => {

    return (
        <>
        <View style={styles.contenido}>
            <Text style={{fontWeight:"bold",fontSize:14,color: 'black'}}>{data.Relacion}</Text>
            <Text style={{flex: 1,fontSize:14,color: '#515154'}}>{data.Usuario}</Text>
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