/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import Icon from 'react-native-vector-icons/MaterialIcons'

import {
  Container,
  DescriptionContainer,
  Name,
  Description,
  Button
} from './styles'

const Module = ({ name, handlePress }) => {
  const { colors } = useContext(ThemeContext)

  return (
    <Container onPress={() => handlePress()}>
      <DescriptionContainer>
        <Name>{name}</Name>
        <Description>{name}</Description>
      </DescriptionContainer>
      <Button>
        <Icon size={26} color={colors.primary} name="folder" />
      </Button>
    </Container>
  )
}

export default Module