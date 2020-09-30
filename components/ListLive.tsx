import React from 'react'
import { theme } from '../constants'
import {
  PaddingContainer,
  Row,

  LiveItem,
  LiveItemHeaderContainer,
  LiveItemHeader,
  LiveItemHeaderTitle,
  LiveItemPuntoRed,
  LiveItemImageContainer,
  LiveItemImage,
  LiveItemSubtitleContainer,
  LiveItemSubtitle,
  LiveItemDescriptionContainer,
  LiveItemDescription,
  LiveItemEnlace,
  LiveItemLink,
  LiveItemClave,
  LiveItemSeparador,

} from '../styles'

export const ListLive = ({lista}: any) => {
  return (
    <>
    <LiveItem>
      <LiveItemHeaderContainer>
        <LiveItemHeader>
          <PaddingContainer>
            <Row style={{marginTop: theme.sizes.margin}}>
              <LiveItemHeaderTitle>{lista.titulo}</LiveItemHeaderTitle>
              <LiveItemPuntoRed></LiveItemPuntoRed>
            </Row>
            <LiveItemImageContainer>
              <LiveItemImage source={{uri: lista.imagen}} />
            </LiveItemImageContainer>
          </PaddingContainer>
        </LiveItemHeader>
        <LiveItemSubtitleContainer>
          <LiveItemSubtitle>Descripción</LiveItemSubtitle>
        </LiveItemSubtitleContainer>
      </LiveItemHeaderContainer>
      <LiveItemDescriptionContainer>
        <LiveItemDescription>{lista.descripcion}</LiveItemDescription>
        <Row>
          <LiveItemEnlace>Enlace</LiveItemEnlace>
          <LiveItemLink>{lista.link}</LiveItemLink>
        </Row>
        <LiveItemClave>Clave: {lista.clave == null ? 'xxxxxxx' : lista.clave}</LiveItemClave>
      </LiveItemDescriptionContainer>
    </LiveItem>
    <LiveItemSeparador /> 
    </>
  )
}