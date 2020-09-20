import React, { useState } from 'react'
import Buttom from '../../components/Buttom'
import Input from '../../components/Input'
import BackButtom from '../../components/BackButtom'
import {
  Container,
  Logo,
  Header,
  Text,
  Form,
  ProgressContainer,
  Progress,
  InputContainer
} from './styles'

const ConfirmPassword = ({ navigation }) => {
  const [progress, setProgress] = useState([
    { progress: false },
    { progress: false },
    { progress: true }
  ])
  return (
    <Container>
      <Header>
        <BackButtom />
        <Logo source={require('../../assets/unasp.png')} />
        <Text>Digite sua senha e confirme para finalizar o cadastro</Text>
        <ProgressContainer>
          {progress.map(item => (
            <Progress key={item} status={item.progress} />
          ))}
        </ProgressContainer>
      </Header>
      <Form>
        <InputContainer>
          <Input placeholder="Digite sua senha" />
          <Input placeholder="Confirme sua senha" />
        </InputContainer>
        <Buttom tittle={'Finalizar cadastro'} />
      </Form>
    </Container>
  )
}

export default ConfirmPassword
