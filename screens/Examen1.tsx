import React, {useState, useEffect} from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import { HeaderNavigation, Loading, ListExamen, ModalScreen } from '../components'
import { images as image, theme } from '../constants'
import { useStateValue } from './states/ThemeState'
import { GET_QUESTIONARIO } from '../model/API'
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
  // const [listData, setListData] = useState([]);
  const [visibility, setVisibility] = useState(true)
  const idVideo = navigation.getParam("idVideo");
  const {loading,list} =  GET_QUESTIONARIO(idVideo);


  const handlerSeleccion = (id:string, examen:any, index:any) => {
    setRpta(id)
    navigation.navigate("Examen2", {item: examen.respuestas, index: index, countList: list.length })
    // console.log(examen)
  }

  // const handlerSubmit = () => {
  //   if(rpta != ""){
  //     navigation.navigate("Examen2", {id: rpta})
  //   }else{
  //     alert();
  //   }
  // }

  return (
    <Vista>
      <ScrollView>
      { 
      loading ? 
      <Loading/> :
        <Container>
          <PaddingContainer>
            <HeaderNavigation>
              <View></View>
            </HeaderNavigation>
            <Center>
              <ExamenPaso1 source={state.theme.Paso1Examen} />
            </Center>
            <ExamenTitle>Cuestionario</ExamenTitle>
            <Examen>
              {list.map((examen:any, id) => (
                <ListExamen key={examen.id} id={examen.id} title={examen.pregunta} index={id + 1} marker={rpta} onPress={() => handlerSeleccion(examen.id, examen ,id)} />
              ))}
            </Examen>
            {/* <Center>
              <ButtonPrimary onPress={()=> handlerSubmit()} style={ButtonStyle.ButtonShadow}>
                <TextButtonPrimary>Próximo</TextButtonPrimary>
              </ButtonPrimary>
            </Center> */}

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
      }
      </ScrollView>
    </Vista>
  )
} 