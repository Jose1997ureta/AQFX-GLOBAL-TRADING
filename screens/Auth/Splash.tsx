import React, { useEffect } from 'react'
import { ActivityIndicator } from 'react-native'
import styled from 'styled-components/native'
import { images as image, theme } from '../../constants' 

export const SplashScreen = ({ navigation } ) => {

  useEffect(() => {
    getSession()
  }, [])


  const getSession = async () => {
    const session = await theme.getSession();
    setTimeout(() => {
      navigation.navigate(session ? 'Home' : 'AuthStack')
    }, 3000)
  }

  return ( 
    <SplashContainer>
      <Splash source={image.images.SplashFondo}>
        <SpashImage source={image.images.SplashLogo}/>
        <ActivityIndicator size='large' color='#fff' />
      </Splash>
    </SplashContainer>
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
