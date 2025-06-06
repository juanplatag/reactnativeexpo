import React from 'react'
import { Image, View, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
    width: number;
    height: number;
}

export const WhiteLogo = ({ width, height }: Props) => {
//export const WhiteLogo = () => {
    return (
        <View style={{
            alignItems: 'center',
            //paddingBottom: 30
        }}>
          
        
         
                     <Image 
                source={ require('../assets/images/react-logo-white2.png') }
                style={{
                    //width: Platform.OS === 'ios' ? 150 : 180,
                    //height: Platform.OS === 'ios' ? 180 : 210,
                    width,
                    height,
                    resizeMode: 'cover',
              
                }}
                />
             

    
            
         

   
        </View>
    )
}
