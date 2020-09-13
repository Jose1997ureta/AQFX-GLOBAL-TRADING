import { Dimensions } from 'react-native'
import { theme } from '../constants'
import styled from 'styled-components/native'

const height = Dimensions.get('window').height

export const ImageBackground = styled.ImageBackground`
  flex: 1;
  background-color: ${props => props.theme.background};
  height: ${height}px;
`;

export const TextLogin = styled.Text`
  color: ${props => props.theme.textColor};
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

// export const InputItem = styled.View`
//   width: 100%;
//   margin-bottom: ${theme.sizes.margin}px;
// `;

export const TextOlvidarPassword = styled.Text`
  margin-bottom: ${theme.sizes.margin}px;
  width: 100%;
  text-align: right;
  font-size: ${theme.sizes.h6}px;
  line-height: 14px;
  font-weight: ${theme.weight.semibold};
  color: ${props => props.theme.textColor};
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
  color: ${props => props.theme.textColor};
`;