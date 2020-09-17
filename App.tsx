import { createAppContainer} from 'react-navigation'
import { BaseStack } from './screens/navigation/AuthStack'

export default createAppContainer(BaseStack)

// CODIGO PARA EL CARDO DE LA IMAGENES
// import React from 'react'
// import { View, Text } from 'react-native';
// import { AppLoading } from 'expo'
// import { Asset }  from 'expo-asset'
// import Stack from './screens/navigation/index'

// const images = [
//   // SPASH
//   require('./assets/Splash/Isotipo-fondo.png'),
//   require('./assets/Splash/Imagotipo.png'),

//   // LOGIN
//   require('./assets/Splash/Isotipo-fondo.png'),
//   require('./assets/Login/Logotipo.png'),

//   // SUSBRIBE 1
//   require('./assets/Suscribe-1/arrow-left.png'),
//   require('./assets/Suscribe-1/Camara.png'),
//   require('./assets/Suscribe-1/Bandera.png'),
//   require('./assets/Suscribe-1/Paso-1.png'),
//   require('./assets/Suscribe-1/Paso-1-Black.png'),
//   require('./assets/Suscribe-1/Views.png'),
  
//   // SUSCRIBE 2
//   require('./assets/Suscribe-2/Ebay.png'),
//   require('./assets/Suscribe-2/Ebay-Black.png'),
//   require('./assets/Suscribe-2/MasterCard.png'),
//   require('./assets/Suscribe-2/MasterCard-Black.png'),
//   require('./assets/Suscribe-2/Paso-2.png'),
//   require('./assets/Suscribe-2/Paso-2-Black.png'),
//   require('./assets/Suscribe-2/PayPal.png'),
//   require('./assets/Suscribe-2/PayPal-Black.png'),
//   require('./assets/Suscribe-2/Tarjeta-Frente.png'),
//   require('./assets/Suscribe-2/Trajeta-Atras.png'),
//   require('./assets/Suscribe-2/Visa.png'),
//   require('./assets/Suscribe-2/Visa-Black.png'),

//   // SUSCRIBE 3
//   require('./assets/Suscribe-3/Paso-3.png'),
//   require('./assets/Suscribe-3/Paso-3-Black.png'),

//   // HOME
//   require('./assets/Home/card1.png'),
//   require('./assets/Home/card2.png'),
  
//   require('./assets/Suscribe-1/arrow-left.png'),

// ]

// export default class App extends React.Component{
//   state = {
//     isLoadingComplete:  false
//   };

//   handleResourcesAsync = async () => {
//     const cacheImages = images.map(image => {
//       return Asset.fromModule(image).downloadAsync();
//     });

//     return Promise.all(cacheImages);
//   };

//   render() {
//     if (!this.state.isLoadingComplete) {
//       return (
//         <AppLoading
//           startAsync={this.handleResourcesAsync}
//           onError={error => console.warn(error)}
//           onFinish={() => this.setState({ isLoadingComplete: true })}
//         />
//       );
//     }

//     return (
//       <View style={[{flex:1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center'}]}>
//         <Stack />
//       </View>
//     );
//   }
// }

