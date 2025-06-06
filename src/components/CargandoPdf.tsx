import React from 'react'
import { Image, View, Platform,Modal,ActivityIndicator,Text,StyleSheet, Dimensions } from 'react-native'

interface Props {
    modalVisible: boolean;
}

export const CargandoPdf = ({ modalVisible = false }: Props) => {


    return (
        <>
           <Modal
              transparent={true}
              visible={modalVisible}
           >
                <View style={{ flex:1,backgroundColor:"rgba(0,0,0, 0.6)", justifyContent:"center",alignItems:"center"}}> 
                    <View style={{flexDirection: 'row',backgroundColor:"white",padding:10,borderRadius:5, width:"70%",justifyContent:"center", alignItems:"center"}}>
                        <ActivityIndicator size="small" color="#f35588"/>
                        <Text style={styles.title}>Cargando PDF...</Text>
                    </View>
                </View> 
            </Modal> 

        </>
    )
}


const styles = StyleSheet.create({

    title: {
      color: 'black',
      fontWeight:"bold",
      fontSize: 16,
      margin: 20
    }
}) 