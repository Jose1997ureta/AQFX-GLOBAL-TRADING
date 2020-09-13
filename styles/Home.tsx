import { StyleSheet } from 'react-native'
import { colors, sizes, weight } from '../constants/theme'
import { theme } from '../constants'

export const HomeStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  // HEADER
  back:{
    height: 25,
    width: 25,
  },
  // TITLE
  titleHome: {
    fontSize: theme.sizes.h1,
    color: theme.colors.secondary,
    lineHeight: 39,
    fontWeight: theme.weight.bold,
    marginRight: theme.sizes.margin - 10
  },
  puntoRed: {
    width: 15,
    height: 15,
    backgroundColor: '#BA0019',
    borderRadius: 15/2,
  },
  // CARD
  cardContainer:{
    marginTop: theme.sizes.margin,
  },
  card: {
    height: 230,
    borderRadius: theme.sizes.radiusInput,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  cardImage: {
    height: 230,
    width: '100%',
    position: 'absolute',
    borderRadius: theme.sizes.radiusInput,
  },
  cardContent:{
    position: 'absolute',
    height: 107,
    width: '100%',
    backgroundColor: theme.colors.secondary,
    opacity: 0.8,
    borderRadius: theme.sizes.radiusInput,
    padding: theme.sizes.padding - 6,
    justifyContent: 'space-between'
  },
  cardContentTitle: {
    fontSize: theme.sizes.h4,
    color: '#FFF',
    lineHeight: 20,
    fontWeight: theme.weight.bold,
  },

  // LINE
  lineSeparator:{
    width: 38,
    height: 4,
    backgroundColor: theme.colors.secondary,
    marginTop: theme.sizes.margin + 10,
    marginBottom: theme.sizes.margin + 16,
    borderRadius: 15,
  },
  noticeContainer: {
    // flex: 1,
    // backgroundColor: 'red',
  },
  noticeTitle: {
    fontSize: theme.sizes.h1,
    color: theme.colors.secondary,
    lineHeight: 39,
    fontWeight: theme.weight.bold,
  },
  noticeTitleSeparator: {
    width: 38,
    height: 4,
    backgroundColor: theme.colors.primary,
    // marginBottom: theme.sizes.margin,
    borderRadius: 1,
  },
  noticeItem: {
    backgroundColor: '#fff',
    borderBottomColor: theme.colors.secondary,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    paddingTop: 24,
    paddingBottom: 5,
  },
  noticeItemTitle: {
    fontSize: theme.sizes.h4,
    color: theme.colors.secondary,
    lineHeight: 20,
    fontWeight: theme.weight.bold,
    marginBottom: theme.sizes.margin / 2,
  },
  noticeItemSubTitle: {
    fontSize: theme.sizes.h5,
    color: theme.colors.secondary,
    lineHeight: 14,
    fontWeight: theme.weight.semibold,
    marginBottom: 7,
  },
  noticeItemDate:{
    textAlign: 'right',
    fontSize: theme.sizes.h5,
    color: theme.colors.secondary,
    lineHeight: 14,
    fontWeight: theme.weight.normal,
  }
})