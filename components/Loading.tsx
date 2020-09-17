import React from 'react'
import { ActivityIndicator, Dimensions } from 'react-native';
import { theme } from '../constants'
import { Container, Base } from '../styles'

const height = Dimensions.get('window').height;

export const Loading = () => {
  return (
    <Container style={[Base.w100, Base.alignItemsCenter, Base.justifyCenter, {height: height}]}>
      <ActivityIndicator size='large' color={theme.colors.primary} />
    </Container>
  )
}


