import React, {useEffect} from "react";
import { View, ScrollView, AsyncStorage } from 'react-native';
import { MaterialIcons }  from '@expo/vector-icons'
import { HeaderNavigation, ListNotice, Loading } from '../components'
import { images as image, theme } from '../constants'
import { NoticeAll } from '../model/API'


import { 
  Base,
  Vista,
  Container,
  PaddingContainer,
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

export const HomeScreen = ({ navigation }: any) => {
  const {loading, list} = NoticeAll();
  // useEffect( () => {
  //   d();
  // })
  
  // const d = async() => {
    
  //   await AsyncStorage.removeItem("UserLogin")
  // }
  return (
    <Vista>
      <ScrollView>
        { loading ? 
        <Loading /> :
        <>
        <Container>
          <PaddingContainer>
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
              <CardHome onPress={() => navigation.navigate('Live2')}>
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
          </PaddingContainer>
        </Container>
    
        <NoticeHomeContainer>
          <NoticeHomeTitle>Noticias</NoticeHomeTitle>
          <NoticeHomeTitleLine></NoticeHomeTitleLine>
          { list.map((lista:any) => (
            <ListNotice key={String(lista.id)} lista={lista} navigation={navigation}/>
          ))}
        </NoticeHomeContainer>
        </>
        }
      </ScrollView>
    </Vista>
  )
}