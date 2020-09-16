import { createSwitchNavigator} from 'react-navigation'
import { createStackNavigator, CardStyleInterpolators } from 'react-navigation-stack'

// SCREENS
import { LoadingScreen } from '../Auth/Splash'
import { LoginScreen } from '../Auth/Login/Login'
import { Suscribe1Screen } from '../Auth/Register/Suscribe-1'
import { Suscribe2Screen } from '../Auth/Register/Suscribe-2'
import { Suscribe3Screen } from '../Auth/Register/Suscribe-3'

import { DrawerNavigation } from '../navigation/Drawer'

export const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Suscribe1: Suscribe1Screen,
  Suscribe2: Suscribe2Screen,
  Suscribe3: Suscribe3Screen,
}, {
  initialRouteName: 'Login',
  headerMode: 'none',
  defaultNavigationOptions: {
    gestureEnabled: false,
    gestureDirection: 'horizontal',
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  },
  // navigationOptions: {
  //   gesturesEnabled: true,
  //   drawerLockMode: 'unlocked'
  // }
})

export const BaseStack = createSwitchNavigator({
  Loading: LoadingScreen,
  AuthStack: AuthStack,
  Scrrens: DrawerNavigation,
},
{
  initialRouteName: 'Loading',
})
