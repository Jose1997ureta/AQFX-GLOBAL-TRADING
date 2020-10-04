import React, {useState} from 'react'
import { View, Text } from 'react-native'
import { HeaderNavigation, Loading, ListExamen, ModalScreen } from '../components'
import { images as image, theme } from '../constants'
import { useStateValue } from './states/ThemeState'
import {
  Base,
  Vista,
  Container,
  Row,
  Between,
  Center,
  HeaderBack,
  ImagenBack,
  PaddingContainer,
  W100,

  ExamenPaso1,
  ExamenTitle,
  Examen,

  ButtonPrimary,
  TextButtonPrimary,
  ButtonStyle,
  ModalText,
} from '../styles'

export const Examen2Screen = ({navigation}:any) => {
  const [state]:any = useStateValue();
  const [rpta, setRpta] = useState('')
  const [visibility, setVisibility] = useState(false);
  const pregunta1 = navigation.getParam("id");

  const Examens = [
    {id: "4", letter: "A", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ipsum dolor sit amet", rpta: true},
    {id: "5", letter: "B", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ipsum dolor sit amet", rpta: false},
    {id: "6", letter: "C", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ipsum dolor sit amet", rpta: false},
  ]

  const handlerSeleccion = (id:string) => {
    setRpta(id)
  }
  
  const handlerSubmit = () => {
    const rpts = {pregunta1: pregunta1, pregunta2: rpta };
    setVisibility(true);
  }

  return (
    <Vista>
      <Container>
        <PaddingContainer>
          <HeaderNavigation>
            <View></View>
          </HeaderNavigation>
          <Center>
            <ExamenPaso1 source={state.theme.Paso2Examen} />
          </Center>
          <ExamenTitle>¿Lorem ipsum dolorjsuhuhbuibiguib sit amet, consectetur adipiscing elit ut?</ExamenTitle>
          <Examen>
            {Examens.map((examen:any) => (
              <ListExamen key={examen.id} lista={examen} marker={rpta} onPress={() => handlerSeleccion(examen.id)} />
            ))}
          </Examen>
          <Center>
            <ButtonPrimary onPress={()=> handlerSubmit()} style={ButtonStyle.ButtonShadow}>
              <TextButtonPrimary>Finalizar</TextButtonPrimary>
            </ButtonPrimary>
          </Center>
          <ModalScreen visibility={visibility}>
            <ModalText>Felicidades :)</ModalText>
            
          </ModalScreen>
        </PaddingContainer>
      </Container>
    </Vista>
  )
} 