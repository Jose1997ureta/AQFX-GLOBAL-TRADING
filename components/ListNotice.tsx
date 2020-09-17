import React from 'react'
import { theme } from '../constants'
import styled from 'styled-components/native'

export const ListNotice = ({lista, navigation }) => {
  return (
    <NoticeItem onPress={() => navigation.navigate('Notice',{ idNoticia: lista.id})}>
      <NoticeItemTitle>{lista.titulo}</NoticeItemTitle>
      <NoticeItemDescription>{lista.descripcion}</NoticeItemDescription>
      <NoticeItemDate>Hora: {lista.hora_registro} Fecha: {lista.fecha_registro}</NoticeItemDate>
    </NoticeItem>
  )
}

const NoticeItem = styled.TouchableOpacity`
  width: 100%;
  background-color: ${props => props.theme.background};
  border-bottom-width: 1px;
  border-bottom-color: ${props => props.theme.textColor};
  border-style: solid;
  padding: 24px 20px 5px;
`;

const NoticeItemTitle = styled.Text`
  font-size: ${theme.sizes.h4}px;
  color: ${props => props.theme.textColor};
  font-weight: ${theme.weight.bold};
  margin-bottom: 7px;
`;

const NoticeItemDescription = styled.Text`
  font-size: ${theme.sizes.h6}px;
  color: ${props => props.theme.textColor};
  font-weight: ${theme.weight.semibold};
  margin-bottom: 5px;
`;

const NoticeItemDate = styled.Text`
  text-align: right;
  font-size: ${theme.sizes.h5}px;
  color: ${props => props.theme.textColor};
  font-weight: ${theme.weight.normal};
`;

