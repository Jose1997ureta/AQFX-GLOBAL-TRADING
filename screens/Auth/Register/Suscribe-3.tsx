import React, { useState, useEffect } from "react";
import { View, Image, SafeAreaView, ScrollView, Dimensions, AsyncStorage } from 'react-native';

import { images as image, theme} from '../../../constants'
import { HeaderNavigation, TextFooter } from '../../../components'
import { useStateValue } from '../../states/ThemeState'
import { 
  Base,
  Container,
  PaddingContainer,
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

} from '../../../styles'
import { State } from "react-native-gesture-handler";
// import { useStateValue } from '../../states/ThemeState'

const height = Dimensions.get('window').height

export const Suscribe3Screen =  ({ navigation }: any) => {
  // const [ , dispach ] = useStateValue();
  const [state]: any = useStateValue();
  const datosUsuario = navigation.getParam('datosUserTarjeta')
  const [montoSuscripcion, setMontoSuscripcion] = useState('2000')

  useEffect(() => {
    getSession();
  }, [])

  const getSession = async () => {
    let login = await AsyncStorage.getItem("UserLogin");
    console.log(login);
  };

  const saveTarjeta = () => {
    const datosSubcripcion = {...datosUsuario, montoSub: montoSuscripcion}
    console.log(datosSubcripcion);
    // await AsyncStorage.setItem("UserLogin", "datosSubcripcion");
    // dispach({
    //   type: "loginTrue",
    //   user: "datosSubcripcion",
    // })
    // setTimeout(() => {
      // navigation.navigate('Screens')     
    // }, 3000)
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <Container>
          <PaddingContainer style={[{height: height},Base.between]}>
            <View>
              <HeaderNavigation>
                <HeaderBack onPress={()=> navigation.navigate('Suscribe2')}>
                  <ImagenBack source={image.images.Suscribe1ArrowLeft} />
                </HeaderBack>
              </HeaderNavigation>

              <HeaderTitle>Un pasó para tu futuro</HeaderTitle>
              <Center>
                <Image source={state.theme.registerPaso3} />
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
          </PaddingContainer>
        </Container>
      </ScrollView>
    </SafeAreaView>
  )
}