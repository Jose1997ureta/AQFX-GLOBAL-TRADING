import React, {useState} from 'react'
import { Dimensions, Animated, View, ScrollView, Text } from 'react-native'
import { HeaderNavigation, Loading, ListVideos } from '../components'
import { images as image, theme } from '../constants'
import styled from 'styled-components/native'
import { Video } from 'expo-av'
import * as ScreenOrientation from 'expo-screen-orientation';
import { useStateValue } from './states/ThemeState'
import { 
  Base,
  Container,
  Vista,
  Row,
  HeaderBack,
  ImagenBack,
  PaddingContainer,
  W100,

} from '../styles'

const width = Dimensions.get('window').height;

export const VideoScreen = ({ navigation }: any) => {
  const idVideo = navigation.getParam("idVideo");
  const [state]:any = useStateValue();
  const [active, setActive] = useState(0)
  const [xTabOne, setXTabOne] = useState(0)
  const [xTabTwo, setXTabTwo] = useState(0)
  const [translateX, setTranslateX] = useState(new Animated.Value(0))
  const [translateXTabOne, setTranslateXTabOne] = useState(new Animated.Value(0))
  const [translateXTabTwo, setTranslateXTabTwo] = useState(new Animated.Value(width))
  const [translateY, setTranslateY] = useState(-1000)
  
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

  const handlerSlide = (type:number) => {
    Animated.spring(translateX, {
      toValue: type,
      useNativeDriver: true,
    }).start();
    
    if(active === 0){
      Animated.parallel([
        Animated.spring(translateXTabOne, {
          toValue: 0,
          useNativeDriver: true,
        }).start(),
        Animated.spring(translateXTabTwo, {
          toValue: width,
          useNativeDriver: true,
        }).start()
      ]);
    }else{
      Animated.parallel([
        Animated.spring(translateXTabOne, {
          toValue: -width,
          useNativeDriver: true,
        }).start(),
        Animated.spring(translateXTabTwo, {
          toValue: 0,
          useNativeDriver: true,
        }).start()
    ]);
    }
  }

  const ContentDescription = () => {
    return (
      <TabContent>
       <TabContentDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus, consectetur adipiscing elit ut aliquam, purus sit amet luctus *consectetur adipiscing elit ut aliquam, purus sit amet luctu * aliquam, purus sit amet luctus</TabContentDescription>
      </TabContent>
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
          <TabContainer>
            <Animated.View 
              style={{
                position: "absolute",
                width: "50%",
                height: "100%",
                top: 0,
                left: 0,
                backgroundColor: "#FFF",
                transform: [
                  {
                    translateX
                  }
                ]
            }}
            />
            <Tab 
              onLayout={event => setXTabOne(event.nativeEvent.layout.x)}
              onPress={() => {
                setActive(0)
                handlerSlide(xTabOne)
              }}
            >
              <TabText style={{ 
                color: active === 1 ? "#FFF" : theme.colors.secondary
               }}
              >Descripción</TabText>
            </Tab>
            <Tab
              onLayout={event => setXTabTwo(event.nativeEvent.layout.x)}
              onPress={() => {
                setActive(1)
                handlerSlide(xTabTwo)
              }}
            >
              <TabText style={{ 
                color: active === 0 ? "#FFF" : theme.colors.secondary
               }}
              >Comentarios</TabText>
            </Tab>
          </TabContainer>
          <ScrollView>
            <Animated.View
              onLayout={(event:any) => setTranslateY(event.nativeEvent.layout.height)}
              style={{
                justifyContent: "center",
                alignItems: "center",
                transform: [
                    {
                        translateX: translateXTabOne
                    }
                ]
              }}
              > 
              {/* <ContentDescription /> */}
              <Text>Hi, I am a cute catafknaskfnaskfnlashl</Text>
            </Animated.View>
            <Animated.View
              style={{
                justifyContent: "center",
                alignItems: "center",
                transform: [
                  {
                    translateX: translateXTabTwo
                  },
                  {
                    translateY: -translateY
                  }
                ]
              }}
              > 
              {/* <Text>Hi, I am a cute catafknaskfnaskfnlashl</Text> */}
              <ContentDescription />
            </Animated.View>
          </ScrollView>
        </Container>
      </Container>
    </Vista>
  )
}


// styles
export const Header = styled.View`
  background-color: ${(props:any) => props.theme.fondo12};
`;

export const HeaderVideo = styled.View`
  background-color: ${theme.colors.primary};
  padding-bottom: 18px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  margin-bottom: ${theme.sizes.margin}px;
`;

export const HeaderVideoTitle = styled.Text`
  font-size: ${theme.sizes.h4}px;
  color: #FFF;
  line-height: 20px;
  font-weight: ${theme.weight.bold};
  margin-top: 10px;
`;

export const VideoContainer = styled.View`
  width: 100%;
  height: 230px;
  border-radius: ${theme.sizes.radiusInput}px;
  margin-bottom: ${theme.sizes.margin}px;
  margin-top: ${theme.sizes.margin}px;
  background-color: #eee;
`;

export const TabContainer = styled.View`
  flex-direction: row;
  background-color: ${theme.colors.primary};
  position: relative;
`;

export const Tab = styled.TouchableOpacity`
  width: 50%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const TabText = styled.Text`
  font-size: ${theme.sizes.h5}px;
  line-height: 17px;
  font-weight: ${theme.weight.bold};
`;

export const TabContent = styled.View`
  padding: 16px 20px;
`;

export const TabContentDescription = styled.Text`
  color: ${(props:any) => props.theme.fondo4};
  font-size: ${theme.sizes.h6}px;
  line-height: 16px;
`;