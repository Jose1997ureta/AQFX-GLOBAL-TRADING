import React from 'react'
import { Dimensions } from 'react-native'
import { theme, images as image } from '../constants'
import { Video } from 'expo-av'
import * as ScreenOrientation from 'expo-screen-orientation';
import {
  PaddingContainer,
  Row,
  // lIVE 2
  LiveItem,
  LiveItemHeaderContainer,
  LiveItemHeader,
  LiveItemHeaderTitle,
  LiveItemPuntoRed,
  LiveItemImageContainer,
  LiveItemSubtitleContainer,
  LiveItemSubtitle,
  LiveItemDescriptionContainer,
  LiveItemDescription,
  LiveItemClave,
  LiveItemSeparador,

} from '../styles'

export const List2Live = ({lista}: any) => {
  let play = false;
  lista.id == 4 ?  play = true: play = false
  
  const changeOrientation = async() => {
    const dim = Dimensions.get("screen")
    if(dim.height > dim.width){
      console.log("portrait")
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE
      );
    }else{
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT
      );
      console.log("landscape")
    }
  }

  return (
    <>
    <LiveItem>
      <LiveItemHeaderContainer>
        <LiveItemHeader>
          <PaddingContainer>
            <Row style={{marginTop: theme.sizes.margin}}>
              <LiveItemHeaderTitle>{lista.titulo}</LiveItemHeaderTitle>
              <LiveItemPuntoRed/>
            </Row>
            <LiveItemImageContainer>
              <Video 
                source={{uri: `${lista.video}`}} 
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="stretch"
                shouldPlay={play}
                isLooping={false}
                useNativeControls={true}
                style={{ width: '100%', height: 230, position: 'absolute', borderRadius: theme.sizes.radiusInput }}
                onFullscreenUpdate={changeOrientation}
                usePoster={true}
                posterSource={image.images.Suscribe1Paso1}
                posterStyle={{width: '100%', alignItems: 'center', justifyContent: 'center', flex: 1, height: '100%'}}
              />
            </LiveItemImageContainer>
          </PaddingContainer>
        </LiveItemHeader>
        <LiveItemSubtitleContainer>
          <LiveItemSubtitle>Descripción</LiveItemSubtitle>
        </LiveItemSubtitleContainer>
      </LiveItemHeaderContainer>
      <LiveItemDescriptionContainer>
        <LiveItemDescription>{lista.descripcion}</LiveItemDescription>
        <LiveItemClave>Fecha Presentación: {lista.fecha_presentacion}</LiveItemClave>
      </LiveItemDescriptionContainer>
    </LiveItem>
    <LiveItemSeparador /> 
    </>
  )
}