import React, { useContext, useEffect,useState } from 'react';
import { StatusBar,
         Text,
         View,
         TextInput,
         Platform,
         KeyboardAvoidingView,
         TouchableWithoutFeedback,
         Keyboard,
         Alert,
         Image,
         StyleSheet,
         TouchableOpacity,
         Easing,
         SafeAreaViewBase,
         SafeAreaView,
         FlatList,
         Animated
        
        } from 'react-native';     
import Icon from 'react-native-vector-icons/Ionicons';
import { StackScreenProps } from '@react-navigation/stack';


import { CardStyles } from '../theme/CardTheme';
import { ImagenRollo } from '../utils/acciones';
import { Cargando } from '../components/Cargando';

interface Props extends StackScreenProps<any,any>{}


export const ListadoPaginas = ( { navigation,route }: Props ) => {
   // console.log(route.params)

   const [paginas, setPaginas] = useState<any>([]);
   const [isLoading, setLoading] = useState<boolean>(false);
 

    const data:any = route.params
    //console.log(data)
    const mostrarPdf = async (urlPdf:string) => {
      navigation.navigate("VisorPdf", {urlPdf})
    }  

    const ObtenerIdPdf = async (PIdRollo:number,PNumeroImagen:number) => {
        //console.log('Hola 1')
       // console.log(PIdRollo)
       // console.log(PNumeroImagen)
        let dataPdf:any
        dataPdf = await ImagenRollo( PIdRollo,PNumeroImagen )

    
        if(!dataPdf.statusresponse){
            mostrarPdf(dataPdf.data)
        }
    }

    const cargarPaginas  = async () => {
        let n:any = 0
        let numpaginas:number = parseInt(data.NumerosImagenes)
        //console.log(data.NumerosImagenes)
          for (var i = 1; i <= numpaginas; i++) {
            //n += i;
            let contenido:any = {
                Id: i,
                Nombre: `Pagina No. ${i}`,
                PIdRollo: parseInt(data.Id),
                PNumeroImagen: parseInt(data.NumerosImagenes)
              }
          //  console.log(contenido)
           setPaginas([...paginas, contenido])


           /* setPaginas([{ ...paginas, 
              Id: i,
              Nombre: `Pagina No. ${i}`,
              IdRollo: parseInt(data.Id),
              INumeroImagen: parseInt(data.NumerosImagenes)
            }])*/
            
         
         }
         setLoading(false)

         
    
     
    }  


    useEffect(() => {
        
      //cargarPaginas()
      
     // console.log(paginas)
    
    }, [])

    

    return (
      <>
      { isLoading ?
             (
               <> 
                  <Cargando 
                    modalVisible={isLoading}
                 /> 
               </>
             )
             :
             (
                <>
                    <View style={styles.container}>
                    <View style={{ justifyContent: 'center',alignItems: 'center',backgroundColor: 'black',  height: 25, width: "100%"}}>
                          <Text style={styles.paginas}>{data.length.toLocaleString(undefined, {maximumFractionDigits:0})} Registros</Text> 
                    </View> 
                    <Cargando modalVisible={isLoading}/> 
                  <View style={{paddingBottom: 12}} ></View>
                    <FlatList
                      style={{flex:1}}
                      data={data}
                      renderItem={({ item }) => 
                        <TouchableOpacity 
                          activeOpacity={ 0.10 }
                          onPress={() => ObtenerIdPdf(item.PIdRollo,item.PNumeroImagen)}
                        >
                          <Item item={item}/>
                        </TouchableOpacity>
                      }
                      keyExtractor={item => item.Id}
                    />
                  </View>  
              </>
                 
                 )
           }
         </>
 
    )
}


function Item({ item}:any) {
  return (
    <>
    <View style={[CardStyles.card,styles.shadow]}>
        
        <View style={CardStyles.bodytree}>
           <View style={{flex:1}}>
        {
          (item.Nombre.length > 0) && (
            <>
            <View style={{flexDirection: 'row',justifyContent: 'center',alignItems:"center"}}>
               <Text style={{fontSize:16,fontWeight:"bold",color: '#515154'}}>{item.Nombre}</Text>
            </View>
            <View style={{paddingBottom: 5}} ></View>
            </>
          )
        }

  
      </View>
      <View style={{justifyContent:"center",alignItems:"center"}}>
        <Icon 
          name="chevron-forward-outline"
          color="#014DA3"
          size={ 23 }
        />
      </View>
     
        </View>
    </View>
    <View style={{paddingBottom: 20}} ></View>

    </>
  );
}

const Separator = () => (
  <View style={styles.separator} />
);




const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#E4E4E4',
    backgroundColor: '#C5D8ED',
   // marginTop:10
  },
  
  shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
  },

  listItem:{
    margin:10,
    padding:10,
    backgroundColor:"#FFF",
    width:"95%",
    flex:1,
    alignSelf:"center",
    flexDirection:"row",
    borderRadius:5
  },
  card: {
    height:80,
    flex:1,
    paddingTop:10,
    paddingBottom:10,
    marginTop:5,
    backgroundColor: '#FFFFFF',
    //flexDirection: 'column',
    borderTopWidth:40,
    marginBottom:20,
  },
  separator: {
    borderBottomWidth: 2,
    opacity: 0.4,
    marginVertical: 8,
    borderBottomColor: '#737373',
  },
  paginas: {
    fontWeight:"bold",
    fontSize:12,
    color: 'white',
  },
});