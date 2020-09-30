import React from "react";
import { View, ScrollView } from 'react-native';
import { HeaderNavigation, Loading, ListCursos } from '../components'
import { 
  Vista,
  Container,
  PaddingContainer,
  
  // CURSOS
  TitleCurso,
  CursoContainer,

} from '../styles'

export const CursoScreen = ({ navigation }:any) => {

  const cursos = [
    {id: "1", titulo: "Curso 1", teacher: "Stephanie Speranza", time: "5 Horas", max: 100, porcentage: 10, v_min: 4, v_max: 40},
    {id: "2", titulo: "Curso 2", teacher: "Stephanie Speranza", time: "4 Horas", max: 100, porcentage: 60, v_min: 4, v_max: 40},
    {id: "3", titulo: "Curso 3", teacher: "Stephanie Speranza", time: "3 Horas", max: 100, porcentage: 90, v_min: 4, v_max: 40},
    {id: "4", titulo: "Curso 4", teacher: "Stephanie Speranza", time: "2 Horas", max: 100, porcentage: 50, v_min: 4, v_max: 40},
    {id: "5", titulo: "Curso 5", teacher: "Stephanie Speranza", time: "1 Horas", max: 100, porcentage: 60, v_min: 4, v_max: 40},
    {id: "6", titulo: "Curso 6", teacher: "Stephanie Speranza", time: "7 Horas", max: 100, porcentage: 70, v_min: 4, v_max: 40},
  ];

  return (
    <Vista>
      <ScrollView>
        <Container>
          <PaddingContainer>
            <HeaderNavigation>
              <View></View>
            </HeaderNavigation>

            <TitleCurso>Todos los cursos</TitleCurso>

            <CursoContainer>
              { cursos.map(curso => (
                <ListCursos key={curso.id} lista={curso} navigation={navigation} />
              ))}
            </CursoContainer>
          </PaddingContainer>
        </Container>
      </ScrollView>
    </Vista>
  )
}

