import React, {useContext} from 'react';
import { TouchableOpacity,View,StyleSheet,Image, Platform,Alert,Text} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

import { AuthContext } from '../context/AuthContext';


const BotonSalir = () => {
 
    const { user, token, logOut } = useContext( AuthContext );

    const salir02  =  () => {
        logOut()
    }  

    const salir  =  () => {
      Alert.alert(
        "¿Estás seguro de salir?",
        "",
        [
          {
            text: "No",
            onPress: () => null,
            style: "cancel"
          },
          { text: "Si", onPress: () => salir02() }
        ],
        { cancelable: false }
      );
    }


    return ( 
        <>
        <View style={{flexDirection: 'row', marginRight: 10}}>
         <TouchableOpacity
            style={{paddingHorizontal: 10, marginTop: 5}}
            onPress={() => salir()}
         >
           <View style={styles.iconContainer}>
              
              
              <View>
               <Icon name="exit-outline" color="#99CDFF" size={ 20 }/> 
             </View>
             <View  style={styles.iconStyle}>
                 <Text style={styles.titulo}> Salir</Text>
              </View>
           </View>

          

          
                
             
        </TouchableOpacity>
        </View>
        </>
     );
}
 
export default BotonSalir;


const styles = StyleSheet.create({
    iconContainer: {
       flexDirection: 'row',
       justifyContent: 'center',
       alignItems: 'center',
       padding: 5, 
       marginBottom: 5
    },

    iconStyle: {
      //flex: 1,
      marginRight: 2,
   },

    titulo: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#99CDFF',
    },
    

});
