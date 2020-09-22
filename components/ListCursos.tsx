import React from 'react'
import { images as image } from '../constants'
import Donut from './ProgressCircle'
import { 
  Base,

  Curso,
  CursoTimeLine,
  CursoContainerImage,
  CursoImage,
  CursoContent,
  CursoTitle,
  CursoNameTeacher,
  CursoHours,

} from '../styles'

export const ListCursos = ({lista, navigation }) => {

  return (
    <Curso style={Base.borderShadow} onPress={() => navigation.navigate("DetalleCurso", {idCurso: lista.id}) } activeOpacity={0.1}
    underlayColor="#eee">
      <>
      <CursoContainerImage style={Base.borderShadow}>
        <CursoImage source={image.images.Suscribe1ArrowLeft}/>
      </CursoContainerImage>
      <CursoContent>
        <CursoTitle>{lista.titulo}</CursoTitle>
        <CursoNameTeacher>Instruido por: {lista.teacher}</CursoNameTeacher>
        <CursoHours>{lista.time} de contenido</CursoHours>
      </CursoContent>
      <CursoTimeLine style={Base.borderShadow}>
        <Donut key={lista.id} porcentage={lista.porcentage} max={lista.max} v_min={lista.v_min} v_max={lista.v_max}/>
      </CursoTimeLine>
      </>
    </Curso>
    
  )
}

