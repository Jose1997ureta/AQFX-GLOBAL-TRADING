import React, { useEffect } from 'react'
import {ActivityIndicator, AsyncStorage } from 'react-native'
import styled from 'styled-components/native'
import { images as image } from '../../constants' 
import { ThemeProvider } from 'styled-components'
import { ThemeLight, ThemeDark } from '../../styles'

export const SplashScreen = ({ navigation } ) => {
  useEffect(() => {
    getSession()
  }, [])


  const getSession = async () => {
    const session = await AsyncStorage.getItem('token')
    // const themeView = await AsyncStorage.getItem('themeView')

    // if(themeView != 'ThemeLight'){

    // }
    setTimeout(() => {
      navigation.navigate(session ? 'Home' : 'AuthStack')
    }, 3000)
    // console.log(session)
  }

  return ( 
    <ThemeProvider theme={ThemeLight}>
      <SplashContainer>
        <Splash source={image.images.SplashFondo}>
          <SpashImage source={image.images.SplashLogo}/>
          <ActivityIndicator size='large' color='#fff' />
        </Splash>
      </SplashContainer>
    </ThemeProvider>
    
  )
}

const Splash = styled.ImageBackground`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const SplashContainer = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${props => props.theme.backgroundPrimary};
`;

const SpashImage = styled.Image`
  margin-bottom: 50px;
`;
