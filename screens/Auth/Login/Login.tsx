import React, { useState } from "react"
import { View, Image, Text, ScrollView, StatusBar, Dimensions,AsyncStorage, ActivityIndicator} from 'react-native';
import { Formik, useFormikContext } from 'formik'
import * as Yup from 'yup'
import { images, theme } from '../../../constants'
import { InputLogin, HeaderNavigation, TextFooter } from '../../../components'
import { LOGIN } from '../../../model/API'
import { 
  // BASE
  Base,
  Vista,
  Container,
  PaddingContainer,
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
  
} from '../../../styles'

const height = Dimensions.get('window').height

export const LoginScreen = ({ navigation }: any) => {
  const [loading, setLoaging] = useState(false)
  
  const handleSubmit = async ( x: any ) => { 
    setLoaging(true)
    const response = await fetch(`https://dev.azzinformatica.com/api/v1/cliente/login?usuario=${x.user}&clave=${x.password}`)
    const rpta = await response.json()
    setLoaging(false)
    
    if(rpta.data != null){
      console.log(rpta.data)
      await AsyncStorage.setItem('UserLogin', String(rpta.data))
      navigation.navigate('Screens');
    }else if(rpta.data == null){
      x.user= ''
      x.password= ''
      alert('No hay concidencia')
    }else{
      alert(rpta.error)
    }
  }

  const InputsForm = () =>{
    const { submitForm } = useFormikContext()
    return (
      <>
        <InputItem>
          <InputLogin 
            fieldName='user' 
            placeholder='Usuario' 
            autoCapitalize='none'
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
    <Vista>
      <ScrollView>
        <ImageBackground source={images.images.LoginFondo}>
            <Container style={{backgroundColor: "initial"}}>
              <PaddingContainer style={[{height: height},Base.between]}>
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
                          .min(4, 'El password es muy corto')
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
                    { loading ? <ActivityIndicator size='large' color={theme.colors.primary} style={{marginTop:theme.sizes.margin * 2}} />: null}
                  </W100>
                </View>
                <TextFooter/>
              </PaddingContainer>
            </Container>
        </ImageBackground>
      </ScrollView>
    </Vista>
  )
}
