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
  TabContainer,
  Tab,
  TabContent,
  TabContentDescription,
  TabContentDescripcionVideo,
  CardComentario,

} from '../styles'

// const width = Dimensions.get('window').height;

export const VideoScreen = ({ navigation }: any) => {
  const idVideo = navigation.getParam("idVideo");
  // const [state]:any = useStateValue();
  // const [active, setActive] = useState(0)
  // const [xTabOne, setXTabOne] = useState(0)
  // const [xTabTwo, setXTabTwo] = useState(0)
  // const [translateX, setTranslateX] = useState(new Animated.Value(0))
  // const [translateXTabOne, setTranslateXTabOne] = useState(new Animated.Value(0))
  // const [translateXTabTwo, setTranslateXTabTwo] = useState(new Animated.Value(width))
  // const [translateY, setTranslateY] = useState(-1000)
  
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

  // const handlerSlide = (type:number) => {
  //   Animated.spring(translateX, {
  //     toValue: type,
  //     useNativeDriver: true,
  //   }).start();
    
  //   if(active === 0){
  //     Animated.parallel([
  //       Animated.spring(translateXTabOne, {
  //         toValue: 0,
  //         useNativeDriver: true,
  //       }).start(),
  //       Animated.spring(translateXTabTwo, {
  //         toValue: width,
  //         useNativeDriver: true,
  //       }).start()
  //     ]);
  //   }else{
  //     Animated.parallel([
  //       Animated.spring(translateXTabOne, {
  //         toValue: -width,
  //         useNativeDriver: true,
  //       }).start(),
  //       Animated.spring(translateXTabTwo, {
  //         toValue: 0,
  //         useNativeDriver: true,
  //       }).start()
  //   ]);
  //   }
  // }

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
      <TabContentDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus, consectetur adipiscing elit ut aliquam, purus sit amet luctus *consectetur adipiscing elit ut aliquam, purus sit amet luctu * aliquam, purus sit amet luctus</TabContentDescription>
      <Center>
        <TabContentDescripcionVideo source={image.images.Video1} />
      </Center>
     </>
    )
  }

  const ContentComentarios = () => {
    return (
      <Container>
        <CardComentario></CardComentario>
      </Container>
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
              <HeaderVideoTitle>Tema del video</HeaderVideoTitle>
              <VideoContainer>
                <Video 
                  source={{uri: `https://aqfx-upload.s3.us-east-2.amazonaws.com/public/a4910db2ce1abc9050371710c657b2f3-3_hola.mp4`}} 
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