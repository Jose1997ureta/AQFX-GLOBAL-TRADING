import styled from 'styled-components/native'
import { theme } from '../constants'

export const ExamenPaso1 = styled.Image`
  margin-bottom: 45px;
`; 

export const ExamenTitle = styled.Text`
  font-size: 30px;
  line-height: 36px;
  color: ${(props:any) => props.theme.fondo4};
  font-weight: ${theme.weight.bold};
  margin-bottom: 50px;
`;

export const Examen = styled.View`
  margin-bottom: ${theme.sizes.margin}px;
`;

export const ExamenItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${theme.sizes.margin}px;
`;

export const ExamenOptionLetter = styled.View`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background-color: #D4D6D8;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 17px; 
`;

export const ExamenLetter = styled.Text`
  color: #FFF;
  font-size: ${theme.sizes.h6}px;
  font-weight: ${theme.weight.bold};
  line-height: ${theme.sizes.h5}px;
`;

export const ExamenText = styled.Text`
  flex: 1;
  font-size: ${theme.sizes.h6}px;
  line-height: ${theme.sizes.h4}px;
  color: ${(props:any) => props.theme.fondo4};
  font-weight: ${theme.weight.bold};
`;

export const ModalTextExamen = styled.Text`
  color: #FFF;
  font-size: ${theme.sizes.h1}px;
  line-height: 40px;
  font-weight: ${theme.weight.bold};
`;

export const ModalButtonExamen= styled.TouchableHighlight`
  padding: 9px 29px;
  border-radius: 5px;
  background-color: #FFF;
  position: absolute;
  bottom: -18px;
  /* z-index: 1000; */
`;

export const ModalButtonTextExamen = styled.Text`
  text-align: center;
  font-size: ${theme.sizes.h4}px;
  font-weight: ${theme.weight.bold};
  color: ${theme.colors.primary};
`;