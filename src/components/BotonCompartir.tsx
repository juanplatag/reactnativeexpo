import React, {useContext} from 'react';
import { TouchableOpacity,View,StyleSheet,Image, Platform,Alert,Text,Share } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';


interface Props {
  urlPdf: any;
}

export const BotonCompartir = () => {


    const compartir  = async () => {
        try {
          const result = await Share.share({
            title:"Registro Público de Panamá",
            message:`Descargar PDF`,
            //url: urlPdf
          });
    
          if (result.action === Share.sharedAction) {
            //alert("Post Shared")
          } else if (result.action === Share.dismissedAction) {
            // dismissed
            //alert("Post cancelled")
          }
        } catch (error) {
           // console.log(error)
            //alert(error.message);
        }
    }  


    return ( 
        <>
        
         <TouchableOpacity
            style={styles.buttonReturn}
            onPress={() => compartir()}
         >
           <View style={{flexDirection: 'row', marginRight: 10}}>
                  <View style={styles.iconContainer}>
                      
                      
                    <View style={{flex: 1,marginLeft: 1}}>
                      <AntDesign name="sharealt" color="red" size={ 20 }/> 
                    </View>
                    
                    <View  style={styles.iconStyle}>
                        <Text style={styles.titulo}> Compartir</Text>
                      </View>
                  </View>
           </View>   
             
        </TouchableOpacity>
       
        </>
     );
}
 


const styles = StyleSheet.create({
    iconContainer: {
       flexDirection: 'row',
       justifyContent: 'center',
       alignItems: 'center',
       padding: 5, 
       marginBottom: 5,
    },

    iconStyle: {
      flex: 1,
      marginRight: 1,
      
   },

    titulo: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#99CDFF',
    },

    buttonReturn: {
      position: 'absolute',
      top: Platform.OS === 'ios' ? 50 : 20,
      //marginTop: 5,
      right: 10,
     // borderWidth: 0,
      borderColor: 'white',
      paddingHorizontal: 5,
      paddingVertical: 5,
     // borderRadius: 100
   },
    

});

//style={{paddingHorizontal: 10, marginTop: 5}}