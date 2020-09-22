import styled from 'styled-components/native'
import { theme } from '../constants'

export const DetalleCurso = styled.View`
  flex: 1;
  background-color: ${props => props.theme.background};
`;

export const DetalleHeader = styled.View`
  background-color: ${props => props.theme.backgroundPrimary};
  padding-bottom: 18px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const TituloDetalleHeader = styled.Text`
  font-size: ${theme.sizes.h1}px;
  color: ${props => props.theme.textColorPrimary};
  line-height: 39px;
  font-weight: ${theme.weight.bold};
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const TitleProgress = styled.Text`
  font-size: ${theme.sizes.h6}px;
  line-height: 16px;
  color: #fff;
  font-weight: ${theme.weight.bold};
  margin-bottom: 5px;
`

export const ProgressContainer = styled.View`
  flex-direction: row;
  margin-bottom: 9px;
  align-items: center;
`;

// export const NumberProgress = styled.Text`
//   color: #fff;
//   font-size: ${theme.sizes.h6}px;
//   line-height: 16px;
//   font-weight: ${theme.weight.bold};
//   margin-right: 10px;
// `

export const Progress = styled.View`
  flex: 1;
  background-color: #fff;
  border-radius: 5px;
  height: 6px;
`;

// export const ProgressBackground = styled.View`
//   background-color: ${props => props.theme.progressCurso};
//   width: 40%;
//   border-radius: 5px;
//   height: 6px;
// `;

export const DetalleTeacher = styled.Text`
  font-size: ${theme.sizes.h6}px;
  line-height: 16px;
  color: #fff;
  font-weight: ${theme.weight.bold};
`

export const DetalleTime = styled.Text`
  font-size: ${theme.sizes.h6}px;
  line-height: 16px;
  color: #fff;
  font-weight: ${theme.weight.bold};
`