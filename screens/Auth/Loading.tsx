import React, { useEffect } from 'react'
import {StyleSheet, View, ActivityIndicator, AsyncStorage } from 'react-native'

export const LoadingScreen = ({ navigation } ) => {
  useEffect(() => {
    getSession()
  }, [])


  const getSession = async () => {
    const session = await AsyncStorage.getItem('token')
    navigation.navigate(session ? 'Home' : 'AuthStack')
    console.log(session)
  }

  return ( 
    <View style={styles.container}>
      <ActivityIndicator size='large' color='red' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})