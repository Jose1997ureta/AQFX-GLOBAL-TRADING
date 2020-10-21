import React from "react";
import { View, ScrollView, AsyncStorage } from 'react-native';
import { HeaderNavigation, Loading, ListCursos } from '../components'
import { GET_CURSOS, GET_CURSOS_ASISTIDO } from '../model/API'
import { 
  Vista,
  Container,
  PaddingContainer,
  
  // CURSOS
  TitleCurso,
  CursoContainer,

} from '../styles'

export const CursoScreen = ({ navigation }:any) => {
  const {loading, list} = GET_CURSOS();
  const { listCount } = GET_CURSOS_ASISTIDO();

  return (
    <Vista>
      <ScrollView>
      { 
      loading ? 
      <Loading/> :
        <Container>
          <PaddingContainer>
            <HeaderNavigation>
              <View></View>
            </HeaderNavigation>

            <TitleCurso>Todos los cursos</TitleCurso>

            <CursoContainer>
              { list.map((lista:any) => (
                <ListCursos key={lista.id} lista={lista} listaCount={listCount} navigation={navigation} />
              ))}
            </CursoContainer>
          </PaddingContainer>
        </Container>
      }
      </ScrollView>
    </Vista>
  )
}

