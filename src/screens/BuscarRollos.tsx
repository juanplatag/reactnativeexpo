import React, { useContext, useEffect,useState } from 'react';
import { SafeAreaView,ScrollView,StatusBar,Text, View, TextInput, Platform, KeyboardAvoidingView,TouchableWithoutFeedback, Keyboard, Alert, TouchableOpacity,Image } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import LineargGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import DropDownPicker from 'react-native-dropdown-picker';

import { Cargando } from '../components/Cargando';
import { consultaStyles } from '../theme/consultasTheme';
import { useForm } from '../hooks/useForm';
import { Rollos } from '../utils/acciones';
import { useObtenerTiposRollo } from '../hooks/useObtenerTiposRollo'
import { useObtenerSeccionesRollo } from '../hooks/useObtenerSeccionesRollo'


//import { StackScreenProps } from '@react-navigation/stack';
//import { AuthContext } from '../context/AuthContext';

//interface Props extends StackScreenProps<any, any> {}
interface Props extends StackScreenProps<any,any>{}


export const BuscarRollos = ( { navigation }: Props ) => {

   // const { signIn, errorMessage, removeError } = useContext( AuthContext );
   const [borderBottomColor, setBorderBottomColor] = useState('transparent');


   const [loading, setLoading] = useState(false);
   const { ObtenerTiposRollos } = useObtenerTiposRollo();
   const { ObtenerSeccionesRollo } = useObtenerSeccionesRollo();


   const [openTiposRollos, setOpenTiposRollos] = useState(false);
   const [TiposRollosTemp, setTiposRollosTemp] = useState("");
   const [itemsTiposRollos, setItemsTiposRollos] = useState(ObtenerTiposRollos); 

   const [openSeccionesRollo, setOpenSeccionesRollo] = useState(false);
   const [SeccionesRolloTemp, setSeccionesRolloTemp] = useState("");
   const [itemsSeccionesRollo, setItemsSeccionesRollo] = useState(ObtenerSeccionesRollo); 


   const { PNumeroRollo,PIdSeccion,PIdTipoRollo, onChange } = useForm({
      PNumeroRollo : "",
      PIdSeccion : "",
      PIdTipoRollo : ""
   });


   const consultarAPI = async () => {

    //let response = await obternerFolios( NumeroFolio, ubicacion,TitularesRegistrales,cedulaTitularRegistral,NumeroFolio_matriz,ubicacion_matriz,nombresociedad )
    let response = await Rollos( PNumeroRollo,SeccionesRolloTemp,TiposRollosTemp )
    
    if (response.statusresponse){
        Alert.alert(
            "",
            response.message,
            [
              { text: "Ok", onPress: () => null }
            ]
          )
         setLoading(false)
         return
    }else{
       setLoading(false)
       //console.log(response.data)
       navigation.navigate("ListadoRollos", response.data)
    }
}  

   const validarCriterio = () => {
       //setLoading(true)
       Keyboard.dismiss();
       if(!PNumeroRollo  && !PIdSeccion && !PIdTipoRollo){
           Alert.alert(
               "",
               "Debe registrar un dato en la busqueda",
               [
                 { text: "Ok", onPress: () => null }
               ]
             )
            setLoading(false)
            return
       }

       //setLoading(false)
       //console.log(NumeroFolio)
       //console.log(nombresociedad)
       setLoading(true)
       consultarAPI()

   }


    return (
        <>
            {/* Background */}
          
            <StatusBar barStyle="light-content" backgroundColor="#014DA3" />
           
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={ (Platform.OS === 'ios') ? 'padding': 'height' }
            >
                

                
                <View style={ consultaStyles.formContainer }>    
    

                    <Cargando 
                       modalVisible={loading}
                    /> 
      
                  <View style={{paddingBottom: Platform.OS === 'ios' ? 10 : 0}} ></View>
                   <DropDownPicker
                        listMode="MODAL"
                        modalProps={{
                            animationType: "fade"
                        }}
                        containerStyle={consultaStyles.inputFieldDW}
                        textStyle={{
                            color:'#006CD5',
                            fontSize: Platform.OS === 'ios' ? 18 : 20,
                        }}
                        style={{backgroundColor: 'white',
                        borderWidth: 0,
                        borderColor: '#006CD5',
                       }}
                        dropDownContainerStyle={{
                            borderWidth: 1,
                            borderColor: '#006CD5',
                        }}
                        itemSeparator={true}
                        itemSeparatorStyle={{
                            backgroundColor: "#006CD5",
                        }}
                        zIndex={3000}
                        zIndexInverse={1000}
                        ArrowUpIconComponent={() => <Icon name="caret-up-outline" color="#006CD5" size={ 20 }/>}
                        ArrowDownIconComponent={() => <Icon name="caret-down-outline" color="#006CD5" size={ 20 }/>}
                        TickIconComponent={() => <Icon name="checkmark-circle-outline" color="#006CD5" size={ 25 }/>}
                        open={openTiposRollos}
                        value={TiposRollosTemp}
                        items={ObtenerTiposRollos}
                        placeholder="Tipo de rollo"
                        setOpen={setOpenTiposRollos}
                        setValue={setTiposRollosTemp}
                        setItems={setItemsTiposRollos}
                    />
                   

                    <TextInput 
                        placeholder="Número de Rollo"
                        placeholderTextColor="#006CD5"
                        underlineColorAndroid='#006CD5'
                        style={[ 
                            consultaStyles.inputField,
                            ( Platform.OS === 'ios' ) && consultaStyles.inputFieldIOS
                        ]}
                        onChangeText={ (value) => onChange(value, 'PNumeroRollo') }
                        selectionColor="#006CD5"
                        clearButtonMode="always"
                        keyboardType="numeric"
                    />
                   


                    <DropDownPicker
                        listMode="MODAL"
                        modalProps={{
                            animationType: "fade"
                        }}
                        containerStyle={consultaStyles.inputFieldDW}
                        textStyle={{
                            color:'#006CD5',
                            fontSize: Platform.OS === 'ios' ? 18 : 20,
                        }}
                        style={{backgroundColor: 'white',
                        borderWidth: 0,
                        borderColor: '#006CD5',
                       }}
                        dropDownContainerStyle={{
                            borderWidth: 1,
                            borderColor: '#006CD5',
                        }}
                        itemSeparator={true}
                        itemSeparatorStyle={{
                            backgroundColor: "#006CD5",
                        }}
                        ArrowUpIconComponent={() => <Icon name="caret-up-outline" color="#006CD5" size={ 20 }/>}
                        ArrowDownIconComponent={() => <Icon name="caret-down-outline" color="#006CD5" size={ 20 }/>}
                        TickIconComponent={() => <Icon name="checkmark-circle-outline" color="#006CD5" size={ 25 }/>}
                        open={openSeccionesRollo}
                        value={SeccionesRolloTemp}
                        items={ObtenerSeccionesRollo}
                        placeholder="Sección"
                        setOpen={setOpenSeccionesRollo}
                        setValue={setSeccionesRolloTemp}
                        setItems={setItemsSeccionesRollo}
                    />

                    <View style={{paddingBottom: 20}} ></View> 
                    <View style={ consultaStyles.buttonContainer }>
                        <TouchableOpacity
                            activeOpacity={ 0.8 }
                            onPress={ validarCriterio }
                           // disabled={!anio || !noentrada  ? true : false}
                        >
                             <LineargGradient
                                start={{ x: 0, y: 0 }}
                                end={{x: 1, y: 1 }}
                                colors={['#014DA3', '#006CD5']}
                                style={consultaStyles.button}
                            >
                                <Text style={ consultaStyles.buttonText } >Buscar</Text>
                            </LineargGradient>
                        </TouchableOpacity>
                    </View>
              </View>
            
            </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </>

    )
}


