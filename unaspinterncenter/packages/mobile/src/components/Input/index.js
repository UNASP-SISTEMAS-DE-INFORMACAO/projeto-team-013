import React from 'react'

import { Container, TextInput, Error } from './styles'

const Input = ({ placeholder = '', error = '', onTextChange }) => {
  return (
    <Container>
      <TextInput onChangeText={onTextChange} placeholder={placeholder} />
      <Error>{error}</Error>
    </Container>
  )
}

export default Input
