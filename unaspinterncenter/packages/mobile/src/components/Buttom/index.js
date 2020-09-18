import React from 'react';


import { Container, Text } from './styles';

const Buttom = ({tittle, handlePress}) => {
  return (
      <Container onPress={() => handlePress()}>
          <Text>
            {tittle}
          </Text>
      </Container>
  );
}

export default Buttom;