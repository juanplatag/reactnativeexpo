import React, {useState,useEffect} from 'react';
import { StyleSheet, View, StatusBar, Platform,TouchableOpacity,Text,Share,Dimensions} from 'react-native';
import { WebView } from 'react-native-webview';

import { StackScreenProps } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import { Cargando } from '../components/Cargando';

interface Props extends StackScreenProps<any,any>{}

export const Aura = ( { navigation,route }: Props ) => {

  const [visible, setVisible] = useState(false);
  const url:any = route.params

  
  //const url = 'https://botsfiles.blob.core.windows.net/auraapp/index.html'

  return(
      <>
          <View style={styles.container}>
              <StatusBar barStyle="light-content" backgroundColor="#014DA3" /> 

                    <Cargando modalVisible={visible} /> 
                    <WebView
                      //bounces={true}
                        //scrollEnabled={false} 
                      originWhitelist={['*']}
                      onLoadStart={() => setVisible(true)}
                      onLoad={() => setVisible(false)}
                      source={{ uri: url }} 
                      //javaScriptEnabled={true}
                     // domStorageEnabled={true}
                     // scalesPageToFit={true}
                     // automaticallyAdjustContentInsets={true}
                      //keyboardDisplayRequiresUserAction={false} //ios
                      //autoFocus={true} //android
                    /> 
          </View>
          <View style={{paddingBottom: 15}} ></View>
          
      </>
  )

}

const styles = StyleSheet.create({
   container: {
      flex: 1,
    },
    titulo: {
      fontSize: 12,
      fontWeight: 'bold',
      color: 'white',
    },
    iconContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5, 
      marginBottom: 5,
   },

   iconStyle: {
     flex: 1,
     marginRight: 2,
  },
  pdf: {
    flex:1,
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
}

  });
  
