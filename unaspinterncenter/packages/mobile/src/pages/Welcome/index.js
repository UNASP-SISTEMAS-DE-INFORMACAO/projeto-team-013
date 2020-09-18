import React from 'react';


import { Container, Logo, Header, WelcomeText, WelcomeTextCentral, ButtomNovo, ButtomText, Text} from './styles';

const Welcome = () => {
  return (

    <Container>
        <Header>
            <Logo source={require('../../assets/unasp.png')} />
            <WelcomeText>Bem-vindo</WelcomeText>
            <WelcomeTextCentral>Bem-vindo ao Central de estágio Unasp</WelcomeTextCentral>
            <ButtomNovo>
                <ButtomText>Sou novo</ButtomText>
            </ButtomNovo>
            <Text>Já tenho conta</Text>
        </Header>
    </Container>
    )
}

export default Welcome;