/* eslint-disable react/prop-types */
import React from 'react'

import {
  Container,
  DescriptionContainer,
  Name,
  Description,
  Button,
  Icon
} from './styles'

const Attachment = ({ title, description, handlePress }) => {
  return (
    <Container onPress={() => handlePress()}>
      <DescriptionContainer>
        <Name>{title}</Name>
        <Description>{description}</Description>
      </DescriptionContainer>
      <Button>
        <Icon source={require('../../assets/doc.png')} />
      </Button>
    </Container>
  )
}

export default Attachment
