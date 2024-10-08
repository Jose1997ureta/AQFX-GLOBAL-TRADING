import React from 'react'
import { ScrollView } from 'react-native'
import { HeaderNavigation, Loading, ListLive } from '../components'
import { images as image } from '../constants'
import { LiveAll } from '../model/API'
import { 
  Vista,
  Container,
  Row,
  HeaderBack,
  ImagenBack,
  PaddingContainer,
  W100,
} from '../styles'

export const LiveScreen = ({ navigation }: any) => {
  const { loading, list } = LiveAll()

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
          <ListLive key={lista.titulo} lista={lista}/>
        ))}
      </Container>
      }
      </ScrollView>
    </Vista>
  )
}