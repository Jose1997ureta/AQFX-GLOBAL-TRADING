import React, { useState, useEffect } from 'react'
import { SafeAreaView, Animated, StyleSheet } from 'react-native'
import { HeaderNavigation, Loading, ListLive } from '../components'
import { images as image, theme } from '../constants'
import {  } from '../model/API_Noticias'
import { useStateValue } from './states/ThemeState'
import { 
  Base,
  Container,
  Row,
  HeaderBack,
  ImagenBack,
  PaddingContainer,
  W100,

  // LIVE
  DetalleCurso,
  DetalleHeader,
  TituloDetalleHeader,
  TitleProgress,
  ProgressContainer,
  // NumberProgress,
  Progress,
  // ProgressBackground,
  DetalleTeacher,
  DetalleTime

} from '../styles'

export const DetalleCursoScreen = ({ navigation }) => {

  const [state] = useStateValue();

  const [porcentage, setPorcentage] = useState(0)
  const animation = new Animated.Value(0);

  const parametro = 70;

  useEffect(() => {
    animation.addListener(({ value }) => {
      setPorcentage(parseInt(value, 10))
    });

    Animated.timing(animation, {
      toValue: parametro,
      duration: 1000,
      useNativeDriver: true,
      delay: 0
    }).start();

    return () => {
      animation.removeAllListeners();
    }
  }, [])

  return (
    <SafeAreaView style={{flex: 1}}>
      <DetalleCurso>
        <DetalleHeader>
          <PaddingContainer>
            <HeaderNavigation>
              <HeaderBack onPress={()=> navigation.navigate('Curso')}>
                <ImagenBack source={image.images.ArrowLeft} />
              </HeaderBack>
            </HeaderNavigation>
            <TituloDetalleHeader>Nombre del curso</TituloDetalleHeader>
            <TitleProgress>Progreso del curso: 0/0 contenidos</TitleProgress>
            <ProgressContainer>
              <Animated.Text style={styles.NumberProgress}>{porcentage}%</Animated.Text>
              <Progress>
                <Animated.View style={[styles.ProgressBackground, {width: `${porcentage}%`, backgroundColor: `${state.theme.progressCurso}`}]}></Animated.View>
              </Progress>
            </ProgressContainer>
            <Row style={Base.between}>
              <DetalleTeacher>Instruido por: Stephanie Speranza</DetalleTeacher>
              <DetalleTime>5 horas de contenido</DetalleTime>
            </Row>
          </PaddingContainer>
        </DetalleHeader>
        <Container>

        </Container>
      </DetalleCurso>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  NumberProgress: {
    color: "#fff",
    fontSize: theme.sizes.h6,
    lineHeight: 16,
    fontWeight: theme.weight.bold,
    marginRight: 10,
  },

  ProgressBackground: {
    borderRadius: 5,
    height: 6,
  }
})
