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

const Delivery = ({ title, description, handlePress, status }) => {
  const { colors } = useContext(ThemeContext)

  return (
    <Container onPress={() => handlePress()}>
      <DescriptionContainer>
        <Name>{title}</Name>
        <Description>{description}</Description>
      </DescriptionContainer>
      <Button>
        {status !== 'completed' ? null : (
          <Icon size={26} color={colors.primary} name="done" />
        )}
      </Button>
    </Container>
  )
}

export default Delivery
