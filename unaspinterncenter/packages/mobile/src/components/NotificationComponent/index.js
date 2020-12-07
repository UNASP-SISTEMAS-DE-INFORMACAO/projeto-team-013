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

const NotificationComponent = ({ title, description }) => {
  const { colors } = useContext(ThemeContext)

  return (
    <Container>
      <DescriptionContainer>
        <Name>{title}</Name>
        <Description>{description}</Description>
      </DescriptionContainer>
      <Button>
        <Icon size={26} color={colors.primary} name="notifications" />
      </Button>
    </Container>
  )
}

export default NotificationComponent
