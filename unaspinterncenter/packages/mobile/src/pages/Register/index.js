import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Logo, Header, BackButtom, WelcomeText, Email, Buttom, ButtomText } from './styles';

const Register = () => {
    return (
        <Container>
            <Header>
                <BackButtom>
                    <Icon name="keyboard-arrow-left" color="#fff" size={30}/>
                </BackButtom>
                <Logo source={require('../../assets/unasp.png')} />
                <WelcomeText>Ola Alexsander, digite seu email para continuarmos com seu cadastro</WelcomeText>
            </Header>
            <Email placeholder="Digite seu Email"/>
            <Buttom>
                <ButtomText>Confirmar</ButtomText>
            </Buttom>
        </Container>
    )
}

export default Register;