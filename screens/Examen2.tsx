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
  ModalButtonExamen,
  ModalButtonTextExamen,


  ButtonPrimary,
  TextButtonPrimary,
  ButtonStyle,
  ModalTextExamen,
} from '../styles'

export const Examen2Screen = ({navigation}:any) => {
  const [state]:any = useStateValue();
  const [rpta, setRpta] = useState('')
  const [visibility, setVisibility] = useState(false);
  const [nameButton, setNameButton] = useState('Cerrar');
  const examen = navigation.getParam("item");
  const index = navigation.getParam("index");
  const countList = navigation.getParam("countList");

  if(examen.length <= 0){
    navigation.navigate('Examen1');
  }

  const handlerSeleccion = (id:string) => {
    setRpta(id)
  }
  
  const handlerSubmit = () => {
    if(rpta != ""){
      examen.map((el:any) => {
        if(rpta == el.id){
          if(el.verdadera){
            if(index == countList - 1){
              setNameButton('Finalizar')
            }
            setVisibility(true)
          }else{
            alert('bad');
          }
        }
      })
    }else{
      alert('No ha seleccionado una respuesta');
    }
  }

  const handlerFinally = () => {
    setVisibility(false)
    if(index == countList - 1 ){
      alert('finalizo');
    }else{
      navigation.goBack();
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
            <ExamenPaso1 source={state.theme.Paso2Examen} />
          </Center>
          <ExamenTitle>{examen.pregunta}</ExamenTitle>
          <Examen>
            {examen.map((item:any, id:any) => (
              <ListExamen key={item.id} id={item.id} title={item.respuesta} index={id + 1} marker={rpta} onPress={() => handlerSeleccion(item.id)} />
            ))}
          </Examen>
          <Center>
            <ButtonPrimary onPress={()=> handlerSubmit()} style={ButtonStyle.ButtonShadow}>
              <TextButtonPrimary>Finalizar</TextButtonPrimary>
            </ButtonPrimary>
          </Center>
          <ModalScreen visibility={visibility}>
            <ModalTextExamen>{'Felicidades :)'}</ModalTextExamen>
            <ModalButtonExamen onPress={() => handlerFinally()} underlayColor="#CCC">
              <ModalButtonTextExamen>{nameButton}</ModalButtonTextExamen>
            </ModalButtonExamen>
          </ModalScreen>
        </PaddingContainer>
      </Container>
    </Vista>
  )
} 