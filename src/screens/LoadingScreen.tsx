import React from 'react'
import { StatusBar ,StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export const LoadingScreen = () => {
    return (
        <View style={styles.container}>
        <ActivityIndicator 
        size = "large" 
        color = "white"
        />
          <StatusBar barStyle="light-content" backgroundColor="#002B93" />  
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#002B93',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
  });
