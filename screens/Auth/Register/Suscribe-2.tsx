import React, { useState } from "react";
import { View, Image, TouchableOpacity, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { Formik, useFormikContext } from 'formik'
import DateTimePickerModal  from 'react-native-modal-datetime-picker'
import * as Yup from 'yup'

import { images as image, theme} from '../../../constants'
import { TextInput, HeaderNavigation, TextFooter } from '../../../components'
import { useStateValue } from '../../states/ThemeState'
import { 
  Base,
  Container,
  PaddingContainer,
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

} from '../../../styles'

const height = Dimensions.get('window').height

export const Suscribe2Screen =  ({ navigation }: any) => {
  const [state]: any = useStateValue();
  const datosUser = navigation.getParam('datosUsuario')
  const [fechaTarjeta, setFechaTarjeta] = useState('')
  const [isFecha, setIsFecha] = useState(false)

  const handleConfirmFecha = (date: Date) => {
    const da = theme.getFormatDate(date)
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
            // value='4242424242424242'
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
                // value='31/10/2020'
                
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
              // value='123'
            />
          </View>
        </Between>

        <InputItem>
          <TextInput 
            fieldName='country' 
            placeholder={'País'}
            placeholderTextColor={theme.colors.textLight}
            // value='Peru'
          />
        </InputItem>

        <ContainerTarjeta>
          <Image source={image.images.Suscribe2Visa}/>
          <Image source={image.images.Suscribe2MasterCard}/>
          <Image source={image.images.Suscribe2Paypal}/>
          <Image source={image.images.Suscribe2Ebay}/>
        </ContainerTarjeta>

        <Center>
          <ButtonPrimary onPress={submitForm} style={ButtonStyle.ButtonShadow} underlayColor={theme.colors.primary}>
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
    <SafeAreaView>
      <ScrollView>
        <Container>
          <PaddingContainer style={[{height: height},Base.between]}>
            <View>
              <HeaderNavigation>
                <HeaderBack onPress={()=> navigation.navigate('Suscribe1')}>
                  <ImagenBack source={image.images.Suscribe1ArrowLeft} />
                </HeaderBack>
              </HeaderNavigation>

              <HeaderTitle>Todo los campos son obligatorios</HeaderTitle>
              <Center>
                <Image source={state.theme.registerPaso2} />
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
          </PaddingContainer>
        </Container>
      </ScrollView>
    </SafeAreaView>
  )
}