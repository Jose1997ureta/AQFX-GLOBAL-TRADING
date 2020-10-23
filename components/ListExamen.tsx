import React, { useState } from 'react'
import { theme } from '../constants'
// import { images as image } from '../constants'
import { 
  ExamenItem,
  ExamenOptionLetter,
  ExamenLetter,
  ExamenText,

} from '../styles'

export const ListExamen = ({ id, title, index, onPress, markes, marker2 }: any) => {
  let isMarker = false;

  if(markes != null){
    markes = JSON.parse(markes);
    markes.map((el:any) => {
      if(el.id == id){
        isMarker = true;
      }
    })
  }

  return (
    <ExamenItem  onPress={isMarker ? null : onPress}>
      <ExamenOptionLetter style={{backgroundColor: isMarker || marker2 == id? theme.colors.primary: '#D4D6D8'}}>
        <ExamenLetter>{index}</ExamenLetter>
      </ExamenOptionLetter>
      <ExamenText>{title}</ExamenText>
    </ExamenItem>
  )
}

