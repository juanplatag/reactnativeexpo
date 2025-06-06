import { Platform,StyleSheet } from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimentions';


export const consultaStyles = StyleSheet.create({
    formContainer: {
      flex: 1,
      backgroundColor: "white",
      //marginTop: 30,
      //justifyContent: 'center',
    },
  
    title: {
      alignSelf:"center",
        color: '#4A82C1',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 10,
        paddingBottom:10
    },

    inputField: {
        width: '95%',
        alignSelf: 'center',
        color:'#515154',
        fontSize: Platform.OS === 'ios' ? 18 : 20,
        marginTop: Platform.OS === 'ios' ? 30 : 10,
        paddingBottom: Platform.OS === 'ios' ? 0 : 10,
    },
    inputFieldDW: {
      width: '95%',
      alignSelf: 'center',
      color:'#515154',
      marginTop: Platform.OS === 'ios' ? 10 : 10,
      borderBottomColor: '#006CD5',
      borderBottomWidth: Platform.OS === 'ios' ? 2 : 1,
      paddingBottom: 4
  },
    inputFieldIOS: {
        borderBottomColor: '#006CD5',
        borderBottomWidth: 2,
        paddingBottom: 4
    },
    buttonContainer: {
      width:"95%", 
      alignSelf: 'center',
      paddingBottom: 25
    },
    button: {
        borderWidth: 0,
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 10
    },
    buttonText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white'
    },
    buttonLimpiar: {
      borderWidth: 1,
      borderColor: '#006CD5',
      alignItems: 'center',
      paddingVertical: 10,
      borderRadius: 10
    },
    buttonTextLimpiar: {
      fontSize: 18,
      color: '#006CD5'
    },


      inputContainer: {
        flexDirection: 'row',
        width: '95%',
        alignSelf: 'center',
        marginTop: 40,
        borderBottomWidth: 2,
        borderBottomColor: '#006CD5',
        paddingBottom: 5
      },

      input: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        fontSize: 18,
        color: '#38383A' //'#898E9A',
      },
 
});