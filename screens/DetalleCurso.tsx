import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import { HeaderNavigation, Loading, ListVideos } from '../components'
import { images as image, theme } from '../constants'
// import {  } from '../model/API_Noticias'
import { useStateValue } from './states/ThemeState'
import { 
  Base,
  Vista,
  Container,
  Row,
  HeaderBack,
  ImagenBack,
  PaddingContainer,
  W100,
  
  // LIVE
  // DetalleCurso,
  DetalleHeader,
  TituloDetalleHeader,
  TitleProgress,
  ProgressContainer,
  Progress,
  ProgressBackground,
  NumberProgress,
  DetalleTeacher,
  DetalleTime,
  // CardVideoContainer,
  CardVideo,
  CardVideoTitle,
  CardVideoImage,
  CardVideoImageTime,
  CardVideoContent,
  CardVideoContentTitle,
  CardVideoContentDescription,
  CardVideoSeparate,

} from '../styles'

export const DetalleCursoScreen = ({ navigation }:any) => {
  const [state]:any = useStateValue();
  // const [porcentage, setPorcentage] = useState(0)
  // const animation = new Animated.Value(0);

  const parametro = 70;
  const videos = [
    {id: "1", titulo: "tema 1 ...", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus...", time: "00.00"},
    {id: "2", titulo: "tema 2 ...", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus...", time: "00.00"},
    {id: "3", titulo: "tema 3 ...", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus...", time: "00.00"},
    {id: "4", titulo: "tema 4 ...", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus...", time: "00.00"},
    {id: "5", titulo: "tema 5 ...", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus...", time: "00.00"},
    {id: "6", titulo: "tema 6 ...", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus...", time: "00.00"},
    {id: "7", titulo: "tema 7 ...", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus...", time: "00.00"},
    {id: "8", titulo: "tema 8 ...", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus...", time: "00.00"},
    {id: "9", titulo: "tema 9 ...", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus...", time: "00.00"},
    {id: "10", titulo: "tema 10 ...", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus...", time: "00.00"},
    {id: "11", titulo: "tema 11 ...", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus...", time: "00.00"},
    {id: "12", titulo: "tema 12 ...", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus...", time: "00.00"},
    {id: "13", titulo: "tema 13 ...", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus...", time: "00.00"},
    {id: "14", titulo: "tema 14 ...", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus...", time: "00.00"},
    {id: "15", titulo: "tema 15 ...", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus...", time: "00.00"},
  ]

  // useEffect(() => {
  //   animation.addListener(({ value }:any) => {
  //     setPorcentage(parseInt(value, 10))
  //   });

  //   Animated.timing(animation, {
  //     toValue: parametro,
  //     duration: 200,
  //     useNativeDriver: true,
  //     delay: 0
  //   }).start();

  //   return () => {
  //     animation.removeAllListeners();
  //   }
  // }, [])

  const ContinueVideo = () => {
    return (
      <>
      <CardVideoTitle>Continuar viendo</CardVideoTitle>
      <CardVideo style={[Base.borderShadow, {marginBottom: 14}]} activeOpacity={0.4} underlayColor="#eee" onPress={() => alert()}>
        <>
        <CardVideoImage>
          <CardVideoImageTime>00:00</CardVideoImageTime>
        </CardVideoImage>
        <CardVideoContent>
          <CardVideoContentTitle>Tema...</CardVideoContentTitle>
          <CardVideoContentDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus...</CardVideoContentDescription>
        </CardVideoContent>
        </>
      </CardVideo>
      </>
    )
  }

  return (
    <Vista>
      <Container>
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
              <NumberProgress>{parametro}%</NumberProgress>
              <Progress>
                <ProgressBackground style={{width: `${parametro}%`}}></ProgressBackground>
              </Progress>
            </ProgressContainer>
            <Row style={Base.between}>
              <DetalleTeacher>Instruido por: Stephanie Speranza</DetalleTeacher>
              <DetalleTime>5 horas de contenido</DetalleTime>
            </Row>
          </PaddingContainer>
        </DetalleHeader>
        <PaddingContainer>
          <ContinueVideo />
        </PaddingContainer>
        <CardVideoSeparate />
        <FlatList
          data={videos}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <ListVideos lista={item} onPress={() => navigation.navigate('Video', {idVideo: item.id})} />}
        />
      </Container>
    </Vista>
  )
}

const styles = StyleSheet.create({
  // NumberProgress: {
  //   color: "#fff",
  //   fontSize: theme.sizes.h6,
  //   lineHeight: 16,
  //   fontWeight: theme.weight.bold,
  //   marginRight: 10,
  // },

  ProgressBackground: {
    borderRadius: 5,
    height: 6,
  },

  // CardVideoContainer: {
  //   width: "100%",
  //   paddingHorizontal: 20,
  // },
})
