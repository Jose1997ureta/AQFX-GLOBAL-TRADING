import React from 'react'
import { theme } from '../constants'
import styled from 'styled-components/native'

export const ListNotice = ({lista, navigation }: any) => {
  return (
    <NoticeItem onPress={() => navigation.navigate('Notice',{ idNoticia: lista.id})} underlayColor="#eee">
      <>
      <NoticeItemTitle>{lista.titulo}</NoticeItemTitle>
      <NoticeItemDescription>{lista.descripcion}</NoticeItemDescription>
      <NoticeItemDate>Hora: {lista.hora_registro} Fecha: {lista.fecha_registro}</NoticeItemDate>
      </>
    </NoticeItem>
  )
}

const NoticeItem = styled.TouchableHighlight`
  width: 100%;
  background-color: ${(props: any) => props.theme.fondo1};
  border-bottom-width: 1px;
  border-bottom-color: ${(props: any) => props.theme.fondo4};
  border-style: solid;
  padding: 24px 20px 5px;
`;

const NoticeItemTitle = styled.Text`
  font-size: ${theme.sizes.h4}px;
  color: ${(props: any) => props.theme.fondo4};
  font-weight: ${theme.weight.bold};
  margin-bottom: 7px;
`;

const NoticeItemDescription = styled.Text`
  font-size: ${theme.sizes.h6}px;
  color: ${(props: any) => props.theme.fondo4};
  font-weight: ${theme.weight.semibold};
  margin-bottom: 5px;
`;

const NoticeItemDate = styled.Text`
  text-align: right;
  font-size: ${theme.sizes.h5}px;
  color: ${(props: any) => props.theme.fondo4};
  font-weight: ${theme.weight.normal};
`;

