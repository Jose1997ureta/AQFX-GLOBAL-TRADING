import React from 'react'
import { Text } from 'react-native'
// import { Base } from '../styles'
import { theme } from '../constants'
import styled from 'styled-components/native'

export const TextFooter = () => {
  return (
    <TextFooterBase>Si continuas, aceptas los <TextFooterBold>Condiciones del servicio y la Politica de privacidad</TextFooterBold> de AQFX</TextFooterBase>
  )
}

const TextFooterBase = styled.Text`
  text-align: center;
  line-height: 18px;
  margin-top: 30px;
  font-weight: ${theme.weight.semibold};
  margin-bottom: ${theme.sizes.margin}px;
  color: ${props => props.theme.textColor};
`;

const TextFooterBold = styled.Text`
  font-weight: ${theme.weight.bold};
  color: ${props => props.theme.textColor};
`;