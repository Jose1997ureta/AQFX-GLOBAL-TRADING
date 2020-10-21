import React from 'react'
import { theme } from '../constants'
// import { images as image } from '../constants'
import { 
  ExamenItem,
  ExamenOptionLetter,
  ExamenLetter,
  ExamenText,

} from '../styles'

export const ListExamen = ({ id, title, index, onPress, marker }: any) => {
  
  return (
    <ExamenItem onPress={onPress}>
      <ExamenOptionLetter style={{backgroundColor: marker == id ? theme.colors.primary: '#D4D6D8' }}>
        <ExamenLetter>{index}</ExamenLetter>
      </ExamenOptionLetter>
      <ExamenText>{title}</ExamenText>
    </ExamenItem>
  )
}

