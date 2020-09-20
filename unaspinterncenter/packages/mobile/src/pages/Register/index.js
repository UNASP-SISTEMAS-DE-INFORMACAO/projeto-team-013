/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import Buttom from '../../components/Buttom'
import BackButtom from '../../components/BackButtom'
import Progress from '../../components/Progress'
import Input from '../../components/Input'
import { Container, Logo, Header, WelcomeText, Form } from './styles'

const Register = ({ navigation, route }) => {
  const { student } = route.params

  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  return (
    <Container>
      <Header>
        <BackButtom handlePress={() => navigation.goBack()} />
        <Logo source={require('../../assets/unasp.png')} />
        <WelcomeText>
          Ola {student.name}, digite seu email para continuarmos com seu
          cadastro
        </WelcomeText>
        <Progress level={1} />
      </Header>

      <Form>
        <Input onTextChange={setEmail} placeholder="Digite seu Email" />
        <Buttom
          loading={loading}
          tittle={'Confirmar'}
          handlePress={() => alert(email)}
        />
      </Form>
    </Container>
  )
}

export default Register
