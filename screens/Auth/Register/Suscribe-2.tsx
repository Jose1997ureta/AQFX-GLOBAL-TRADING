import React, { useState } from "react";
import { View, Image, TouchableOpacity, Text, SafeAreaView, ScrollView, Dimensions, StatusBar } from 'react-native';
import { Formik, useFormikContext } from 'formik'
import DateTimePickerModal  from 'react-native-modal-datetime-picker'
import * as Yup from 'yup'
import { ThemeProvider } from 'styled-components'

import { images as image, theme} from '../../../constants'
import { TextInput, HeaderNavigation, TextFooter } from '../../../components'
import { 
  Base,
  Container,
  Center,
  Row,
  W100,
  Between,
 
  // SUSCRIBE 2 
  HeaderBack,
  ImagenBack,
  HeaderTitle,
  HeaderTarjeta,
  HeaderTarjetaText,
  ContainerTarjeta,

  // INPUT
  InputItem,

  // BUTTON
  ButtonPrimary,
  ButtonStyle,
  TextButtonPrimary,

  // THEME
  ThemeLight,
  ThemeDark,
} from '../../../styles'

const height = Dimensions.get('window').height

export const Suscribe2Screen =  ({ navigation }) => {
  const datosUser = navigation.getParam('datosUsuario')
  const [fechaTarjeta, setFechaTarjeta] = useState('')
  const [isFecha, setIsFecha] = useState(false)

  const formatDate = (date: Date) => {
    const fecha = new Date(date) 
    const day = fecha.getDate()
    const month = fecha.getMonth() + 1
    const year = fecha.getFullYear()
    let m = ''
    let d = ''
    if(month < 10) {
      m = '0' + month
    }else{
      m = month.toString()
    }

    if(day < 10) {
      d = '0' + day
    }else{
      d = day.toString()
    }

    return `${d}/${m}/${year}`
  }

  const handleConfirmFecha = (date: Date) => {
    const da = formatDate(date)
    setFechaTarjeta(da)
    setIsFecha(false)
  };
  
  const InputsForm = () =>{
    const { submitForm } = useFormikContext()
    return (
      <>
        <InputItem>
          <TextInput 
            fieldName='numeroTarjeta' 
            placeholder='Número de Tarjeta'
            placeholderTextColor={theme.colors.textLight}
            keyboardType='numeric'
            maxLength={16}
          />
        </InputItem>

        <Between style={{marginBottom: theme.sizes.margin}} >
          <View style={[Base.w50]}>
            <TouchableOpacity onPress={()=> setIsFecha(true)}>
              <TextInput 
                fieldName='date' 
                placeholder='Fecha de validez'
                placeholderTextColor={theme.colors.textLight}
                keyboardType='number-pad'
                maxLength={10}
                editable = {false}
                value={fechaTarjeta}
              />
              
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={isFecha}
              mode="date"
              onCancel={() => setIsFecha(false)}
              onConfirm={(date)=> handleConfirmFecha(date)}
            />
          </View>
            
          <View style={[Base.w50]}>
            <TextInput 
              fieldName='code' 
              placeholder='CVC/CVV'
              placeholderTextColor={theme.colors.textLight}
              keyboardType='numeric'
              maxLength={3}
            />
          </View>
        </Between>

        <InputItem>
          <TextInput 
            fieldName='country' 
            placeholder={'País'}
            placeholderTextColor={theme.colors.textLight}
          />
        </InputItem>

        <ContainerTarjeta>
          <Image source={image.images.Suscribe2Visa}/>
          <Image source={image.images.Suscribe2MasterCard}/>
          <Image source={image.images.Suscribe2Paypal}/>
          <Image source={image.images.Suscribe2Ebay}/>
        </ContainerTarjeta>

        <Center>
          <ButtonPrimary onPress={submitForm} style={ButtonStyle.ButtonShadow}>
            <TextButtonPrimary>Próximo</TextButtonPrimary>
          </ButtonPrimary>
        </Center>
    </>
    )
  }

  const saveTarjeta = (x: Object) => {
    const usuario = JSON.parse(datosUser)
    let dataUserTarjeta = Object.assign(usuario, x)
    dataUserTarjeta = {... dataUserTarjeta, date: fechaTarjeta}
    console.log(dataUserTarjeta)
    navigation.navigate('Suscribe3', { datosUserTarjeta: dataUserTarjeta })
  }

  return (
    <ThemeProvider theme={ThemeLight}>
      <StatusBar backgroundColor="#fff" barStyle='dark-content'/>
      <ScrollView>
        <SafeAreaView>
          <Container style={[Base.between , {height: height}]}>
            <View>
              <HeaderNavigation>
                <HeaderBack onPress={()=> navigation.navigate('Suscribe1')}>
                  <ImagenBack source={image.images.Suscribe1ArrowLeft} />
                </HeaderBack>
              </HeaderNavigation>

              <HeaderTitle>Todo los campos son obligatorios</HeaderTitle>
              <Center>
                <Image source={image.images.Suscribe2Paso2} />
              </Center>

              <HeaderTarjeta>
                <HeaderTarjetaText>Registrar tarjeta</HeaderTarjetaText>
                <Row>
                  <Image source={image.images.Suscribe2TarjetaFrente} style={{marginRight: 10}} />
                  <Image source={image.images.Suscribe2TarjetaAtras} />
                </Row>
              </HeaderTarjeta>

              <W100>
                <Formik
                  validationSchema={ Yup.object({
                    numeroTarjeta: Yup
                      .string()
                      .min(16, 'El formato incorrecto')
                      .required('El nombre es requerido'),
                    code: Yup
                      .string()
                      .min(3, 'El codigo es incorrecto')
                      .required('El codigo es requerido'),
                    country: Yup
                      .string()
                      .required('El pais es requerido')
                  })}
                  initialValues={{ numeroTarjeta:'', code:'', country:''}}
                  onSubmit={x => saveTarjeta(x)}
                >
                  <InputsForm />
                </Formik>
                
              </W100>
            </View>
            <TextFooter />
          </Container>
        </SafeAreaView>
      </ScrollView>
    </ThemeProvider>
  )
}