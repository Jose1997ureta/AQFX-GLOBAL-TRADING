import React from 'react'
import { images as image } from '../constants'
import { useStateValue } from '../screens/states/ThemeState'
import { 
  Row,
  Between,
  CardComentario,
  CardComentarioImageContent,
  CardComentarioImagen,
  CardComentarioContent,
  CardComentarioTitulo,
  CardComentarioDescripction,
  CardComentarioText,
  CardComentarioLike,
  CardComentarioLikeNumber,
} from '../styles'

export const ListComentarios = ({lista}:any) => {
  const [state]:any = useStateValue();
  return (
    <CardComentario>
      <Row>
        <CardComentarioImageContent>
          <CardComentarioImagen source={image.images.ArrowLeft} />
        </CardComentarioImageContent>
        <CardComentarioContent>
          <CardComentarioTitulo>{lista.titulo}</CardComentarioTitulo>
          <CardComentarioDescripction>{lista.descripcion}</CardComentarioDescripction>
          <Between>
            <CardComentarioText>Denunciar</CardComentarioText>
            <Row>
              <CardComentarioLike source={lista.like == 0 ? state.theme.Like : state.theme.LikeBackground} />
              <CardComentarioLikeNumber>{lista.like}</CardComentarioLikeNumber>
            </Row>
          </Between>
        </CardComentarioContent>
      </Row>
    </CardComentario> 
  )
}



