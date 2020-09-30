import { theme } from '../constants'
import styled from 'styled-components/native'

export const Input = styled.TextInput`
  width: 100%;
  font-size: ${theme.sizes.h5}px;
  line-height: ${theme.sizes.h4}px;
  background-color: ${(props:any) => props.theme.fondo7};
  padding: ${theme.sizes.padding}px;
  border-radius: ${theme.sizes.radiusInput}px;
  border: 1px solid ${(props:any) => props.theme.fondo9};
  color: ${(props:any) => props.theme.fondo5};
`;

export const InputItem = styled.View`
  width: 100%;
  margin-bottom: ${theme.sizes.margin}px;
`;

export const TextError = styled.Text`
  font-size: ${theme.sizes.h5}px;
  color: ${theme.colors.danger};
  text-align: center;
  margin-bottom: ${theme.sizes.margin}px;
  margin-top: 5px;
`;

export const InputLogins = styled.TextInput`
  width: 100%;
  font-size: ${theme.sizes.h5}px;
  line-height: ${theme.sizes.h4}px;
  background-color: ${(props:any) => props.theme.fondo7};
  padding: ${theme.sizes.padding}px;
  border-radius: ${theme.sizes.radiusInput}px;
  border: 1px solid ${(props:any) => props.theme.fondo9};
  color: ${(props:any) => props.theme.fondo4};
`;
