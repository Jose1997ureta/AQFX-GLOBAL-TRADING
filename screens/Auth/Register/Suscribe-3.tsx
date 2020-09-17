import React, { useState } from "react";
import { View, Image, SafeAreaView, ScrollView, Dimensions, StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components'

import { images as image, theme} from '../../../constants'
import { HeaderNavigation, TextFooter } from '../../../components'

import { 
  Base,
  Container,
  Center,
  Row,
  W100,
  Between,

  // SUSCRIBE 3
  RegisterStyle,
  HeaderBack,
  ImagenBack,
  HeaderTitle,
  HeaderMonto,
  HeaderMontoText,
  Card,
  CardText,
  CardMonto,

   // BUTTON
   ButtonPrimary,
   ButtonSecondary,
   TextButtonPrimary,
   TextButtonSecondary,
   ButtonStyle,

   // THEME
  ThemeLight,
  ThemeDark,

  // RegisterStyle,  
} from '../../../styles'

const height = Dimensions.get('window').height

export const Suscribe3Screen =  ({ navigation }) => {
  const datosUsuario = navigation.getParam('datosUserTarjeta')
  const [montoSuscripcion, setMontoSuscripcion] = useState('2000')

  const saveTarjeta = () => {
    const datosSubcripcion = {...datosUsuario, montoSub: montoSuscripcion}
    console.log(datosSubcripcion)
    navigation.navigate('Screens')
  }

  return (
    <ThemeProvider theme={ThemeDark}>
      <StatusBar backgroundColor="#fff" barStyle='dark-content'/>
      <ScrollView>
        <SafeAreaView>
          <Container style={[Base.between , {height: height}]}>
            <View>

              <HeaderNavigation>
                <HeaderBack onPress={()=> navigation.navigate('Suscribe2')}>
                  <ImagenBack source={image.images.Suscribe1ArrowLeft} />
                </HeaderBack>
              </HeaderNavigation>

              <HeaderTitle>Un pasó para tu futuro</HeaderTitle>
              <Center>
                <Image source={image.images.Suscribe3Paso3} />
              </Center>

              <HeaderMonto>
                <HeaderMontoText>Monto a cobrar (por mes)</HeaderMontoText>
              </HeaderMonto>

              <Card style={RegisterStyle.CardShadow}>
                <Between>
                  <CardText>Monto:</CardText>
                  <CardMonto>${montoSuscripcion}</CardMonto>
                </Between>
              </Card>

              <Center>
                <ButtonPrimary onPress={()=> saveTarjeta()} style={[ButtonStyle.ButtonShadow,{marginBottom: theme.sizes.margin}]}>
                  <TextButtonPrimary>Susbrirse</TextButtonPrimary>
                </ButtonPrimary>
                <ButtonSecondary onPress={()=> navigation.navigate('Login')} style={ButtonStyle.ButtonShadow}>
                  <TextButtonSecondary>Cancelar</TextButtonSecondary>
                </ButtonSecondary>
              </Center>
              
            </View>

            <TextFooter />
            
          </Container>
        </SafeAreaView>
      </ScrollView>
    </ThemeProvider>
  )
}