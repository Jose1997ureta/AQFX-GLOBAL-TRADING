import React, { useState } from "react";
import { Image, SafeAreaView, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker'
import { Formik, useFormikContext } from 'formik'
import { Ionicons } from '@expo/vector-icons'
import * as Yup from 'yup'

import { images as image, theme} from '../../../constants'
import  UserPermisions from '../../../model/Permissions' 
import { TextInput, HeaderNavigation, TextFooter } from '../../../components'
import { useStateValue } from '../../states/ThemeState'
import { 
  Base,
  Vista,
  Container,
  PaddingContainer,
  Center,
  Row,
  W100,
  
  // REGISTER 1
  RegisterStyle, 
  HeaderBack,
  ImagenBack,
  HeaderTitle,
  ButtonAvatar,
  Avatar,
  Camare,
  ShowPassword,
  ContainerBandera,
  TextPhone,

  // INPUT
  InputItem,

  // BUTTON
  ButtonPrimary,
  ButtonStyle,
  TextButtonPrimary,
  
} from '../../../styles'

export const Suscribe1Screen =  ({ navigation }: any) => {
  const [state]: any = useStateValue();
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
          />
        </InputItem>
        
        <InputItem>
          <TextInput 
            fieldName='lastName' 
            placeholder='Apellidos'
            placeholderTextColor={theme.colors.textLight}
          />
        </InputItem>

        <InputItem>
          <TextInput 
            fieldName='user' 
            placeholder='Usuario'
            autoCapitalize='none'
            placeholderTextColor={theme.colors.textLight}
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
          <ShowPassword onPress={() => setIsShowPassword(!isShowPassword)}>
            <Ionicons name='ios-eye' size={24} color={theme.colors.secondary}/>
          </ShowPassword>
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
          <ContainerBandera>
            <Image source={image.images.Suscribe1Bandera}/>
            <TextPhone>(51)</TextPhone>
          </ContainerBandera>
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
          <ButtonPrimary onPress={submitForm} style={ButtonStyle.ButtonShadow} underlayColor={theme.colors.primary}>
            <TextButtonPrimary>Próximo</TextButtonPrimary>
          </ButtonPrimary>
        </Center>
    </>
    )
  }

  const saveInformation = (x: Object) => {
    if(imagePerfil == '') {
      alert('Seleccione una Imagen de Perfil')
    } else {
      x = { ...x, imagePerfil: imagePerfil}
      const usuario = JSON.stringify(x)
      navigation.navigate('Suscribe2', { datosUsuario: usuario })
      console.log(usuario)
    }
  }

  return (
    <Vista>
      <ScrollView>
        <Container>
          <PaddingContainer>
            <HeaderNavigation>
              <HeaderBack onPress={() => navigation.navigate('Login')}>
                <ImagenBack source={image.images.Suscribe1ArrowLeft} />
              </HeaderBack>
            </HeaderNavigation>
            <HeaderTitle>¿Listo para empezar a crear tu cuenta?</HeaderTitle>
            <Center style={Base.alignItemsCenter} >
              <Image source={state.theme.register1} />
            </Center>
            <Center>
              <ButtonAvatar onPress={() => handlerPickAvatar()} style={RegisterStyle.ButtonAvatarShadow}>
                { imagePerfil !== '' ? 
                  <Avatar source={{uri: imagePerfil}} /> : null
                }
                <Camare source={image.images.Suscribe1Camara}/>
              </ButtonAvatar>
            </Center>
            <W100>
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
                    .email()
                    .required('El email es requerido'),
                  password: Yup
                    .string()
                    .min(4, 'El password es muy corto')
                    .required('El password es requerido'),
                  repeatPassword: Yup
                    .string()
                    .required('El password es requerido')
                    .oneOf([Yup.ref('password'), ''], 'Las contraseñas no coinciden'),
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
            </W100>
            <TextFooter/>
          </PaddingContainer>
        </Container>
      </ScrollView>
    </Vista>
  )
}