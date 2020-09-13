// import { StyleSheet } from 'react-native'
import { theme } from '../constants'
import styled from 'styled-components/native'

export const Input = styled.TextInput`
  width: 100%;
  font-size: ${theme.sizes.h5}px;
  line-height: ${theme.sizes.h4}px;
  background-color: #fff;
  padding: ${theme.sizes.padding}px;
  border-radius: ${theme.sizes.radiusInput}px;
  border: 1px solid #eee;
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
  background-color: ${props => props.theme.backgroundInput};
  padding: ${theme.sizes.padding}px;
  border-radius: ${theme.sizes.radiusInput}px;
  border: 1px solid ${props => props.theme.borderButton};
  color: ${props => props.theme.textColor};
`;
