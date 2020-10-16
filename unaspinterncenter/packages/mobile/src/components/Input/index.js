/* eslint-disable react/prop-types */
import React from 'react'

import { Container, TextInput, Error } from './styles'

const Input = ({
  placeholder = '',
  error = '',
  onTextChange,
  value,
  onBlur,
  secureTextEntry,
  keyboardType
}) => {
  return (
    <Container>
      <TextInput
        onChangeText={onTextChange}
        placeholder={placeholder}
        value={value}
        onBlur={onBlur}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
      <Error>{error}</Error>
    </Container>
  )
}

export default Input
