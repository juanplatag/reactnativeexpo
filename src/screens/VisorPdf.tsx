import React, {useState,useEffect,useLayoutEffect} from 'react';
import { StyleSheet, View, StatusBar, Platform,TouchableOpacity,Text,Share,Dimensions,useWindowDimensions} from 'react-native';
import { ScrollView,  Linking } from 'react-native';
import Pdf from 'react-native-pdf';


import { StackScreenProps } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import { CargandoPdf } from '../components/CargandoPdf';
import { BotonCompartir } from '../components/BotonCompartir';


const windowWidth = useWindowDimensions().width;
const windowHeight = useWindowDimensions().height;

interface Props extends StackScreenProps<any,any>{}

export const VisorPdf = ( { navigation,route }: Props ) => {


  const [paginas, setPaginas] = useState(0)
  const [totalPaginas, settotalPaginas] = useState(0)

  const window = useWindowDimensions();
  const [visible, setVisible] = useState(true);
  const parametro:any = route.params
  const resourceType = 'url';

  //const url:any = Platform.OS === 'ios' ? parametro.urlPdf : `https://docs.google.com/gview?embedded=true&url=${parametro.urlPdf}`
  //const url:any = Platform.OS === 'ios' ? parametro.urlPdf : `https://mozilla.github.io/pdf.js/web/viewer.html?file=${parametro.urlPdf}`
  const source = {uri:parametro.urlPdf,cache:true};
  const urlenviar = parametro.urlPdf.replace("pdf","file");
  //console.log(parametro.urlPdf)



  
  const compartir  = async () => {
    
    try {
      
      const datos = {
        title:"Registro Público de Panamá",
        message:`Descargar PDF  ${parametro.urlPdf}`,
        //url: urlenviar
        //url: Platform.OS === 'ios' ? urlenviar : [urlenviar]
      }
      //console.log(datos)
      const result = await Share.share(datos);


      if (result.action === Share.sharedAction) {
        //alert("Post Shared")
      } else if (result.action === Share.dismissedAction) {
        // dismissed
        //alert("Post cancelled")
      }
    } catch (error) {
      //  console.log(error)
        //alert(error.message);
    }
  }  


  useEffect(() => {
        
    navigation.setOptions({
        headerRight: () => (
            <View style={{flexDirection: 'row', marginRight: 10}}>
               
               <TouchableOpacity
                    activeOpacity={ 0.10 }
                    style={{ marginRight: 10 }}
                    onPress={ () => compartir() }
                >
                <View style={styles.iconContainer}>
                 <Icon name="share-social" color="white" size={ 20 }/> 
                  <View  style={styles.iconStyle}>
                      <Text style={styles.titulo}> Compartir</Text>
                  </View>
                </View>
  
                
              </TouchableOpacity>
            </View>
        )
      })

  }, [])




  return(
      <>
          <View style={styles.container}>
              <StatusBar barStyle="light-content" backgroundColor="#014DA3" /> 
              <View style={{ justifyContent: 'center',alignItems: 'center',backgroundColor: 'black',  height: 25, width: "100%"}}>
                     <Text style={styles.paginas}>{paginas} / {totalPaginas}</Text> 
              </View>
              <CargandoPdf modalVisible={visible} /> 

              <Pdf
                trustAllCerts={false}
                source={source}
                onLoadComplete={(numberOfPages,filePath)=>{
                  settotalPaginas(numberOfPages)
                  setVisible(false)
                }}
                onPageChanged={(page,numberOfPages)=>{
                    setPaginas(page)
                }}

                style={styles.pdf}
              />

          </View>
          
      </>
  )

}

const styles = StyleSheet.create({
  container: {
      flex: 1,
     // justifyContent: 'flex-start',
     // alignItems: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      width:"100%",
      //marginTop: 25,
  },
  pdf: {
      flex:1,
      width:windowWidth,
      height:windowHeight,
  },
  marcopaginas: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  paginas: {
    fontWeight:"bold",
    fontSize:12,
    color: 'white',
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
  //   flex: 1,
     marginRight: 2,
  },
});



/*
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
  //   flex: 1,
     marginRight: 2,
  },
  pdf: {
    flex:1,
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
}

  });
*/



