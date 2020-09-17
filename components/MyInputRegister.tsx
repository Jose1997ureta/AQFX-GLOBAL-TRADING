// import React from 'react';
// import { Text, TextInput, View, Image} from 'react-native';
// import { useField } from 'formik'

// import { sizes } from '../constants/var'
// import { images } from '../constants/images'
// import { styles } from '../styles/Register'
// import { base } from '../styles/Base'

// export const MyInput = ({fieldName, type , ...props }) => {
//   const [field, meta] = useField(fieldName)

//   return (
//     <>
//     { type == '' ?
//         <TextInput 
//           onChangeText={field.onChange(fieldName)} 
//           onBlur={field.onBlur(fieldName)} 
//           value={field.value} 
//           {...props}
//         />
//         : 
//         <View style={styles.inputBanderaContainer}>
//           <View style={styles.optionBandera}>
//             <Image source={images.Bandera} />
//             <Text style={base.textBold}>51</Text>
//             <Image source={images.BanderaFlecha} />
//           </View>

//           <View style={styles.inputBandera}>
//             <TextInput 
//               onChangeText={field.onChange(fieldName)} 
//               onBlur={field.onBlur(fieldName)} 
//               value={field.value} 
//               {...props}
//             />
//           </View>
//         </View>
//     }
//     {
//       meta.error && meta.touched ? <Text style={styles.textError}>{meta.error}</Text>
//       : <View style={{marginBottom: sizes.margin}}/> 
//     }
//     </>
//   )
// }