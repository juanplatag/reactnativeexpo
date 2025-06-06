import React from 'react'
import { ImageBackground,Image,TouchableOpacity, View, Text, StyleSheet, TouchableNativeFeedback, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';



interface Props {
    title: string;
    position?: 'br' | 'bl';
    onPress: () => void;
}

export const Fab = ({ title, onPress, position = 'br' }: Props ) => {

    const ios = () => {
        return (
            <TouchableOpacity
                onPress={ onPress }
                activeOpacity={ 0.75 }
                style={[ 
                    styles.fabLocation,  
                    ( position === 'bl' ) ? styles.left : styles.right
                ]}
            >
                <View style={ styles.fab }>
                         <Text style={ styles.fabText }> { title } </Text>
      
                        <Image
                                source={require('../assets/images/aura.png')}
                                style={{
                                    width: 60,
                                    height: 60,
                                    borderRadius: 60,
                                }}
                        />

                        <Text style={ styles.fabText }>Chat</Text>
                     
                </View>
            </TouchableOpacity>
        )
    }

    const android = () => {
        return (
            <View
                style={[ 
                    styles.fabLocation,  
                    ( position === 'bl' ) ? styles.left : styles.right
                ]}
            >
                
                <TouchableNativeFeedback
                    onPress={ onPress }
                    background={ TouchableNativeFeedback.Ripple('#28425B', false, 30 ) }
                >
                    <View style={ styles.fab }>
                        <Text style={ styles.fabText }> { title } </Text>
                         <Image
                                source={require('../assets/images/aura.png')}
                                style={{
                                    width: 60,
                                    height: 60,
                                    borderRadius: 60,
                                   
                                }}
                        />
                        <Text style={ styles.fabText }>Chat</Text>
                    </View>
                </TouchableNativeFeedback>
                {/*
                <TouchableOpacity
                    onPress={ onPress }
                    activeOpacity={ 0.95 }
                >
                    <View style={ styles.fab }>
                        <Text style={ styles.fabText }> { title } </Text>
                        <Image
                                source={require('../assets/images/aura.png')}
                                style={{
                                    width: 60,
                                    height: 60,
                                }}
                        />
                        <Text style={ styles.fabText }>Chat</Text>
                    </View>
                </TouchableOpacity>
                 */}
            </View>
        )
    }



    return (Platform.OS === 'ios') ? ios() : android();
}

const styles = StyleSheet.create({
    fabLocation: {
        position: 'absolute',
        bottom: 25,
    },
    right: {
        right: 25
    },
    left: {
        left: 25
    },
    fab: {
        backgroundColor: 'transparent',
        //backgroundColor: '#021b79',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    fabText: {
        color: 'white',
        fontSize: 12, //Platform.OS === 'ios' ? 12 : 14,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    image: {
        width: 60,
        height: 60,
        backgroundColor: 'transparent'
      },
})