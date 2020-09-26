import React from "react";
import { View, SafeAreaView, Dimensions, ScrollView } from 'react-native';
import { MaterialIcons }  from '@expo/vector-icons'
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
} from '../styles'

export const HomeScreen = ({ navigation }) => {
  const {loading, list} = NoticeAll();

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        { loading ? 
        <Loading /> :
        <>
        <Container>
          <HeaderNavigation>
            <View></View>
          </HeaderNavigation>

          <Row style={{marginTop: theme.sizes.margin}}>
            <TitleHome>En Vivo</TitleHome>
            <PuntoRed></PuntoRed>
          </Row>
          <Between style={{marginTop: theme.sizes.margin}}>
            <CardHome onPress={() => navigation.navigate('Live')}>
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
            <ListNotice key={lista.id} lista={lista} navigation={navigation}/>
          ))}
        </NoticeHomeContainer>
        </>
        }
      </ScrollView>
    </SafeAreaView>
  )
}