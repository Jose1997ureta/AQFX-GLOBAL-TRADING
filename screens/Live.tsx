import React from 'react'
import { SafeAreaView, StatusBar, ScrollView } from 'react-native'
import { HeaderNavigation, Loading, ListLive } from '../components'
import { images as image, theme } from '../constants'
import { LiveAll } from '../model/API_Noticias'
import { 
  Container,
  Row,
  HeaderBack,
  ImagenBack,
  PaddingContainer,
  W100,

  // LIVE
  LiveContainer,

} from '../styles'

export const LiveScreen = ({ navigation }) => {
  const { loading, list } = LiveAll()

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
      { 
      loading ? 
        <Loading/> :
    
        <LiveContainer>
          <PaddingContainer>
            <HeaderNavigation>
              <HeaderBack onPress={()=> navigation.navigate('Home')}>
                <ImagenBack source={image.images.ArrowLeft} />
              </HeaderBack>
            </HeaderNavigation>
          </PaddingContainer>
          {list.map(lista => (
            <ListLive key={lista.titulo} lista={lista}/>
          ))}
        </LiveContainer>
      }
      </ScrollView>
    </SafeAreaView>
  )
}