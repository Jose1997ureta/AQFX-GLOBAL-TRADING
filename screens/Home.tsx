import React, {useEffect} from "react";
import { View, StatusBar, SafeAreaView, ActivityIndicator, FlatList, Dimensions, ScrollView, VirtualizedList } from 'react-native';
import { MaterialIcons }  from '@expo/vector-icons'
import { ThemeProvider } from 'styled-components'
import { HeaderNavigation, ListNotice, Loading } from '../components'
import { images as image, theme } from '../constants'
import { NoticeAll } from '../model/API_Noticias'

import { 
  Base,
  Container,
  Center,
  Row,
  W100,
  Between,
  ScrollContainer,
  
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

const height = Dimensions.get('window').height;

export default ({ navigation }) => {

  const {loading, list} = NoticeAll();

  return (
    <ThemeProvider theme={ThemeLight}>
      <StatusBar backgroundColor="#fff" barStyle='dark-content'/>
      <SafeAreaView style={{flex: 1}}>
        <ScrollView>
          { loading ? 
          <Loading /> :
          <>
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
            { list.map(lista => (
              <ListNotice lista={lista} onPress={()=> navigation.navigate('Notice',{idNoticia: lista.id})}/>
            ))}
          </NoticeHomeContainer>
          </>
          }
        </ScrollView>
      </SafeAreaView>
    </ThemeProvider>
  )
}