import React, { useContext, useEffect,useState } from 'react';
import { StyleSheet,SafeAreaView,ScrollView,StatusBar,Text, View, TextInput, Platform, KeyboardAvoidingView,TouchableWithoutFeedback, Keyboard, Alert, TouchableOpacity,Image } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import LineargGradient from 'react-native-linear-gradient';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Ionicons';

import { Cargando } from '../components/Cargando';
import { consultaStyles } from '../theme/consultasTheme';
import { useForm } from '../hooks/useForm';
import { Tomos } from '../utils/acciones';
import { useObtenerTiposTomo } from '../hooks/useObtenerTiposTomo'
import { useObtenerProvincias } from '../hooks/useObtenerProvincias'


//import { StackScreenProps } from '@react-navigation/stack';
//import { AuthContext } from '../context/AuthContext';

//interface Props extends StackScreenProps<any, any> {}
interface Props extends StackScreenProps<any,any>{}


export const BuscarTomos = ( { navigation }: Props ) => {

  
    const [loading, setLoading] = useState(false);
    const { ObtenerTiposTomo } = useObtenerTiposTomo();
    const { ObtenerProvincia } = useObtenerProvincias();

    const [openTipoTomo, setOpenTipoTomo] = useState(false);
    const [TipoTomoTemp, setTipoTomoTemp] = useState("");
    const [itemsTiposTomo, setItemsTiposTomo] = useState(ObtenerTiposTomo); 


    const [openProvincias, setOpenProvincias] = useState(false);
    const [ProvinciasTemp, setProvinciasTemp] = useState("");
    const [itemsProvincias, setItemsProvincias] = useState(ObtenerProvincia); 

   // const { signIn, errorMessage, removeError } = useContext( AuthContext );
   const [borderBottomColor, setBorderBottomColor] = useState('transparent');


  


   const { PNumeroFinca,PIdProvincia,PIdTipoTomo,PNumeroTomo,PNumeroFolio, onChange } = useForm({
        PNumeroFinca: "",
        PIdProvincia: "",
        PIdTipoTomo: "",
        PNumeroTomo: "",
        PNumeroFolio: ""
   });


   const consultarAPI = async () => {

    //let response = await obternerFolios( NumeroFolio, ubicacion,TitularesRegistrales,cedulaTitularRegistral,NumeroFolio_matriz,ubicacion_matriz,nombresociedad )

 

    let response = await Tomos( PNumeroFinca,ProvinciasTemp,TipoTomoTemp,PNumeroTomo,PNumeroFolio )
    
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
       navigation.navigate("ListadoTomos", response.data)
    }
}  

   const validarCriterio = () => {
       //setLoading(true)
       Keyboard.dismiss();
       if(!PNumeroFinca && !PIdProvincia && !PIdTipoTomo && !PNumeroTomo && !PNumeroFolio){
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

                    {/* Picker / Selector */}
                    {/*<Text style={ styles.label }>Tipo de Tomo:</Text> */}
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
                        open={openTipoTomo}
                        value={TipoTomoTemp}
                        items={ObtenerTiposTomo}
                        placeholder="Tipo de tomo"
                        setOpen={setOpenTipoTomo}
                        setValue={setTipoTomoTemp}
                        setItems={setItemsTiposTomo}
                    />



                    <TextInput 
                        placeholder="Número de Tomo"
                        placeholderTextColor="#006CD5"
                        underlineColorAndroid='#006CD5'
                        style={[ 
                            consultaStyles.inputField,
                            ( Platform.OS === 'ios' ) && consultaStyles.inputFieldIOS
                        ]}
                        
                        onChangeText={ (value) => onChange(value, 'PNumeroTomo') }
                        selectionColor="#006CD5"
                        clearButtonMode="always"
                        keyboardType="numeric"
                    />
                    <TextInput 
                        placeholder="Número de Folio"
                        placeholderTextColor="#006CD5"
                        underlineColorAndroid='#006CD5'
                        style={[ 
                            consultaStyles.inputField,
                            ( Platform.OS === 'ios' ) && consultaStyles.inputFieldIOS
                        ]}
                        onChangeText={ (value) => onChange(value, 'PNumeroFolio') }
                        selectionColor="#006CD5"
                        clearButtonMode="always"
                        keyboardType="numeric"
                    />


                    <TextInput 
                        placeholder="Número de Finca"
                        placeholderTextColor="#006CD5"
                        underlineColorAndroid='#006CD5'
                        style={[ 
                            consultaStyles.inputField,
                            ( Platform.OS === 'ios' ) && consultaStyles.inputFieldIOS
                        ]}
                        onChangeText={ (value) => onChange(value, 'PNumeroFinca') }
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
                        open={openProvincias}
                        value={ProvinciasTemp}
                        items={ObtenerProvincia}
                        placeholder="Provincias"
                        setOpen={setOpenProvincias}
                        setValue={setProvinciasTemp}
                        setItems={setItemsProvincias}
                    />


                    {/*<View style={{paddingBottom: 50}} ></View> */}
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


const styles = StyleSheet.create({

    label: {
        fontSize: 18
    },

});



