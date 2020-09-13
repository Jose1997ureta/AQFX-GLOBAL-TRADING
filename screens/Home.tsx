import React from "react";
import { View,Text, StatusBar, ScrollView, SafeAreaView, TouchableOpacity, Image, ImageBackground} from 'react-native';
import { Base,HomeStyle } from '../styles'
import { HeaderNavigation } from '../components'
import { images } from '../constants'
import  { MaterialIcons }  from '@expo/vector-icons'

export default ({ navigation }) => {

  return (
    <View style={HomeStyle.container}>
      <StatusBar backgroundColor="#fff" barStyle='dark-content'/>
      <ScrollView>
        <SafeAreaView>
          <View style={Base.viewContainer}>
            {/* HEADER */}
            <HeaderNavigation>
              <View></View>
            </HeaderNavigation>
            {/* END HEADER */}

            {/* TITLE VIEW */}
            <View style={[Base.row]}>
              <Text style={HomeStyle.titleHome}>En Vivo</Text>
              <View style={HomeStyle.puntoRed}></View>
            </View>
            {/* TEND ITLE VIEW */}

            {/* CARD HOME */}
            <View style={[Base.w100, Base.row, Base.between, HomeStyle.cardContainer]}>
              <View style={[Base.w50, HomeStyle.card]}>
                <Image style={HomeStyle.cardImage} source={images.images.HomeCard1}/>
                <View style={HomeStyle.cardContent}>
                  <Text style={HomeStyle.cardContentTitle}>Título de la live...</Text>
                  <View style={[Base.row, Base.justifyEnd]}>
                    <MaterialIcons name='remove-red-eye' color='#fff'/>
                    <Text style={{color: '#fff', marginLeft: 5}}>0</Text>
                  </View>
                </View>
              </View>
              <View style={[Base.w50, HomeStyle.card]}>
                <Image style={HomeStyle.cardImage} source={images.images.HomeCard2}/>
                <View style={HomeStyle.cardContent}>
                  <Text style={HomeStyle.cardContentTitle}>Título de la live...</Text>
                  <View style={[Base.row, Base.justifyEnd]}>
                    <MaterialIcons name='remove-red-eye' color='#fff'/>
                    <Text style={{color: '#fff', marginLeft: 5}}>0</Text>
                  </View>
                </View>
              </View>
            </View>
            {/* END CARD HOME */}

            {/* LINE SEPARATOR */}
            <View style={[Base.alignItemsCenter,Base.w100]}>
              <View style={HomeStyle.lineSeparator}></View>
            </View>
            {/* END LINE SEPARATOR */}

            {/* NOTICES */}
            <View style={HomeStyle.noticeContainer}>
                <Text style={HomeStyle.noticeTitle}>Noticias</Text>
                <View style={HomeStyle.noticeTitleSeparator}></View>
                <TouchableOpacity style={HomeStyle.noticeItem}>
                  <Text style={HomeStyle.noticeItemTitle}>Título de la noticia Lorem ipsum dolor sit amet, consectetur adipiscing</Text>
                  <Text style={HomeStyle.noticeItemSubTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit aliquam.</Text>
                  <Text style={HomeStyle.noticeItemDate}>Hora: 00:00 Fecha: 00/00/0000</Text>
                </TouchableOpacity>
                <TouchableOpacity style={HomeStyle.noticeItem}>
                  <Text style={HomeStyle.noticeItemTitle}>Título de la noticia Lorem ipsum dolor sit amet, consectetur adipiscing</Text>
                  <Text style={HomeStyle.noticeItemSubTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit aliquam.</Text>
                  <Text style={HomeStyle.noticeItemDate}>Hora: 00:00 Fecha: 00/00/0000</Text>
                </TouchableOpacity>
                <TouchableOpacity style={HomeStyle.noticeItem}>
                  <Text style={HomeStyle.noticeItemTitle}>Título de la noticia Lorem ipsum dolor sit amet, consectetur adipiscing</Text>
                  <Text style={HomeStyle.noticeItemSubTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit aliquam.</Text>
                  <Text style={HomeStyle.noticeItemDate}>Hora: 00:00 Fecha: 00/00/0000</Text>
                </TouchableOpacity>
                <TouchableOpacity style={HomeStyle.noticeItem}>
                  <Text style={HomeStyle.noticeItemTitle}>Título de la noticia Lorem ipsum dolor sit amet, consectetur adipiscing</Text>
                  <Text style={HomeStyle.noticeItemSubTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit aliquam.</Text>
                  <Text style={HomeStyle.noticeItemDate}>Hora: 00:00 Fecha: 00/00/0000</Text>
                </TouchableOpacity>
                <TouchableOpacity style={HomeStyle.noticeItem}>
                  <Text style={HomeStyle.noticeItemTitle}>Título de la noticia Lorem ipsum dolor sit amet, consectetur adipiscing</Text>
                  <Text style={HomeStyle.noticeItemSubTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit aliquam.</Text>
                  <Text style={HomeStyle.noticeItemDate}>Hora: 00:00 Fecha: 00/00/0000</Text>
                </TouchableOpacity>
                <TouchableOpacity style={HomeStyle.noticeItem}>
                  <Text style={HomeStyle.noticeItemTitle}>Título de la noticia Lorem ipsum dolor sit amet, consectetur adipiscing</Text>
                  <Text style={HomeStyle.noticeItemSubTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit aliquam.</Text>
                  <Text style={HomeStyle.noticeItemDate}>Hora: 00:00 Fecha: 00/00/0000</Text>
                </TouchableOpacity>
            </View>
            {/* END NOTICES */}
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  )
}