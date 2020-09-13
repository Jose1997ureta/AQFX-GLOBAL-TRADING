import React from 'react';
import { useField } from 'formik'
import { InputLogins, TextError } from '../styles'

export const InputLogin = ({fieldName , ...props }) => {
  const [field, meta] = useField(fieldName)

  return (
    <>
      <InputLogins 
        onChangeText={field.onChange(fieldName)} 
        onBlur={field.onBlur(fieldName)} 
        value={field.value} 
        {...props}
      />
      {
        meta.error && meta.touched ? <TextError>{meta.error}</TextError>
        : null
      }
    </>
  )
}

// const InputLogins = styled.TextInput.attrs({
//   // placeholderTextColor: 'red'
// })`
//   width: 100%;
//   font-size: ${theme.sizes.h5}px;
//   line-height: ${theme.sizes.h4}px;
//   background-color: ${props => props.theme.backgroundInput};
//   padding: ${theme.sizes.padding}px;
//   border-radius: ${theme.sizes.radiusInput}px;
//   border: 1px solid ${props => props.theme.borderButton};
//   color: ${props => props.theme.textColor};
// `;

// export const TextError = styled.Text`
//   font-size: ${theme.sizes.h5}px;
//   color: ${theme.colors.danger};
//   text-align: center;
//   margin-bottom: ${theme.sizes.margin}px;
//   margin-top: 5px;
// `;