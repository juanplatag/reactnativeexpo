import React from 'react'
import { View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'


export const Background = () => {
    return (

        <LinearGradient
          //colors={['#003882', '#014DA3',  '#006CD5']}
          colors={['#021b79', '#0575e6']}
          //colors={['#014DA3', '#006CD5']}
          style={{
           
            position: 'absolute',
            top: -250,
            width: 1000,
            height: 2500
        }}
        >

        </LinearGradient>
    )
}
