import { theme } from '../constants'
import styled from 'styled-components/native'

export const TitleCurso = styled.Text`
  font-size: ${theme.sizes.h1}px;
  color: ${(props:any) => props.theme.fondo4};
  line-height: 39px;
  font-weight: ${theme.weight.bold};
  margin-bottom: 23px;
`;

export const CursoContainer = styled.View``; 

export const Curso = styled.TouchableHighlight`
  width: 100%;
  padding: 16px;
  background-color: ${(props:any) => props.theme.fondo7};
  flex-direction: row;
  align-items: center;
  border-radius: 15px;
  margin-bottom: 44px;
  position: relative;
`;

export const CursoTimeLine = styled.View`
  position: absolute;
  width: 62px;
  height: 62px;
  border-radius: 31px;
  bottom: -20px;
  right: 9px;
  padding: 5px;
  background-color: ${(props:any) => props.theme.fondo2};
  
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const CursoContainerImage = styled.View`
  width: 88px;
  height: 88px;
  border-radius: 44px;
  padding: 20px;
  background-color: ${(props:any) => props.theme.fondo2};
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const CursoImage = styled.Image`
  width: 50px;
  height: 48px;
`;

export const CursoContent = styled.View`
  margin-left: 10px;
`;

export const CursoTitle = styled.Text`
  font-size: ${theme.sizes.h3}px;
  color: ${(props:any) => props.theme.fondo4};
  line-height: 26px;
  font-weight: ${theme.weight.bold};
  margin-bottom: 4px;
`;

export const CursoNameTeacher = styled.Text`
  font-size: ${theme.sizes.h6}px;
  color: ${(props:any) => props.theme.fondo4};
  font-weight: ${theme.weight.bold};
  margin-bottom: 2px;
`;

export const CursoHours = styled.Text`
  font-size: ${theme.sizes.h6}px;
  color: ${(props:any) => props.theme.fondo4};
  font-weight: ${theme.weight.bold};
`;