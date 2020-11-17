import React from 'react'
import { BlurView } from 'expo-blur'

import { Container, Loading } from './styles'

const ModalLoading = ({ visible }) => {
  return (
    <Container visible={visible} transparent animationType="fade">
      <BlurView
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0
        }}
        tint="dark"
        intensity={80}
      />
      <Loading size="large" />
    </Container>
  )
}

export default ModalLoading
