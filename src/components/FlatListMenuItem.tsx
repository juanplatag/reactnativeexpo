import React from 'react'
import { StyleSheet, Text, View,Platform } from 'react-native';
import { MenuItem } from '../interfaces/appInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';


interface Props {
    menuItem: MenuItem
}

export const FlatListMenuItem = ({ menuItem }: Props) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate( menuItem.component )}
            style={{
                height: Platform.OS === 'ios' ? 50 : 60,
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 17,
                marginHorizontal: 10,
                paddingHorizontal: 12,
                backgroundColor: "#fff",
                borderRadius: 12,
                ...styles.shadow
            }}
        >
            
            <View style={ styles.container }>
                <Icon 
                    name={ menuItem.icon }
                    color="#014DA3"
                    size={ 23 }
                />

                <Text style={ styles.itemText }>
                    { menuItem.name }
                </Text>

                <View style={{ flex: 1 }} />

                <Icon 
                    name="chevron-forward-outline"
                    color="#014DA3"
                    size={ 23 }
                />

            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemText: {
        marginLeft: 10,
        fontSize: Platform.OS === 'ios' ? 14 : 17,
        fontWeight: 'bold',
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: Platform.OS === 'ios' ? 0.20 : 0.30,
        shadowRadius: 4.65,

        elevation: 8

    }
});
