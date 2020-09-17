import React, { useEffect, useState } from 'react'
import { ActivityIndicator } from 'react-native'
import styled from 'styled-components/native'
import { images as image, theme } from '../../constants' 
import { ThemeProvider } from 'styled-components'
import { ThemeLight, ThemeDark } from '../../styles'

export const SplashScreen = ({ navigation } ) => {
  const [modoView, setModoView] = useState('')

  useEffect(() => {
    getSession()
  }, [])


  const getSession = async () => {
    const {session, modo} = await theme.themeView();
    setModoView(modo);

    setTimeout(() => {
      navigation.navigate(session ? 'Home' : 'AuthStack')
    }, 3000)
  }

  return ( 
    <ThemeProvider theme={ modoView == 'ThemeLight' ? ThemeLight : ThemeDark}>
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
