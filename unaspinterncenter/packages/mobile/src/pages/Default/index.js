import React from 'react';

import { Container, Logo } from './styles';

const Default = () => {
    return (
        <Container>
            <Logo source={require('../../assets/unasp.png')} />
        </Container>
    )
}

export default Default;