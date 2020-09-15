import React, {useEffect} from "react";
import { View, StatusBar, ScrollView, SafeAreaView, ActivityIndicator } from 'react-native';
import { MaterialIcons }  from '@expo/vector-icons'
import { ThemeProvider } from 'styled-components'
import { HeaderNavigation, ListNotice } from '../components'
import { images as image, theme } from '../constants'
import { ListNoticeAll } from '../model/API_Noticias'

import { 
  Base,
  Container,
  Center,
  Row,
  W100,
  Between,
  
  // HOME
  TitleHome,
  PuntoRed,
  CardHome,
  CardHomeImage,
  CardHomeContent,
  CardHomeContentText,
  CardHomeContentView,
  CardHomeContentViewText,
  Separate,
  NoticeHomeContainer,
  NoticeHomeTitle,
  NoticeHomeTitleLine,

  // THEME
  ThemeLight,
  ThemeDark,
} from '../styles'

export default ({ navigation }) => {

  useEffect(() => {
    getNoticiasAll();
  }, [])
 
  const getNoticiasAll = async () => {
    // const co = await ListNoticeAll()
    // console.log(co);
  }

  return (
    <ThemeProvider theme={ThemeLight}>
      <StatusBar backgroundColor="#fff" barStyle='dark-content'/>
      <ScrollView>
        <SafeAreaView>
          <Container>

            <HeaderNavigation>
              <View></View>
            </HeaderNavigation>

            <Row>
              <TitleHome>En Vivo</TitleHome>
              <PuntoRed></PuntoRed>
            </Row>
         
            <Between style={{marginTop: theme.sizes.margin}}>
              <CardHome>
                <CardHomeImage source={image.images.HomeCard1}/>
                <CardHomeContent>
                  <CardHomeContentText>Título de la live...</CardHomeContentText>
                  <CardHomeContentView>
                    <MaterialIcons name='remove-red-eye' color='#fff'/>
                    <CardHomeContentViewText>0</CardHomeContentViewText>
                  </CardHomeContentView>
                </CardHomeContent>
              </CardHome>
              <CardHome>
                <CardHomeImage source={image.images.HomeCard2}/>
                <CardHomeContent>
                  <CardHomeContentText>Título de la live...</CardHomeContentText>
                  <CardHomeContentView>
                    <MaterialIcons name='remove-red-eye' color='#fff'/>
                    <CardHomeContentViewText>0</CardHomeContentViewText>
                  </CardHomeContentView>
                </CardHomeContent>
              </CardHome>
            </Between>

            <Center>
              <Separate/>
            </Center>
          </Container>

          <NoticeHomeContainer>
            <NoticeHomeTitle>Noticias</NoticeHomeTitle>
            <NoticeHomeTitleLine></NoticeHomeTitleLine>
            <ListNotice />
          </NoticeHomeContainer>
        </SafeAreaView>
      </ScrollView>
    </ThemeProvider>
  )
}