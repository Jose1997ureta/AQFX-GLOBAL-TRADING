import React from 'react'
import { ScrollView } from 'react-native'
import { HeaderNavigation, Loading, List2Live } from '../components'
import { images as image } from '../constants'
import { Live2All } from '../model/API'
import { 
  Vista,
  Container,
  Row,
  HeaderBack,
  ImagenBack,
  PaddingContainer,
  W100,
} from '../styles'

export const Live2Screen = ({ navigation }: any) => {
  const { loading, list } = Live2All()

  return (
    <Vista>
      <ScrollView>
      { 
      loading ? 
      <Loading/> :
      <Container>
        <PaddingContainer>
          <HeaderNavigation>
            <HeaderBack onPress={()=> navigation.navigate('Home')}>
              <ImagenBack source={image.images.ArrowLeft} />
            </HeaderBack>
          </HeaderNavigation>
        </PaddingContainer>
        {list.map((lista:any) => (
          <List2Live key={lista.titulo} lista={lista}/>
        ))}
      </Container>
      }
      </ScrollView>
    </Vista>
  )
}