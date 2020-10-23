import React, {useState} from 'react'
import { View, Text, AsyncStorage, ActivityIndicator } from 'react-native'
import { HeaderNavigation, Loading, ListExamen, ModalScreen } from '../components'
import { images as image, theme } from '../constants'
import { useStateValue } from './states/ThemeState'
import { NavigationActions, StackActions } from 'react-navigation';
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
  const [textModal, setTextModal] = useState('Cerrar');
  const [isRpta, setIsRpta] = useState(false);
  const [isLoading,setIsLoading] = useState(false)

  const examen = navigation.getParam("item");
  const index = navigation.getParam("index");
  const countList = navigation.getParam("countList");
  const idVideo = navigation.getParam("idVideo");

  if(examen.respuestas.length <= 0){
    navigation.navigate('Examen1');
  }
  
  const handlerSeleccion = (id:string) => {
    setRpta(id)
  }
  
  const handlerSubmit = () => {
    if(rpta != ""){
      examen.respuestas.map((el:any) => {
        if(rpta == el.id){
          if(el.verdadera){
            setNameButton('Cerrar')

            setTextModal('Felicidades :)');
            setVisibility(true);
            setIsRpta(true)
          }else{
            setTextModal('La respuesta es incorrecta :(');
            setVisibility(true);
            setIsRpta(false)
          }
        }
      })
    }else{
      setTextModal('No ha seleccionado una respuesta');
      setVisibility(true);
      setIsRpta(false)
    }
  }

  const handlerFinally = async() => {
    setVisibility(false)
    if(isRpta){
      let isSession:any = await AsyncStorage.getItem('isPregunta');
      if(isSession != null){
        isSession = JSON.parse(isSession);
        isSession.push({id: examen.id });
      }else{
        isSession = [];
        isSession.push({id: examen.id });
      }

      await AsyncStorage.setItem('isPregunta',JSON.stringify(isSession))

      if(isSession.length == countList){
        handlerRegister();
      }else{
        navigation.navigate('Examen1', { idVideo: idVideo })
      }
    }
  }

  const handlerRegister = async () => {
    setIsLoading(true);
    const isLogin:any = await AsyncStorage.getItem("UserLogin");
    let datos = {fk_educacion: idVideo,fk_cliente: +isLogin }
    const response = await fetch('https://dev.azzinformatica.com/api/v1/educacion_cliente/registrar', 
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datos),
    })

    const rpta = await response.json()
    if(rpta.data != ''){
      await AsyncStorage.removeItem("isPregunta");
      setIsLoading(false)

      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Curso' })],
      });
      navigation.dispatch(resetAction);
    }else{
      alert(rpta.error)
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
            {examen.respuestas.map((item:any, id:any) => (
              <ListExamen key={item.id} id={item.id} title={item.respuesta} index={id + 1} marker2={rpta} onPress={() => handlerSeleccion(item.id)} />
            ))}
          </Examen>
          <Center>
            <ButtonPrimary onPress={()=> handlerSubmit()} style={ButtonStyle.ButtonShadow}>
              <TextButtonPrimary>Responder</TextButtonPrimary>
            </ButtonPrimary>
          </Center>
          {
            isLoading ? 
            <Center style={{marginTop: theme.sizes.margin * 2}}>
              <ActivityIndicator size='large' color={theme.colors.primary} />
            </Center>
            : null
          }

          <ModalScreen visibility={visibility}>
            <ModalTextExamen>{textModal}</ModalTextExamen>
            <ModalButtonExamen onPress={() => handlerFinally()} underlayColor="#CCC">
              <ModalButtonTextExamen>{nameButton}</ModalButtonTextExamen>
            </ModalButtonExamen>
            
          </ModalScreen>
        </PaddingContainer>
      </Container>
    </Vista>
  )
} 