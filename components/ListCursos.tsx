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

export const ListCursos = ({lista, listaCount, navigation }: any) => {

  let idCurso = lista.id;
  let c : number = 0;
  
  listaCount.map((element:any) => {
    let idindex = element.fk_grupo;

    if(idindex == idCurso){
      c = element.conteo;
    }else{
      c = 0;
    }
  })

  let d = lista.cantidad_videos_activo;
  let r = (c / d);
  if(Number.isNaN(r)) {
    r = 0;
  }

  let p = Math.floor(r * 100);
  if(p <= 0 || p == Infinity) {
    p = 0
  }

  if(lista.tiempo == null){
    lista.tiempo = '00:00:00';
  }

  return (
    <Curso style={Base.borderShadow} onPress={() => navigation.navigate("DetalleCurso", {idCurso: lista.id, profesor: lista.profesor, time: lista.tiempo, porcentaje: p}) } activeOpacity={0.1}
    underlayColor="#eee">
      <>
      <CursoContainerImage style={Base.borderShadow}>
        <CursoImage source={{uri: lista.imagen}}/>
      </CursoContainerImage>
      <CursoContent>
        <CursoTitle>{lista.nombre}</CursoTitle>
        <CursoNameTeacher>Instruido por: {lista.profesor}</CursoNameTeacher>
        <CursoHours>{lista.tiempo} de contenido</CursoHours>
      </CursoContent>
      <CursoTimeLine style={Base.borderShadow}>
        <Donut 
          key={lista.id} 
          max={100} 
          porcentage={p} 
          v_min={c} 
          v_max={lista.cantidad_videos_activo}
        />
      </CursoTimeLine>
      </>
    </Curso>
    
  )
}

