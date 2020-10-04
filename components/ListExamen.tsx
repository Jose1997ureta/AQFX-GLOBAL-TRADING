import React from 'react'
import { theme } from '../constants'
// import { images as image } from '../constants'
import { 
  ExamenItem,
  ExamenOptionLetter,
  ExamenLetter,
  ExamenText,

} from '../styles'

export const ListExamen = ({ lista, onPress, marker }: any) => {
  
  return (
    <ExamenItem onPress={onPress}>
      <ExamenOptionLetter style={{backgroundColor: marker == lista.id ? theme.colors.primary: '#D4D6D8' }}>
        <ExamenLetter>{lista.letter}</ExamenLetter>
      </ExamenOptionLetter>
      <ExamenText>{lista.description}</ExamenText>
    </ExamenItem>
  )
}

