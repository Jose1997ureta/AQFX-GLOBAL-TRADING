import React from 'react'
import { theme } from '../constants'
import styled from 'styled-components/native'

export const ListNotice = () => {
  return (
    <>
    <NoticeItem>
      <NoticeItemTitle>Título de la noticia Lorem ipsum dolor sit amet, consectetur adipiscing</NoticeItemTitle>
      <NoticeItemDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit aliquam.</NoticeItemDescription>
      <NoticeItemDate>Hora: 00:00 Fecha: 00/00/0000</NoticeItemDate>
    </NoticeItem>
    <NoticeItem>
      <NoticeItemTitle>Título de la noticia Lorem ipsum dolor sit amet, consectetur adipiscing</NoticeItemTitle>
      <NoticeItemDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit aliquam.</NoticeItemDescription>
      <NoticeItemDate>Hora: 00:00 Fecha: 00/00/0000</NoticeItemDate>
    </NoticeItem>
    <NoticeItem>
      <NoticeItemTitle>Título de la noticia Lorem ipsum dolor sit amet, consectetur adipiscing</NoticeItemTitle>
      <NoticeItemDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit aliquam.</NoticeItemDescription>
      <NoticeItemDate>Hora: 00:00 Fecha: 00/00/0000</NoticeItemDate>
    </NoticeItem>
    <NoticeItem>
      <NoticeItemTitle>Título de la noticia Lorem ipsum dolor sit amet, consectetur adipiscing</NoticeItemTitle>
      <NoticeItemDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit aliquam.</NoticeItemDescription>
      <NoticeItemDate>Hora: 00:00 Fecha: 00/00/0000</NoticeItemDate>
    </NoticeItem>
    <NoticeItem>
      <NoticeItemTitle>Título de la noticia Lorem ipsum dolor sit amet, consectetur adipiscing</NoticeItemTitle>
      <NoticeItemDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit aliquam.</NoticeItemDescription>
      <NoticeItemDate>Hora: 00:00 Fecha: 00/00/0000</NoticeItemDate>
    </NoticeItem>
    <NoticeItem>
      <NoticeItemTitle>Título de la noticia Lorem ipsum dolor sit amet, consectetur adipiscing</NoticeItemTitle>
      <NoticeItemDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit aliquam.</NoticeItemDescription>
      <NoticeItemDate>Hora: 00:00 Fecha: 00/00/0000</NoticeItemDate>
    </NoticeItem>
    <NoticeItem>
      <NoticeItemTitle>Título de la noticia Lorem ipsum dolor sit amet, consectetur adipiscing</NoticeItemTitle>
      <NoticeItemDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit aliquam.</NoticeItemDescription>
      <NoticeItemDate>Hora: 00:00 Fecha: 00/00/0000</NoticeItemDate>
    </NoticeItem>
    <NoticeItem>
      <NoticeItemTitle>Título de la noticia Lorem ipsum dolor sit amet, consectetur adipiscing</NoticeItemTitle>
      <NoticeItemDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit aliquam.</NoticeItemDescription>
      <NoticeItemDate>Hora: 00:00 Fecha: 00/00/0000</NoticeItemDate>
    </NoticeItem>
    <NoticeItem>
      <NoticeItemTitle>Título de la noticia Lorem ipsum dolor sit amet, consectetur adipiscing</NoticeItemTitle>
      <NoticeItemDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit aliquam.</NoticeItemDescription>
      <NoticeItemDate>Hora: 00:00 Fecha: 00/00/0000</NoticeItemDate>
    </NoticeItem>
    <NoticeItem>
      <NoticeItemTitle>Título de la noticia Lorem ipsum dolor sit amet, consectetur adipiscing</NoticeItemTitle>
      <NoticeItemDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit aliquam.</NoticeItemDescription>
      <NoticeItemDate>Hora: 00:00 Fecha: 00/00/0000</NoticeItemDate>
    </NoticeItem>
  </>
  )
}

const NoticeItem = styled.TouchableOpacity`
  width: 100%;
  background-color: #fff;
  border-bottom-width: 1px;
  border-bottom-color: ${theme.colors.secondary};
  border-style: solid;
  padding: 24px 20px 5px;
`;

const NoticeItemTitle = styled.Text`
  font-size: ${theme.sizes.h4}px;
  color: ${theme.colors.secondary};
  line-height: 20px;
  font-weight: ${theme.weight.bold};
  margin-bottom: 12px;
`;

const NoticeItemDescription = styled.Text`
  font-size: ${theme.sizes.h5}px;
  color: ${theme.colors.secondary};
  line-height: 14px;
  font-weight: ${theme.weight.semibold};
  margin-bottom: 7px;
`;

const NoticeItemDate = styled.Text`
  text-align: right;
  font-size: ${theme.sizes.h5}px;
  color: ${theme.colors.secondary};
  line-height: 14px;
  font-weight: ${theme.weight.normal};
`;

