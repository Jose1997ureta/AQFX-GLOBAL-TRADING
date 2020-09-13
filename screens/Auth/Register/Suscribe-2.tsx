import React, { useState } from "react";
import { View, Image, TouchableOpacity, Text, SafeAreaView, ScrollView, Dimensions, StatusBar } from 'react-native';
import { Formik, useFormikContext } from 'formik'
import DateTimePickerModal  from 'react-native-modal-datetime-picker'
import * as Yup from 'yup'

import { RegisterStyle, InputStyle, Base } from '../../../styles'
import { images, theme} from '../../../constants'
import { Input, Button, HeaderNavigation, TextFooter } from '../../../components'

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
        <View style={[Base.w100, {marginBottom: theme.sizes.margin}]}>
          <Input 
            fieldName='numeroTarjeta' 
            placeholder='Número de Tarjeta'
            placeholderTextColor={theme.colors.textLight}
            style={[InputStyle.inputItem]}
            keyboardType='numeric'
            maxLength={16}
          />
        </View>

        <View style={[Base.row, Base.between, Base.w100, {marginBottom: theme.sizes.margin}]} >
          <View style={[Base.w50]}>
            <TouchableOpacity onPress={()=> setIsFecha(true)}>
              <Input 
                fieldName='date' 
                placeholder='Fecha de validez'
                placeholderTextColor={theme.colors.textLight}
                style={[InputStyle.inputItem,Base.w100]}
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
            <Input 
              fieldName='code' 
              placeholder='CVC/CVV'
              placeholderTextColor={theme.colors.textLight}
              style={[InputStyle.inputItem,Base.w100]}
              keyboardType='numeric'
              maxLength={3}
            />
          </View>
        </View>

        <View style={[Base.w100, {marginBottom: theme.sizes.margin}]}>
          <Input 
            fieldName='country' 
            placeholder={'País'}
            placeholderTextColor={theme.colors.textLight}
            style={[InputStyle.inputItem, {marginBottom: theme.sizes.margin}]}
          />
        </View>

        <View style={[Base.row,Base.w100, Base.justifyAround, {marginBottom: 25}]}>
          <Image source={images.images.Suscribe2Visa}/>
          <Image source={images.images.Suscribe2MasterCard}/>
          <Image source={images.images.Suscribe2Paypal}/>
          <Image source={images.images.Suscribe2Ebay}/>
        </View>

        <Button onPress={ submitForm } type='primary' text='Próximo'/>
    </>
    )
  }

  const saveTarjeta = (x: Object) => {
    const usuario = JSON.parse(datosUser)
    let dataUserTarjeta = Object.assign(usuario, x)
    dataUserTarjeta = {... dataUserTarjeta, date: fechaTarjeta}
    // console.log(dataUserTarjeta)
    navigation.navigate('Suscribe3', { datosUserTarjeta: dataUserTarjeta })
  }

  return (
    <View style={RegisterStyle.container}>
      <StatusBar backgroundColor="#fff" barStyle='dark-content'/>
      <ScrollView>
        <SafeAreaView>
          <View style={[Base.viewContainer, Base.between , {height: height}]}>
            <View>
              {/* HEADER */}
              <HeaderNavigation>
                <TouchableOpacity onPress={()=> navigation.navigate('Suscribe1')}>
                  <Image source={images.images.Suscribe1ArrowLeft} style={RegisterStyle.back} />
                </TouchableOpacity>
              </HeaderNavigation>
              {/* END HEADER */}
              {/* PASO 2 */}
              <Text style={RegisterStyle.headerTitle}>Todo los campos son obligatorios</Text>
              <View style={Base.alignItemsCenter} >
                <Image source={images.images.Suscribe2Paso2} />
              </View>
              {/* END PASO 2 */}
              {/* TITLE TARJETAS */}
              <View style={[Base.row, Base.w100, Base.between, {marginTop: 37, marginBottom: theme.sizes.margin * 2}]}>
                <Text style={[Base.textBold, {fontSize: theme.sizes.h4}]}>Registrar tarjeta</Text>
                <View style={Base.row}>
                  <Image source={images.images.Suscribe2TarjetaFrente} style={{marginRight: 10}} />
                  <Image source={images.images.Suscribe2TarjetaAtras} />
                </View>
              </View>
              {/* END TITLE TARJETAS */}
              {/* FORM */}
              <View style={InputStyle.inputContainer}>
                <Formik
                  validationSchema={ Yup.object({
                    numeroTarjeta: Yup
                      .string()
                      .min(16, 'El formato incorrecto')
                      .required('El nombre es requerido'),
                    // date: Yup
                    //   .string(),
                    //   // .required('Fecha requerido'),
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
                
              </View>
            </View>
            {/* END FORM */}
            {/* TEXT FOOTER */}
            {/* <View style={{flex: 1, justifyContent: 'flex-end'}}> */}
              <TextFooter />
            {/* </View> */}
            {/* END TEXT FOOTER */}
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  )
}