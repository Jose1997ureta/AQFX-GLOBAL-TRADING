import { createAppContainer} from 'react-navigation'
import { TabNavigator } from './Tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'

export const DrawerNavigation = createDrawerNavigator({
  Screens: TabNavigator
},{
  initialRouteName: 'Screens',
  drawerPosition: 'right'
})
  
export default createAppContainer(DrawerNavigation)