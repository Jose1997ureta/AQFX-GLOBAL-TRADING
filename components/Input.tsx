import React from 'react';
import { useField } from 'formik'
import { Input, TextError } from '../styles'

export const TextInput = ({fieldName , ...props }) => {
  const [field, meta] = useField(fieldName)

  return (
    <>
      <Input 
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