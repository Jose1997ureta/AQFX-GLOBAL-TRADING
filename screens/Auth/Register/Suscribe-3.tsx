import React, { useState, useEffect } from "react";
import { View, Image, SafeAreaView, ScrollView, Dimensions, AsyncStorage, NativeModules, ActivityIndicator } from 'react-native';
import Stripe from 'react-native-stripe-api';

import { images as image, theme} from '../../../constants'
import { HeaderNavigation, TextFooter } from '../../../components'
import { useStateValue } from '../../states/ThemeState'
import { 
  Base,
  Vista,
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
// import { State } from "react-native-gesture-handler";
// import { AnyStyledComponent } from "styled-components";
// import { DrawerActions } from "react-navigation-drawer";
// import { useStateValue } from '../../states/ThemeState'

const height = Dimensions.get('window').height

export const Suscribe3Screen =  ({ navigation }: any) => {
  const [state]: any = useStateValue();
  const datosUsuario = navigation.getParam('datosUserTarjeta')
  const [montoSuscripcion, setMontoSuscripcion] = useState('2000')
  const [isLoading, setIsLoading] = useState(false)

  const apiKey = 'pk_test_51HUMdbDIW7tj5bzI7yMFPbYi3FiajK4rEalCRAagV29xWZYs9qfa4sCXea64WBbwM6m5RSTJpv27obXwgWdkFB1g0029fQJkWm';
  const client = new Stripe(apiKey);

  const saveTarjeta = () => {
    setIsLoading(true);
    client.createToken({
      number: datosUsuario.numeroTarjeta,
      exp_month: datosUsuario.date.split("/")[1], 
      exp_year: datosUsuario.date.split("/")[2],  
      cvc: datosUsuario.code,
      address_zip: '12345',
      name: `${datosUsuario.name} ${datosUsuario.lastName}`,
      address_country: datosUsuario.country,
  
    }).then((x:any) => {
      if(x.card !== undefined){
        const datos = {
          id: 0,
          nombre: datosUsuario.name,
          apellidos: datosUsuario.lastName,
          indicador_telefonico: '+51',
          correo: datosUsuario.email,
          usuario: datosUsuario.user,
          clave: datosUsuario.password,
          id_stripe: x.card.id,
          numero_telefonico: datosUsuario.phone,
        }
        handlerRegister(datos)
      }else{
        alert(x.console.error.message);
      }
    })
  }

  const handlerRegister = async(datos:object) => {
    const response = await fetch('https://dev.azzinformatica.com/api/v1/cliente/registrar_actualizar', 
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datos),
    })

    const rpta = await response.json()
    if(rpta.data > 0){
      handlerSubmitImage(rpta.data,datosUsuario.imagePerfil)
    }else{
      alert(rpta.error)
    }
    
  }

  const handlerSubmitImage = async(idUsuario:any, image:any) => {
    const uri = image; 
    const name = uri.split('/').pop() || '';
    let match = /\.(\w+)$/.exec(name);
    const type = match ? `image/${match[1]}` : `image`;

    const form = new FormData();
    form.append("id", idUsuario);
    form.append("img", {
      uri,
      name,
      type
    });

    const response = await fetch("https://dev.azzinformatica.com/api/v1/cliente/actualizar_foto", {
      method: "PUT",
      headers: {'Accept': 'application/json','Content-Type': 'multipart/form-data'},
      body:form
    })
   
    const rpta = await response.json()
    if(rpta.data == 'Ok'){
      await AsyncStorage.setItem('UserLogin',String(idUsuario))
      setIsLoading(false);
    }else{
      console.log(rpta.data)
    }
  } 

  return (
    <Vista>
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
              {
                isLoading ? <Center style={{marginTop: theme.sizes.margin * 2}}>
                    <ActivityIndicator size='large' color={theme.colors.primary} />
                  </Center> : null 
              }
              
            </View>
            <TextFooter />
          </PaddingContainer>
        </Container>
      </ScrollView>
    </Vista>
  )
}