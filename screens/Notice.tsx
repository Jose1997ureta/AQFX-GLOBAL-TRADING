import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components'
import { HeaderNavigation, Loading } from '../components'
import { images as image, theme } from '../constants'
import { NoticeAllId } from '../model/API_Noticias'
import { 
  Container,
  Row,
  HeaderBack,
  ImagenBack,
  PaddingContainer,
  // NOTICE

  NoticeContainer,
  NoticeTitle,
  NoticeImageContainer,
  NoticeImage,
  NoticeSubtitle,
  NoticeDescription,
  NoticeLinkBlack,
  NoticeLink,

  // THEME
  ThemeLight,
  ThemeDark,
} from '../styles'

export const NoticeScreen =  ({navigation}) => {
  const idNoticia  = navigation.getParam('idNoticia');
  const { loading, list } = NoticeAllId(idNoticia)

  return (
    // <ThemeProvider theme={ThemeDark}>
    //   <StatusBar backgroundColor="#fff" barStyle='dark-content'/>
      <SafeAreaView style={{flex: 1}}>
      { loading ? 
        <Loading/> :
        <>
        <NoticeContainer>
          <PaddingContainer>
            <HeaderNavigation>
              <HeaderBack onPress={()=> navigation.navigate('Home')}>
                <ImagenBack source={image.images.ArrowLeft} />
              </HeaderBack>
            </HeaderNavigation>
            <NoticeTitle>Noticia</NoticeTitle>
          </PaddingContainer>
        </NoticeContainer>
        <Container>
          <NoticeImageContainer>
            <NoticeImage source={{uri: list.imagen}} />
          </NoticeImageContainer>
          <NoticeSubtitle>{list.titulo}</NoticeSubtitle>
          <NoticeDescription>{list.descripcion}</NoticeDescription>
          <Row>
            <NoticeLinkBlack>Continuar leyendo:</NoticeLinkBlack>
            <NoticeLink>{list.link}</NoticeLink>
          </Row>
        </Container>
        </>
      }
      </SafeAreaView>
    // </ThemeProvider>
  )
}