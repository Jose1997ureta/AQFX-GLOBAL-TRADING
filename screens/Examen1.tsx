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
  ModalTextExamen,

  ModalButtonExamen,
  ModalButtonTextExamen,

  ButtonStyle,
  ButtonPrimary,
  TextButtonPrimary,
} from '../styles'
import { ScrollView } from 'react-native-gesture-handler'

export const Examen1Screen = ({navigation}:any) => {
  const [state]:any = useStateValue()
  const [rpta, setRpta] = useState('')
  const [visibility, setVisibility] = useState(true)

  const Examens = [
    {id: "1", letter: "A", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ipsum dolor sit amet", rpta: false},
    {id: "2", letter: "B", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ipsum dolor sit amet", rpta: false},
    {id: "3", letter: "C", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ipsum dolor sit amet", rpta: true},
  ]

  const handlerSeleccion = (id:string) => {
    setRpta(id)
  }

  const handlerSubmit = () => {
    if(rpta != ""){
      navigation.navigate("Examen2", {id: rpta})
    }else{
      alert();
    }
  }

  return (
    <Vista>
      <Container>
        <PaddingContainer>
          <HeaderNavigation>
            <View></View>
          </HeaderNavigation>
          <Center>
            <ExamenPaso1 source={state.theme.Paso1Examen} />
          </Center>
          <ExamenTitle>¿Lorem ipsum dolor sit amet, consectetur adipiscing elit ut?</ExamenTitle>
          <Examen>
            {Examens.map((examen:any) => (
              <ListExamen key={examen.id} lista={examen} marker={rpta} onPress={() => handlerSeleccion(examen.id)} />
            ))}
          </Examen>
          <Center>
            <ButtonPrimary onPress={()=> handlerSubmit()} style={ButtonStyle.ButtonShadow}>
              <TextButtonPrimary>Próximo</TextButtonPrimary>
            </ButtonPrimary>
          </Center>

          <ModalScreen visibility={visibility}>
            {/* <ScrollView style={{backgroundColor: 'blue'}}>
              <Center style={{justifyContent:'center' ,backgroundColor: 'red', flex: 1, height: '100%'}}> */}
              <ModalTextExamen>{'Mensaje motivacional :)'}</ModalTextExamen>
              {/* </Center>
            </ScrollView> */}
            <ModalButtonExamen onPress={() => setVisibility(false)} underlayColor="#FFF">
              <ModalButtonTextExamen>Comenzar</ModalButtonTextExamen>
            </ModalButtonExamen>
          </ModalScreen>
        </PaddingContainer>
      </Container>
    </Vista>
  )
} 