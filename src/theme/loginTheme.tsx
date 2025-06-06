import { Platform,StyleSheet } from 'react-native';
import { Background } from '../components/Background';
import {windowHeight, windowWidth} from '../utils/Dimentions';


export const loginStyles = StyleSheet.create({
    formContainer: {
      flex: 1,
      //flexDirection: 'column',
      //paddingHorizontal: 5,
      //alignItems: 'center',
     // justifyContent: 'center',
      paddingTop: Platform.OS === 'ios' ? 60 : 15,
      //height: 700,
      //marginBottom: 50
    },
    footer: {
        position: 'absolute', 
        left: 0, 
        right: 0, 
        bottom: '3%',
    },
    title: {
      alignSelf:"center",
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 10,
        paddingBottom:10
    },
    title2: {
      alignSelf:"center",
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 10,
    },
    label: {
        marginTop: 25,
        color: 'white',
        fontWeight: 'bold',
    },
    textStyle: {
      //padding: 10,
      paddingLeft: 2,
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      borderRightColor: '#fff',
      borderRightWidth: 0,
      width: 60,
    },
    titleStyle: {
        alignSelf:"center",
        color: '#4A82C1',
        fontSize: 12, //Platform.OS === 'ios' ? 12 : 14,
        marginTop: 10,
        paddingBottom:10,
    },
    inputField: {
        color:'white',
        fontSize: 20,
    },
    inputFieldIOS: {
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        paddingBottom: 4
    },
    buttonContainer: {
        alignItems: 'center',
        marginTop: 35
    },
    button: {
        width:"95%",
        borderWidth: 2,
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 18, //Platform.OS === 'ios' ? 18 : 21,
        color: 'white'
    },
    newUserContainer: {
        alignItems: 'flex-end',
        marginTop: 10
    },
    buttonReturn: {
        position: 'absolute',
        top: Platform.OS === 'ios' ? 50 : 20,
        left: 10,
        borderWidth: 0,
        borderColor: 'white',
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderRadius: 100
    },


    categoryContainer: {
        flexDirection: 'row',
        width: '95%',
        alignSelf: 'center',
        marginTop: 40,
        marginBottom: 10,
      },
      categoryBtn: {
        flex: 1,
        width: '30%',
        marginHorizontal: 0,
        alignSelf: 'center',
      },
      categoryIcon: {
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 40,
        height: 40,
        borderRadius: 50,
      },
      categoryBtnTxt: {
        alignSelf: 'center',
        marginTop: 5,
        color: '#FFF',
        fontSize: 14, //Platform.OS === 'ios' ? 14 : 17,
      },
      //PRUEBA
      inputContainer: {
        alignSelf:"center",
        marginTop: 5,
        marginBottom: 10,
        width: '95%',
        //height: 50,
        height: windowHeight / 17,
        borderColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
      },

      iconStyle: {
        //padding: 10,
        paddingLeft: 2,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: '#fff',
        borderRightWidth: 0,
        width: 40,
      },
      input: {
        //padding: 10,
        flex: 1,
        fontSize: 16, //Platform.OS === 'ios' ? 16 : 19,
        //fontFamily: 'Lato-Regular',
        color: '#333',
        justifyContent: 'center',
        alignItems: 'center',
      },
      input2: {
        //padding: 10,
        flex: 1,
        fontSize: 18, //Platform.OS === 'ios' ? 16 : 19,
        //fontFamily: 'Lato-Regular',
        color: '#333',
        fontWeight:"bold",
        justifyContent: 'center',
        alignItems: 'center',
      },
      inputField2: {
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
        width: windowWidth / 1.5,
        height: windowHeight / 15,
        fontSize: 16,
        borderRadius: 8,
        borderWidth: 1,
      },
      //PRUEBA
});