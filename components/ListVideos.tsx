import React, { useState } from 'react'
import { Video } from 'expo-av'
import { theme, images as image } from '../constants'
import { 
  Base,
  PaddingContainer,
  CardVideo, 
  CardVideoImage,
  CardVideoImageTime,
  CardVideoContent,
  CardVideoContentTitle,
  CardVideoContentDescription,
 } from '../styles'

export const ListVideos = ({ lista, onPress }: any) => {
  return (
    <PaddingContainer style={{marginTop: 10}} >
      <CardVideo 
        style={[Base.borderShadow, {opacity: lista.active == 0 ? 0.7: 1}]} 
        activeOpacity={0.4} 
        underlayColor="#eee" 
        onPress={onPress} 
        disabled={lista.active == 0 ? true : false}
        >
        <>
        <CardVideoImage>
          <Video 
            source={{uri: `${lista.video}`}} 
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="stretch"
            shouldPlay={false}
            isLooping={false}
            useNativeControls={false}
            style={{ width: '100%', height: '100%', position: 'absolute', borderRadius: theme.sizes.radiusInput }}
            usePoster={true}
            posterSource={image.images.Suscribe1Paso1}
            posterStyle={{width: '100%', alignItems: 'center', justifyContent: 'center', flex: 1, height: '100%'}}
          />
          {/* <CardVideoImageTime>{lista.time}</CardVideoImageTime> */}
        </CardVideoImage>
        <CardVideoContent>
          <CardVideoContentTitle>{lista.titulo}</CardVideoContentTitle>
          <CardVideoContentDescription>{lista.descripcion}</CardVideoContentDescription>
        </CardVideoContent>
        </>
      </CardVideo>
    </PaddingContainer>
  )
}