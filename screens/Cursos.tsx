import React from "react";
import { View, SafeAreaView, ScrollView } from 'react-native';
import { HeaderNavigation, Loading, ListCursos } from '../components'
import { 
  Container,
  
  // CURSOS
  TitleCurso,
  CursoContainer,

} from '../styles'

export const CursoScreen = ({ navigation }) => {

  const cursos = [
    {id: "1", titulo: "Curso 1", teacher: "Stephanie Speranza", time: "5 Horas", max: 100, porcentage: 10, v_min: 4, v_max: 40},
    {id: "2", titulo: "Curso 2", teacher: "Stephanie Speranza", time: "4 Horas", max: 100, porcentage: 60, v_min: 4, v_max: 40},
    {id: "3", titulo: "Curso 3", teacher: "Stephanie Speranza", time: "3 Horas", max: 100, porcentage: 90, v_min: 4, v_max: 40},
    {id: "4", titulo: "Curso 4", teacher: "Stephanie Speranza", time: "2 Horas", max: 100, porcentage: 50, v_min: 4, v_max: 40},
  ];

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{backgroundColor: "#fff"}}>
         
        <Container>
          <HeaderNavigation>
            <View></View>
          </HeaderNavigation>

          <TitleCurso>Todos los cursos</TitleCurso>

          <CursoContainer>
            { cursos.map(curso => (
              <ListCursos key={curso.id} lista={curso} navigation={navigation} />
            ))}
          </CursoContainer>

        </Container>
      </ScrollView>

    </SafeAreaView>
  )
}

