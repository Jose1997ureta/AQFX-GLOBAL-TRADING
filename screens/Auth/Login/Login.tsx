import React, { useState } from "react";
import { View, Image, Text, SafeAreaView, ScrollView, StatusBar, Dimensions} from 'react-native';
// import { Base, Container, ContainerButton } from '../../../styles/Base'
import { 
  // BASE
  Base, 
  Container,
  Center,
  Row,
  // LOGIN
  // LoginStyle, 
  ImageBackground,
  TextLogin,
  ImageContainer,
  // InputContainer,
  InputItem,
  TextOlvidarPassword,
  SuscribeContainer,
  TextSuscribe,
  // BuTTON
  ButtonLogin,
  TextButtonLogin,
  ButtonStyle,

  // THEME
  ThemeDark,
  ThemeLight,
  
} from '../../../styles'
// import { ThemeLight,ThemeDark } from '../../../styles/theme'

import { images, theme } from '../../../constants'
import { InputLogin, HeaderNavigation, TextFooter } from '../../../components'
import { Formik, useFormikContext } from 'formik'
import * as Yup from 'yup'
import { ThemeProvider } from 'styled-components'

const height = Dimensions.get('window').height

export const LoginScreen = ({ navigation }) => {

  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    console.log(isEnabled)
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
          <ButtonLogin onPress={submitForm} style={ButtonStyle.ButtonShadow}>
            <TextButtonLogin>Entrar</TextButtonLogin>
          </ButtonLogin>
        </Center>

      </>
    )
  }

  return (
    <ThemeProvider theme={ThemeLight}>
      <ScrollView>
        <ImageBackground source={images.images.LoginFondo}>
          <StatusBar backgroundColor="#fff" barStyle='dark-content'/>
            <SafeAreaView style={{flex: 1}}>
              <Container style={[Base.between, {height: height}]}>
                <View>
                  {/* HEADER */}
                  <HeaderNavigation>
                    <View></View>
                  </HeaderNavigation>
                  {/* END HEADER */}
                  {/* TITLE */}
                  <TextLogin>Bienvenido</TextLogin>
                  {/* END TITLE */}
                  {/* LOGO */}
                  <ImageContainer>
                    <Image source={images.images.LoginLogo} />
                  </ImageContainer>
                  {/* END LOGO */}
                  {/* FORM */}
                  <Row>
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
                  </Row>
                  {/* END FORM */}
                </View>
                {/* <View style={{flex: 1, justifyContent: 'flex-end'}}> */}
                  <TextFooter/>
                {/* </View> */}
              </Container>
            </SafeAreaView>
        </ImageBackground>
      </ScrollView>
    </ThemeProvider>
  )
}
