import React, { useContext } from 'react'
import { ActivityIndicator } from 'react-native'
import { ThemeContext } from 'styled-components'

import { Container, Text } from './styles'

const Buttom = ({ tittle, handlePress, loading = false }) => {
  const { colors } = useContext(ThemeContext)

  return (
    <Container onPress={() => handlePress()}>
      {loading ? (
        <ActivityIndicator size={'small'} color={colors.white} />
      ) : (
        <Text>{tittle}</Text>
      )}
    </Container>
  )
}

export default Buttom
