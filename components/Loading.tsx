import React from 'react'
import { ActivityIndicator, Dimensions } from 'react-native';
import { theme } from '../constants'
import { Container, Base } from '../styles'

const heightView = Dimensions.get('screen').height;

export const Loading = () => {
  return (
    <Container style={[Base.alignItemsCenter, Base.justifyCenter, {height: heightView}]}>
      <ActivityIndicator size='large' color={theme.colors.primary} />
    </Container>
  )
}