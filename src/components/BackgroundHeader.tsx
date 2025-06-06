import React from 'react';
import {StyleSheet, Text, View, Dimensions,useWindowDimensions,Platform} from 'react-native';
//import LineargGradient from 'react-native-linear-gradient';
import { WhiteLogo } from './WhiteLogo';
const W = Dimensions.get('window').width;
/**
 * Create Background Gradient
 */
export const BackgroundHeader = () => {

    const windowWidth = useWindowDimensions().width;
    //const windowHeight = useWindowDimensions().height;

  return (
    <View
    style={[styles.lineargGradient, styles.bg,{width:windowWidth}]}
    >
     <View
      style={styles.centrado}
    >
        <WhiteLogo 
                        width = {Platform.OS === 'ios' ? 100 : 100}
                        height = {Platform.OS === 'ios' ? 100 : 100}
        />
    </View>
   
    {/*
     <View style={styles.line} />
       <View style={[styles.line, {top: 130, left: -150}]} />
    <View style={[styles.line, {top: 160, left: 0}]} /> 
    */}

   
  </View>
  
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#014DA3',
  
  },
  lineargGradient: {
    backgroundColor: '#014DA3',
    height: (W * 3) / 4,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
  },
  line: {
    position: 'absolute',
    width: W,
    top: 100,
    left: -300,
    height: Platform.OS === 'ios' ? 80 : 60,
   // backgroundColor: 'rgba(255,255,255,0.1)',
    transform: [
      {
        rotate: '-35deg',
      },
    ],
    borderRadius: 60,
  },
  bg: {
    position: 'absolute',
   // width: Dimensions.get('window').width,
    height: Platform.OS === 'ios' ? 150 : 110,
  },
  centrado: {
    //position: 'absolute',
    top: Platform.OS === 'ios' ? 40 : 1,
    alignSelf:"center",

  }
});


 {/*
   <LineargGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={[styles.lineargGradient, styles.bg]}
      colors={['#021b79','#021b79', '#021b79' ]}
      >
      
      <View style={styles.line} />
      <View style={[styles.line, {top: 130, left: -150}]} />
      <View style={[styles.line, {top: 160, left: 0}]} />
      <WhiteLogo 
                    width = {Platform.OS === 'ios' ? 150 : 90}
                    height = {Platform.OS === 'ios' ? 80 : 90}
          />
      
    </LineargGradient>
  */}