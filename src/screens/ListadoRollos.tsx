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
import { ImagenTomo } from '../utils/acciones';


interface Props extends StackScreenProps<any,any>{}


export const ListadoRollos = ( { navigation,route }: Props ) => {
   // console.log(route.params)

    const data:any = route.params
    //console.log(data)
    const mostrarPdf = async (urlPdf:string) => {
      navigation.navigate("VisorPdf", {urlPdf})
    }  

    const ObtenerIdPdf = async (PIdTomo:string) => {
        let dataPdf:any
        dataPdf = await ImagenTomo( PIdTomo )
    
        if(!dataPdf.statusresponse){
            mostrarPdf(dataPdf.data)
        }
    }



    return (
        <>
       <View style={styles.container}>
       <View style={{ justifyContent: 'center',alignItems: 'center',backgroundColor: 'black',  height: 25, width: "100%"}}>
            <Text style={styles.paginas}>{data.length.toLocaleString(undefined, {maximumFractionDigits:0})} Registros</Text> 
       </View> 
       <View style={{paddingBottom: 12}} ></View>
        <FlatList
          style={{flex:1}}
          data={data}
          renderItem={({ item }) => 
            <TouchableOpacity 
              activeOpacity={ 0.10 }
              onPress={() => navigation.navigate("ListadoPaginas", item.Paginas)}
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


function Item({ item}:any) {
  return (
    <>
    <View style={[CardStyles.card,styles.shadow]}>
        
        <View style={CardStyles.header}>
            <Text style={CardStyles.title}>{item.Rollo_ToString}</Text>
        </View>
        <View style={CardStyles.bodytwo}>
           <View style={{flex:1}}>
        {
          (item.Rollo.length > 0) && (
            <>
            <View style={{flexDirection: 'row',justifyContent: 'center',alignItems:"center"}}>
            <Text style={{fontWeight:"bold",fontSize:14}}>No. Rollo         : </Text>
            <Text style={{flex: 1,fontSize:16,color: '#515154'}}>{item.Rollo}</Text>
            </View>
            <View style={{paddingBottom: 3}} ></View>
            </>
          )
        }

        {
          (item.TipoRollo.length > 0) && (
            <>
            <View style={{flexDirection: 'row',justifyContent: 'center'}}>
            <Text style={{fontWeight:"bold",fontSize:14}}>Tipo de Rollo : </Text>
            <Text style={{flex: 1,fontSize:13,color: '#515154'}}>{item.TipoRollo}</Text>
            </View>
            </>
          )
        }

        {
          (item.Seccion.length > 0) && (
            <>
            <View style={{flexDirection: 'row',justifyContent: 'center',alignItems:"center"}}>
              <Text style={{fontWeight:"bold",fontSize:14}}>Sección           : </Text>
              <Text style={{flex: 1,fontSize:13,color: '#515154'}}>{item.Seccion}</Text>
            </View>
            <View style={{paddingBottom: 3}} ></View>
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
    <View style={{paddingBottom: 12}} ></View>

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
    backgroundColor: 'white',
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
    //height:null,
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