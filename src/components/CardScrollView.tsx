import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { CardStyles } from '../theme/CardTheme';


export const CardScrollView = () => {


    return (

        <View style={[CardStyles.card,CardStyles.shadow]}>
          <View style={CardStyles.header}>
            <Text style={CardStyles.title}>React Native Master</Text>
            <Icon 
                name="chevron-forward-outline"
                color="white"
                size={ 30 }
                />
          </View>
          <View style={CardStyles.body}>
              <Text style={CardStyles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida, metus eleifend vulputate fringilla, ligula odio vehicula tortor, ut iaculis nulla eros id turpis. </Text>
          </View>
        </View>

    );

}


const styles = StyleSheet.create({
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
        height:150,
        borderRadius:5,
        borderWidth: 1,
        borderColor: '#014DA3',
        
     },
      header: {
        flexDirection:"row",
        justifyContent: 'space-between',
        alignItems:"center",
        backgroundColor:"#014DA3" ,
        padding:8,
      },
      body: {
        padding:6,
      },
      text: {
        color: '#515154',
        fontSize:14
      },
      title: {
        fontWeight:"bold",
        fontSize:14,
        color:"white"
      },

 
});
