import React, { useState } from "react";
import { View, Image, TouchableOpacity, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import * as ImagePicker from 'expo-image-picker'
import { Formik, useFormikContext } from 'formik'
import { Ionicons } from '@expo/vector-icons'
import * as Yup from 'yup'
import { ThemeProvider } from 'styled-components'

import { 
  Base,
  Container,
  Center,
  Row,
  
  // REGISTER 1
  RegisterStyle, 
  HeaderBack,
  ImagenBack,
  HeaderTitle,
  ImagenPaso1,
  ButtonAvatar,
  Avatar,
  Camare,

  // INPUT
  InputItem,

  // BUTTON
  Buttons,
  ButtonStyle,
  TextButton,
  // THEME
  ThemeLight,
  ThemeDark,
  
} from '../../../styles'
import { images as image, theme} from '../../../constants'
import  UserPermisions from '../../../components/Permissions' 
import { TextInput, HeaderNavigation, TextFooter } from '../../../components'

export const Suscribe1Screen =  ({ navigation }) => {
  const [imagePerfil, setImagenPerfil] = useState('')
  const [isShowPassword, setIsShowPassword] = useState(true) 

  const handlerPickAvatar = async () => {
    UserPermisions.getCameraPermission()

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3]
    })
  
    if(!result.cancelled){
      setImagenPerfil(result.uri)
    }
  }

  const InputsForm = () =>{
    const { submitForm } = useFormikContext()
    return (
      <>
        <InputItem>
          <TextInput 
            fieldName='name' 
            placeholder='Nombre'
            placeholderTextColor={theme.colors.textLight}
            // style={InputStyle.inputItem}
          />
        </InputItem>
        
        <InputItem>
          <TextInput 
            fieldName='lastName' 
            placeholder='Apellidos'
            placeholderTextColor={theme.colors.textLight}
            // style={InputStyle.inputItem}
          />
        </InputItem>

        <InputItem>
          <TextInput 
            fieldName='user' 
            placeholder='Usuario'
            placeholderTextColor={theme.colors.textLight}
            // style={InputStyle.inputItem}
            inlineImageLeft='ios-information-circle'
          />
        </InputItem>

        <InputItem>
          <TextInput 
            fieldName='email' 
            placeholder='Email'
            placeholderTextColor={theme.colors.textLight}
            autoCapitalize='none'
            keyboardType='email-address'
          />
        </InputItem>

        <InputItem>
          <TouchableOpacity style={RegisterStyle.mostrarPassword} onPress={() => setIsShowPassword(!isShowPassword)}>
            <Ionicons name='ios-eye' size={24} color={theme.colors.secondary}/>
          </TouchableOpacity>
          <TextInput 
            fieldName='password' 
            placeholder='Contraseña'
            placeholderTextColor={theme.colors.textLight}
            style={{ paddingRight: 50 }}
            underLineColorAndroid='transparent'
            secureTextEntry={isShowPassword}
          />
        </InputItem>

        <InputItem>
          <TextInput 
            fieldName='repeatPassword' 
            placeholder='Repetir Contraseña'
            placeholderTextColor={theme.colors.textLight}
            secureTextEntry={true}
          />
        </InputItem>

        <InputItem>
          <View style={[RegisterStyle.containerBandera, Base.row, Base.alignItemsCenter]}>
            <Image source={image.images.Suscribe1Bandera} style={{marginRight: 10}} />
            <Text>(51)</Text>
          </View>
          <TextInput 
            fieldName='phone' 
            placeholder='Número de celular'
            placeholderTextColor={theme.colors.textLight}
            style={ { paddingLeft: 100}}
            keyboardType='numeric'
            maxLength={9}
            type='phone'
          />
        </InputItem>

        <Center>
          <Buttons onPress={submitForm} style={ButtonStyle.ButtonShadow}>
            <TextButton>Próximo</TextButton>
          </Buttons>
        </Center>
    </>
    )
  }

  const saveInformation = (x: Object) => {
    if(imagePerfil == '') {
      alert('Seleccione una Imagen de Perdil')
    } else {
      x = { ...x, imagePerfil: imagePerfil}
      const usuario = JSON.stringify(x)
      navigation.navigate('Suscribe2', { datosUsuario: usuario })
    }
    // console.log(x)
  }

  return (
    <ThemeProvider theme={ThemeLight}>
      <StatusBar backgroundColor="#fff" barStyle='dark-content'/>
      <ScrollView>
        <SafeAreaView>
          <Container>
            {/* HEADER */}
            <HeaderNavigation>
              <HeaderBack onPress={()=> navigation.navigate('Login')}>
                <ImagenBack source={image.images.Suscribe1ArrowLeft} />
              </HeaderBack>
            </HeaderNavigation>
            {/* END HEADER */}
            {/* PASO 1 */}
            <HeaderTitle>¿Listo para empezar a crear tu cuenta?</HeaderTitle>
            <Center style={Base.alignItemsCenter} >
              <ImagenPaso1 source={image.images.Suscribe1Paso1} />
            </Center>
            {/* END PASO 1 */}
            {/* IMAGE PERFIL */}
            <Center>
              <ButtonAvatar onPress={() => handlerPickAvatar()}>
                { imagePerfil !== '' ? 
                  <Avatar source={{uri: imagePerfil}} /> : null
                }
                <Camare source={image.images.Suscribe1Camara}/>
              </ButtonAvatar>
            </Center>
            {/* END IMAGE PERFIL */}
            {/* FORM */}
            <Row>
              <Formik
                validationSchema={ Yup.object({
                  name: Yup
                    .string()
                    .required('El nombre es requerido'),
                  lastName: Yup
                    .string()
                    .required('El apellido es requerido'),
                  user: Yup
                    .string()
                    .required('El usuario es requerido'),
                  email: Yup
                    .string()
                    .email('asas')
                    .required('El email es requerido'),
                  password: Yup
                    .string()
                    .required('El password es requerido'),
                  repeatPassword: Yup
                    .string()
                    .required('El password es requerido')
                    .oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden'),
                  phone: Yup
                    .string()
                    .min(9, 'El formato incorrecto')
                    .required('El número es requerido')
                })}
                initialValues={{ 
                  name:'',
                  lastName:'', 
                  user:'',
                  email:'', 
                  password:'',
                  repeatPassword:'',
                  phone:''
                }}
                onSubmit={x => saveInformation(x) }
              >
                <InputsForm />
              </Formik>
            </Row>
            {/* END FORM */}
            {/* TEXT FOOTER */}
            {/* <View style={{marginBottom: theme.sizes.margin}}> */}
              <TextFooter/>
            {/* </View> */}
            {/* END TEXT FOOTER */}
          </Container>
        </SafeAreaView>
      </ScrollView>
    </ThemeProvider>
  )
}