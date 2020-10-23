import React, { useState } from 'react'
import { StyleSheet, FlatList, AsyncStorage } from 'react-native'
import { HeaderNavigation, Loading, ListVideos } from '../components'
import { images as image, theme } from '../constants'
import { GET_VIDEOS,GET_CURSOS_INDEX } from '../model/API'
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

export const DetalleCursoScreen = ({ navigation, }:any) => {
  const [state]:any = useStateValue();
  // const [newList, setNewList] = useState([])
  const idCurso = navigation.getParam("idCurso");
  const profesor = navigation.getParam("profesor");
  const time = navigation.getParam("time");
  const nameCurso = navigation.getParam("nameCurso");
  const porcentaje = navigation.getParam("porcentaje");
  const {loading, list} = GET_VIDEOS(idCurso);
  const { listIndex } = GET_CURSOS_INDEX(idCurso);
  let newArray:any = [];

  list.map((item:any) => {
    let index1 = item.index;
    if(listIndex.length > 0){
      let number = listIndex.length;
      if(index1 < number){
        item = {...item, active: 1 }
      }else if(index1 == number){
        item = {...item, active: 1 }
      }
    }else{
      if(index1 == 0){
        item = {...item,active: 1};
      }else{
        item = {...item,active:0};
      }
    }
    newArray.push(item)
  })

  // console.log(newArray)

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
      { 
      loading ? 
      <Loading/> :
      <Container>
        <DetalleHeader>
          <PaddingContainer>
            <HeaderNavigation>
              <HeaderBack onPress={()=> navigation.navigate('Curso')}>
                <ImagenBack source={image.images.ArrowLeft} />
              </HeaderBack>
            </HeaderNavigation>
            <TituloDetalleHeader>{nameCurso}</TituloDetalleHeader>
            <TitleProgress>Progreso del curso: 0/0 contenidos</TitleProgress>
            <ProgressContainer>
              <NumberProgress>{porcentaje}%</NumberProgress>
              <Progress>
                <ProgressBackground style={{width: `${porcentaje}%`}}></ProgressBackground>
              </Progress>
            </ProgressContainer>
            <Row style={Base.between}>
              <DetalleTeacher>Instruido por: {profesor}</DetalleTeacher>
              <DetalleTime>{time} horas de contenido</DetalleTime>
            </Row>
          </PaddingContainer>
        </DetalleHeader>
        <PaddingContainer>
          <ContinueVideo />
        </PaddingContainer>
        <CardVideoSeparate />
        <FlatList
          data={newArray}
          keyExtractor={(item:any) => String(item.id)}
          renderItem={({ item }:any) => <ListVideos lista={item} onPress={() => navigation.navigate('Video', { idVideo: item.id, rutaVideo: item.video, descriptionVideo: item.descripcion, listIndex: listIndex, index: item.index, nameVideo: item.titulo})} /> }
        />
      </Container>
      }
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
