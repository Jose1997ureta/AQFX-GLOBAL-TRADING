import React, { useState } from "react";
import { View, Image, TouchableOpacity, Text, SafeAreaView, ScrollView, Dimensions, StatusBar } from 'react-native';

import { RegisterStyle, Base } from '../../../styles'
import { images, theme} from '../../../constants'
import { HeaderNavigation, TextFooter, Button } from '../../../components'

const height = Dimensions.get('window').height

export const Suscribe3Screen =  ({ navigation }) => {
  const datosUsuario = navigation.getParam('datosUserTarjeta')
  const [montoSuscripcion, setMontoSuscripcion] = useState('2000')

  const saveTarjeta = () => {
    const datosSubcripcion = {...datosUsuario, montoSub: montoSuscripcion}
    console.log(datosSubcripcion)
    navigation.navigate('Screens')
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
              {/* PASO 3 */}
              <Text style={RegisterStyle.headerTitle}>Un pasó para tu futuro</Text>
              <View style={Base.alignItemsCenter} >
                <Image source={images.images.Suscribe3Paso3} />
              </View>
              {/* END PASO 3 */}
              {/* TITLE MONTO */}
              <Text style={[Base.textBold, {fontSize: theme.sizes.h4, marginTop: 37, marginBottom: theme.sizes.margin * 2}]}>Monto a cobrar (por mes)</Text>
              {/* EDND TITLE MONTO */}
              {/* CARD MONTO */}
              <View style={RegisterStyle.cardContainer}>
                <View style={[Base.row, Base.between]}>
                  <Text style={RegisterStyle.cardText}>Monto:</Text>
                  <Text style={RegisterStyle.cardMonto}>${montoSuscripcion}</Text>
                </View>
              </View>
              {/* END CARD MONTO */}
              {/* BOTONES */}
              <View style={[Base.alignItemsCenter]}>
                <View style={{marginBottom: theme.sizes.margin}}>
                  <Button onPress={()=> saveTarjeta()}  type='primary'  text='Susbrirse'/>
                </View>
                <Button onPress={()=> navigation.navigate('Login')}  type='secondary'  text='Cancelar'/>
              </View>
              {/* END BOTONES */}
            </View>
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