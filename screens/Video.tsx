import React, {useState} from 'react'
import { Dimensions, Animated, View, ScrollView, Text, StyleSheet, FlatList } from 'react-native'
import { HeaderNavigation, Loading, ListComentarios } from '../components'
import { images as image, theme } from '../constants'
import styled from 'styled-components/native'
import { Video } from 'expo-av'
import * as ScreenOrientation from 'expo-screen-orientation';
import { useStateValue } from './states/ThemeState'
var ScrollableTabView = require('react-native-scrollable-tab-view')
var ScrollableTabBar = require('react-native-scrollable-tab-view/ScrollableTabBar')
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

  // VIDEO
  Header,
  HeaderVideo,
  HeaderVideoTitle,
  VideoContainer,
  // TabContainer,
  // Tab,
  TabContent,
  TabContentDescription,
  TabContentDescripcionButton,
  TabContentDescripcionImage,
  TabContentDescripcionText,

} from '../styles'

// const width = Dimensions.get('window').height;

export const VideoScreen = ({ navigation }: any) => {
  const idVideo = navigation.getParam("idVideo");
  const rutaVideo = navigation.getParam("rutaVideo");
  const nameVideo = navigation.getParam("nameVideo");
  const descriptionVideo = navigation.getParam("descriptionVideo");
  const listIndex = navigation.getParam("listIndex");
  const index = navigation.getParam("index");
  let isButton = true;

  listIndex.map((el:any) => {
    if(el.index == index){
      isButton = false;
    }
  })

  const changeOrientation = async() => {
    const dim = Dimensions.get("screen")
    if(dim.height > dim.width){
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE
      );
    }else{
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT
      );
    }
  }


  const Comentarios = [
    {id: "1", titulo: "Nombre de la persona", imagen: "", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut.", like: 0},
    {id: "2", titulo: "Nombre de la persona", imagen: "", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut.", like: 12},
    {id: "3", titulo: "Nombre de la persona", imagen: "", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut.", like: 1},
    {id: "4", titulo: "Nombre de la persona", imagen: "", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut.", like: 5},
    {id: "5", titulo: "Nombre de la persona", imagen: "", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut.", like: 5},
    {id: "6", titulo: "Nombre de la persona", imagen: "", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut.", like: 5},
    {id: "7", titulo: "Nombre de la persona", imagen: "", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut.", like: 5},
    {id: "8", titulo: "Nombre de la persona", imagen: "", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut.", like: 5},
    {id: "9", titulo: "Nombre de la persona", imagen: "", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut.", like: 5},
  ]

  const ContentDescription = () => {
    return (
    <>
      <TabContentDescription>{descriptionVideo}</TabContentDescription>
      {
        isButton ? 
        <Center>
        <TabContentDescripcionButton style={Base.borderShadow} onPress={() => navigation.navigate("Examen1",{idVideo:idVideo})} underlayColor="#EEE">
          <Between>
            <TabContentDescripcionImage source={image.images.Puntero} />
            <TabContentDescripcionText>Presentar el examen</TabContentDescripcionText>
          </Between>
        </TabContentDescripcionButton>
      </Center> : null
      }
     </>
    )
  }

  return (
    <Vista>
      <Container>
        <Header>
          <HeaderVideo>
            <PaddingContainer>
              <HeaderNavigation>
                <HeaderBack onPress={() => navigation.goBack()}>
                  <ImagenBack source={image.images.ArrowLeft} />
                </HeaderBack>
              </HeaderNavigation>
              <HeaderVideoTitle>{nameVideo}</HeaderVideoTitle>
              <VideoContainer>
                <Video 
                  source={{uri: rutaVideo}} 
                  rate={1.0}
                  volume={1.0}
                  isMuted={false}
                  resizeMode="stretch"
                  shouldPlay={false}
                  isLooping={false}
                  useNativeControls={true}
                  style={{ width: '100%', height: 230, position: 'absolute', borderRadius: theme.sizes.radiusInput }}
                  onFullscreenUpdate={changeOrientation}
                  usePoster={true}
                  posterSource={image.images.Suscribe1Paso1}
                  posterStyle={{width: '100%', alignItems: 'center', justifyContent: 'center', height: '100%'}}
                />
              </VideoContainer>
            </PaddingContainer>
          </HeaderVideo>
        </Header>
        <Container>
        <ScrollableTabView
          renderTabBar={() => (
            <ScrollableTabBar
              tabStyle={styles.tabStyle}
            />
          )}
          tabBarTextStyle={styles.tabBarTextStyle}
          >
            <TabContent key='1' tabLabel='Descripcion'>
              <ContentDescription/>
            </TabContent>
            <Container key='2' tabLabel='Comentarios'>
              <FlatList
                data={Comentarios}
                keyExtractor={item => String(item.id)}
                renderItem={({item}) => <ListComentarios lista={item} />}
              />
            </Container>
          </ScrollableTabView>
        </Container>
      </Container>
    </Vista>
  )
}

// styles
const styles = StyleSheet.create({
  tabStyle: {
    width: '50%',
  },
 tabBarTextStyle: {
   fontSize: theme.sizes.h6,
   fontWeight: 'bold',
 },
});