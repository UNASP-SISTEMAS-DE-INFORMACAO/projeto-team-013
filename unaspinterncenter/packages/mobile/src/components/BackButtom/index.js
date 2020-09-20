import React, { useContext } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { ThemeContext } from 'styled-components'

import { Container } from './styles'

const BackButtom = ({ handlePress }) => {
  const { colors } = useContext(ThemeContext)

  return (
    <Container onPress={() => handlePress()}>
      <Icon name="keyboard-arrow-left" color={colors.white} size={30} />
    </Container>
  )
}

export default BackButtom
