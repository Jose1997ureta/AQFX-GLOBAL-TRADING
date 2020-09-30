import { theme } from '../constants'
import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'

export const ButtonPrimary = styled.TouchableHighlight`
  padding: 9px 29px;
  border-radius: 5px;
  background-color: ${theme.colors.primary};
`;

export const ButtonSecondary = styled.TouchableHighlight`
  padding: 9px 29px;
  border-radius: 5px;
  background-color: ${(props:any) => props.theme.fondo7};
`;

export const TextButtonSecondary = styled.Text`
  text-align: center;
  font-size: ${theme.sizes.h4}px;
  font-weight: ${theme.weight.bold};
  color: ${(props:any) => props.theme.fondo8};
`;

export const TextButtonPrimary = styled.Text`
  text-align: center;
  font-size: ${theme.sizes.h4}px;
  font-weight: ${theme.weight.bold};
  color: #fff;
`;

export const ButtonStyle = StyleSheet.create({
  ButtonShadow: {
    shadowColor: '#000',
    shadowOffset: {width: 0,height: 3},
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 3,
  }
})