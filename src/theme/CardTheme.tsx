import { Platform,StyleSheet } from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimentions';


export const CardStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    alignItems:"center"
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

 card:{
    marginHorizontal: '2.5%',
    backgroundColor:"white",
    //height:150,
    borderRadius: 12,
    borderStyle: "solid",
   // borderWidth: 1,
   // borderColor: '#014DA3',
   // borderColor: '#C5D8ED',
    
 },
  header: {
    flexDirection:"row",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    //borderRadius: 4,
    justifyContent: 'space-between',
    alignItems:"center",
    //backgroundColor:"#014DA3" ,
    //backgroundColor:"#dadedf" ,
    //backgroundColor:"#cce4ff", 
    backgroundColor: '#C5D8ED',
    padding:8,
  },
  Subheader: {
    flexDirection:"row",
    justifyContent: 'space-between',
    alignItems:"center",
    backgroundColor:"#dfdfe6" ,
    padding:8,
  },
  body: {
    padding:6,
  },
  bodytwo: {
    flexDirection:"row",
    justifyContent: 'center',
    alignItems:"center",
    padding:6,
  },
  bodytree: {
   // backgroundColor: '#C5D8ED',
    height:60,
    flexDirection:"row",
    padding:6,
   // alignSelf:"center",
   justifyContent: 'center',
   alignItems:"center",
  },
  text: {
    color: '#515154',
    fontSize:14
  },
  title: {
    color: '#000000',
    fontWeight:"bold",
    fontSize: Platform.OS === 'ios' ? 14 : 14,
    //color:"white"
  },
  Subtitle: {
    fontWeight:"bold",
    fontSize: 14
  },
 
 
});