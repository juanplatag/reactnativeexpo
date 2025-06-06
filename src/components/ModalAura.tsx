import React,{useState} from 'react'
import { TouchableOpacity,Image, View, Modal,Text,StyleSheet,Linking, Platform} from 'react-native'
import { useAuraChat } from '../hooks/useAuraChat'

interface Props {
    modalVisible: boolean;
    cerrarModalChat: () => void;
    navigation: any
    //cerrarModalChat: () => Promise<void>;
}

export const ModalAura = ({ modalVisible = false,cerrarModalChat,navigation }: Props) => {

      const { response, error, message, isLoading } = useAuraChat();

      const WebChat  =  (url : string) => {
        navigation.navigate("Aura", url)
        cerrarModalChat()
      }
      const Telegram  =  (url : string) => {
        Linking.openURL(url);
        cerrarModalChat()
      }

      const Whatsapp  =  (url : string) => {
        Linking.openURL(url);
        cerrarModalChat()
      }

  
      const modalHeader=(
        <View style={StylesCovid.modalHeader}>
          <Text style={StylesCovid.title}>¡Hola! Soy Aura</Text>
          <Text style={{ fontSize: Platform.OS === 'ios' ? 12 : 14, marginBottom: 20,fontWeight:"bold", textAlign: 'center',color:"black" }}>
              Tu Asistente Virtual del Registro Público de Panamá
          </Text>
          <View style={StylesCovid.divider}></View>
        </View>
      )
    
      const modalBody=(
        <View style={StylesCovid.modalBody}>

          <Text style={{ fontSize: Platform.OS === 'ios' ? 10 : 12,fontWeight:"bold",color:"#666666", marginTop: 5, textAlign: 'center' }}>
            Selecciona un medio para comunicarme contigo:
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-between',
           
            }}>
           
                          {/* Inicio */}
         
                          <View 
                             style={{ flex: 1, 
                                      flexDirection: 'row',
                                      justifyContent: 'center',
                                      alignItems: 'center'
                                }}
                          
                          >
                          <TouchableOpacity 
                            onPress={() => Whatsapp(response.Whatsapp)}
                            disabled={isLoading}
                            activeOpacity={isLoading ? 1 : 0.8}
                          >

                          <View style={{ flexDirection: 'column',paddingHorizontal: Platform.OS === 'ios' ? 20 : 25 }}>
                              <Image
                                  source={require('../assets/images/WhatsApp.png')}
                                  style={{
                                      width: Platform.OS === 'ios' ? 60 : 70,
                                      height: Platform.OS === 'ios' ? 60 : 70,
                                  }}
                              />
                              <Text style={StylesCovid.titleSocial}>Whatsapp</Text>
                          </View>
                          </TouchableOpacity>

                          <TouchableOpacity 
                            onPress={ () => WebChat(response.WebChat)}
                            disabled={isLoading}
                            activeOpacity={isLoading ? 1 : 0.8}
                          >
                          <View style={{ flexDirection: 'column',paddingHorizontal: Platform.OS === 'ios' ? 20 : 25 }}>
                              <Image
                                  source={require('../assets/images/Webchat.png')}
                                  style={{
                                      width: Platform.OS === 'ios' ? 60 : 70,
                                      height: Platform.OS === 'ios' ? 60 : 70,
                                  }}
                              />
                              <Text style={StylesCovid.titleSocial}>Web Chat</Text>
                          </View>
                          </TouchableOpacity>

                          <TouchableOpacity 
                            onPress={ () => Telegram(response.Telegram)}
                            disabled={isLoading}
                            activeOpacity={isLoading ? 1 : 0.8}
                          >                         
                          <View style={{ flexDirection: 'column',paddingHorizontal: Platform.OS === 'ios' ? 20 : 25 }}>
                              <Image
                                  source={require('../assets/images/Telegram.png')}
                                  style={{
                                      width: Platform.OS === 'ios' ? 60 : 70,
                                      height: Platform.OS === 'ios' ? 60 : 70,
                                  }}
                              />
                              <Text style={StylesCovid.titleSocial}>Telegram</Text>
                          </View>
                          </TouchableOpacity>

                          </View>
                          </View>         
                      {/* Fin */}   
        </View>
      )
    
      const modalFooter=(
        <View style={StylesCovid.modalFooter}>
          <View style={StylesCovid.divider}></View>
          <View style={{flexDirection:"row-reverse",margin:10}}>
            <TouchableOpacity 
                style={{...StylesCovid.actions,backgroundColor:"#db2828"}} 
                onPress={cerrarModalChat}
              >
              <Text style={StylesCovid.actionText}>Salir</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    
      const modalContainer=(
        <View style={StylesCovid.modalContainer}>
          {modalHeader}
          {modalBody}
          {modalFooter}
        </View>
      )
    
      const modalAura = (
        <Modal
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
           // console.log("Adios")
          }}>
          <View style={StylesCovid.modal}>
            <View>
              {modalContainer}
            </View>
          </View>
        </Modal>
    )

    return (
        <>
        {modalAura}
        </>
    )
}

const StylesCovid = StyleSheet.create({

    modal:{
      //backgroundColor:"white",
      backgroundColor:"rgba(0,0,0, 0.6)",
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    modalContainer:{
      backgroundColor:"white",
      width:"90%",
      borderRadius: 25,
      borderWidth: 1,
      borderColor: "#000",
      borderStyle: "solid",
    },
    modalHeader:{
      backgroundColor:"white",
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      borderStyle: "solid",
    },
    title:{
      fontWeight:"bold",
      fontSize:Platform.OS === 'ios' ? 20 : 24,
      padding:15,
      color:"black"
    },
    titleSocial:{
      textAlign: 'center',
      fontSize:Platform.OS === 'ios' ? 12 : 14,
      //color:"black",
      color:"#666666",
    },
    divider:{
      width:"100%",
      height:1,
      backgroundColor:"lightgray"
    },
    modalBody:{
      backgroundColor:"white",
      height: 170,


     // alignItems: 'center',
     // paddingVertical:50,
     // paddingHorizontal:50
    },
    modalFooter:{
        backgroundColor:"white",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        borderStyle: "solid",
    },
    actions:{
      width: '100%',
      borderRadius:5,
      marginHorizontal:10,
      paddingVertical:10,
      paddingHorizontal:20,
      justifyContent:"center",
      alignItems:"center",

    },
    actionText:{
      justifyContent:"center",
      alignItems:"center",
      color:"#fff",
      fontSize:Platform.OS === 'ios' ? 12 : 14,
      fontWeight:"bold",
    },
    bodyText:{
        color:"#fff"
    }
  });
