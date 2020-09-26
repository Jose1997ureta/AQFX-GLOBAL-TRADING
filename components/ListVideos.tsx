import React from 'react'
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

export const ListVideos = ({ lista, navigation }) => {
  return (
    <PaddingContainer style={{marginTop: 10}}>
      <CardVideo style={Base.borderShadow} activeOpacity={0.4} underlayColor="#eee" onPress={() => {}}>
        <>
        <CardVideoImage>
          <CardVideoImageTime>{lista.time}</CardVideoImageTime>
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