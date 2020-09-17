import React from 'react'
import { SafeAreaView, StatusBar, ScrollView } from 'react-native'
import { ThemeProvider } from 'styled-components'
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

  // THEME
  ThemeLight,
  ThemeDark,
} from '../styles'

export const LiveScreen = ({ navigation }) => {
  const { loading, list } = LiveAll()

  return (
    <ThemeProvider theme={ThemeDark}>
      <StatusBar backgroundColor="#fff" barStyle='dark-content'/>
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
    </ThemeProvider>
  )
}