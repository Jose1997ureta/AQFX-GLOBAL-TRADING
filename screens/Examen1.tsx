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
  const [markes, setMarkes] = useState([])
  const [visibility, setVisibility] = useState(true)
  const idVideo = navigation.getParam("idVideo");
  const {loading,list} =  GET_QUESTIONARIO(idVideo);

  useEffect(() => {
    const getSession = async () => {
      const markers:any = await AsyncStorage.getItem('isPregunta');
      if(markers !== null){
        setVisibility(false);
      }

      setMarkes(markers);
    }

    getSession();
  })

  const handlerSeleccion = (examen:any, index:any) => {
    // setRpta(id)
    navigation.navigate("Examen2", {item: examen, index: index, countList: list.length, idVideo: idVideo})
    // console.log(examen)
  }

  // const handlerSubmit = () => {
  //   if(rpta != ""){
  //     navigation.navigate("Examen2", {id: rpta})
  //   }else{
  //     alert();
  //   }
  // }

  // console.log(list)

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
                <ListExamen key={examen.id} id={examen.id} title={examen.pregunta} index={id + 1} markes={markes} onPress={() => handlerSeleccion(examen, id)}  />
              ))}
            </Examen>
            {/* <Center>
              <ButtonPrimary onPress={()=> handlerSubmit()} style={ButtonStyle.ButtonShadow}>
                <TextButtonPrimary>Próximo</TextButtonPrimary>
              </ButtonPrimary>
            </Center> */}

            <ModalScreen visibility={visibility}>
              <ModalTextExamen>{'Mensaje motivacional :)'}</ModalTextExamen>
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