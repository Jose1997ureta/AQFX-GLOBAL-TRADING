import React from 'react'
import { theme } from '../constants'
import styled from 'styled-components/native'

export const ListNotice = ({lista, onPress}) => {
  return (
    <NoticeItem onPress={onPress}>
      <NoticeItemTitle>{lista.titulo}</NoticeItemTitle>
      <NoticeItemDescription>{lista.titulo}</NoticeItemDescription>
      <NoticeItemDate>{lista.titulo}</NoticeItemDate>
    </NoticeItem>
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
  font-weight: ${theme.weight.bold};
  margin-bottom: 7px;
`;

const NoticeItemDescription = styled.Text`
  font-size: ${theme.sizes.h5}px;
  color: ${theme.colors.secondary};
  font-weight: ${theme.weight.semibold};
  margin-bottom: 5px;
`;

const NoticeItemDate = styled.Text`
  text-align: right;
  font-size: ${theme.sizes.h5}px;
  color: ${theme.colors.secondary};
  font-weight: ${theme.weight.normal};
`;

