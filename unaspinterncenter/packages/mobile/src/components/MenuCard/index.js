import React from 'react'

import { Container, Image, Title } from './styles'

const MenuCard = ({title, picture, handleOnPress}) => {
  return (
    <Container onPress={() => handleOnPress()}>
      <Image source={picture} />
      <Title>{title}</Title>
    </Container>
  )
}

export default MenuCard
