import React from 'react'
import { Image, View, Platform } from 'react-native'

interface Props {
    width: number;
    height: number;
}

export const LogoBlanco = ({ width, height }: Props) => {
//export const WhiteLogo = () => {
    return (
        <View style={{
            alignItems: 'center',
            paddingBottom: 5,
        }}>
            <Image 
                source={ require('../assets/images/logoblanco.png') }
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
