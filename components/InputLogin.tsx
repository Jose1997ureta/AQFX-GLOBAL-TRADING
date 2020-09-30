import React from 'react';
import { useField } from 'formik'
import { InputLogins, TextError } from '../styles'

export const InputLogin = ({fieldName, ...props}: any) => {
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
