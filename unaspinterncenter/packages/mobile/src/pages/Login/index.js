import React, { useState } from 'react'
import Buttom from '../../components/Buttom'
import Input from '../../components/Input'
import BackButtom from '../../components/BackButtom'
import { Container, Logo, Header, Text, Form, InputContainer } from './styles'

const Login = ({ navigation }) => {
  return (
    <Container>
      <Header>
        <BackButtom />
        <Logo source={require('../../assets/unasp.png')} />
        <Text>Bem Vindo, para logar preencha as informações abaixo</Text>
      </Header>
      <Form>
        <InputContainer>
          <Input placeholder="Digite seu Email" />
          <Input placeholder="Digite sua senha" />
        </InputContainer>
        <Buttom tittle={'Entrar'} />
      </Form>
    </Container>
  )
}

export default Login
