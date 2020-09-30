import React from 'react'
import { ScrollView } from 'react-native'
import { HeaderNavigation, Loading } from '../components'
import { images as image, theme } from '../constants'
import { NoticeAllId } from '../model/API'
import { 
  Vista,
  Container,
  Row,
  W100,
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
} from '../styles'


export const NoticeScreen =  ({navigation}: any) => {
  const idNoticia  = navigation.getParam('idNoticia');
  const { loading, list } = NoticeAllId(idNoticia)
  const lista:any = list;

  return (
    <Vista>
      <ScrollView>
        { loading ? 
        <Loading/> :
        <>
        <Container>
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
            <PaddingContainer>
              <NoticeImageContainer>
                <NoticeImage source={{uri: lista.imagen}} />
              </NoticeImageContainer>
              <NoticeSubtitle>{lista.titulo}</NoticeSubtitle>
              <NoticeDescription>{lista.descripcion}</NoticeDescription>
              <Row style={{marginBottom: theme.sizes.margin}}>
                <NoticeLinkBlack>Continuar leyendo:</NoticeLinkBlack>
                <NoticeLink>{lista.link}</NoticeLink>
              </Row>
            </PaddingContainer>
          </Container>
        </Container>
        </>
      }
      </ScrollView>
    </Vista>
  )
}