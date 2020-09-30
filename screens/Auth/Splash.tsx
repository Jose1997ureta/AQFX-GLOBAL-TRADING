import React, { useEffect } from 'react'
import { ActivityIndicator, AsyncStorage } from 'react-native'
import styled from 'styled-components/native'
import { images as image, theme } from '../../constants' 
import { useStateValue } from "../states/ThemeState";

export const SplashScreen = ({ navigation }: any) => {
  const [state]: any = useStateValue();

  useEffect(() => {
    // const session = await theme.getSession("token");
    // setTimeout(() => {
    //   navigation.navigate(session ? 'Home' : 'AuthStack')
    // }, 3000)
    async function getSession() {
      const isLogin = await AsyncStorage.getItem('UserLogin');
      // const usuario = state.user;
      // if(usuario){
      //   dispach({
      //     type: "loginTrue"
      //   })
      // }
      // dispach({
      //   type: "loginFalse"
      // })
      // console.log(usuario + "hooa")
      setTimeout(() => {
        navigation.navigate(isLogin !== "" ? 'Home': 'AuthStack')
      }, 3000)

    }

    getSession();

  }, [])


  // const getSession = async () => {
  //   const session = await theme.getSession();
  //   setTimeout(() => {
  //     navigation.navigate(session ? 'Home' : 'AuthStack')
  //   }, 3000)
  // }

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
  background-color: ${(props: any) => props.theme.fondo3};
`;

const SpashImage = styled.Image`
  margin-bottom: 50px;
`;
