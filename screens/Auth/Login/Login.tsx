import React, { useEffect, useState } from "react";
import { View, Image, Text, SafeAreaView, ScrollView, StatusBar, Dimensions} from 'react-native';
import { Formik, useFormikContext } from 'formik'
import * as Yup from 'yup'
import { ThemeProvider } from 'styled-components'

import { images, theme } from '../../../constants'
import { InputLogin, HeaderNavigation, TextFooter } from '../../../components'
import { 
  // BASE
  Base, 
  Container,
  Center,
  Row,
  W100,

  // LOGIN
  ImageBackground,
  TextLogin,
  ImageContainer,

  InputItem,
  TextOlvidarPassword,
  SuscribeContainer,
  TextSuscribe,

  // BUTTON
  ButtonSecondary,
  TextButtonSecondary,
  ButtonStyle,

  // THEME
  ThemeDark,
  ThemeLight,
  
} from '../../../styles'

const height = Dimensions.get('window').height

export const LoginScreen = ({ navigation }) => {
  const [modoView, setModoView] = useState('')

  useEffect(() => {
    getSession()
  }, [])

  const getSession = async () => {
    const {modo} = await theme.themeView();
    setModoView(modo);
    console.log(modoView)
  }

  const handleSubmit = ( x: Object ) => { 
    x ? navigation.navigate('Screens') : null
  }

  const InputsForm = () =>{
    const { submitForm } = useFormikContext()
    return (
      <>
        <InputItem>
          <InputLogin 
            fieldName='user' 
            placeholder='Usuario' 
            placeholderTextColor={theme.colors.textLight}
          />
        </InputItem>
        
        <InputItem>
          <InputLogin 
            fieldName='password' 
            placeholder='Contraseña' 
            placeholderTextColor={theme.colors.textLight}
            secureTextEntry={true}
          />
        </InputItem>

        <TextOlvidarPassword>¿Olvidaste la contraseña</TextOlvidarPassword>

        <Center>
          <ButtonSecondary onPress={submitForm} style={ButtonStyle.ButtonShadow}>
            <TextButtonSecondary>Entrar</TextButtonSecondary>
          </ButtonSecondary>
        </Center>

      </>
    )
  }

  return (
    <ThemeProvider theme={modoView == 'ThemeLight' ? ThemeLight : ThemeDark}>
      <ScrollView>
        <ImageBackground source={images.images.LoginFondo}>
          <StatusBar backgroundColor="#fff" barStyle='dark-content'/>
            <SafeAreaView style={{flex: 1}}>
              <Container style={[Base.between, {height: height}]}>
                <View>
                  
                  <HeaderNavigation>
                    <View></View>
                  </HeaderNavigation>

                  <TextLogin>Bienvenido</TextLogin>
                  
                  <ImageContainer>
                    <Image source={images.images.LoginLogo} />
                  </ImageContainer>
                  
                  <W100>
                    <Formik
                      validationSchema={ Yup.object({
                        user: Yup
                          .string()
                          .required('El usuario es requerido'),
                        password: Yup
                          .string()
                          .required('El password es requerido')
                      })}
                      initialValues={{  user:'', password:''}}
                      onSubmit={(x) => handleSubmit(x)}
                    >
                      <InputsForm />
                    </Formik>
                    <SuscribeContainer onPress={()=> navigation.navigate('Suscribe1')}>
                      <TextSuscribe>¿Aún no tienes una cuenta? <Text style={{color: theme.colors.primary}}>Suscribete</Text> </TextSuscribe>
                    </SuscribeContainer>
                  </W100>
                </View>
                
                <TextFooter/>
                
              </Container>
            </SafeAreaView>
        </ImageBackground>
      </ScrollView>
    </ThemeProvider>
  )
}
