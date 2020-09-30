import { theme } from '../constants'
import styled from 'styled-components/native'


export const ImageBackground = styled.ImageBackground`
  flex: 1;
  background-color: ${(props:any) => props.theme.fondo1};
`;

export const TextLogin = styled.Text`
  color: ${(props:any) => props.theme.fondo4};
  font-size: ${theme.sizes.h3}px;
  margin-bottom: 34px;
  margin-top: 43px;
  font-weight: ${theme.weight.bold};
  text-align: center;
`;

export const ImageContainer = styled.View`
  align-items: center;
  margin-bottom: 65px;
`;

export const TextOlvidarPassword = styled.Text`
  margin-bottom: ${theme.sizes.margin}px;
  width: 100%;
  text-align: right;
  font-size: ${theme.sizes.h6}px;
  line-height: 14px;
  font-weight: ${theme.weight.semibold};
  color: ${(props:any) => props.theme.fondo4};
`;

export const SuscribeContainer = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  justify-content: center;
`;

export const TextSuscribe = styled.Text`
  font-weight: ${theme.weight.semibold};
  margin-top: ${theme.sizes.margin * 2}px;
  line-height: 16px;
  color: ${(props:any) => props.theme.fondo4};
`;