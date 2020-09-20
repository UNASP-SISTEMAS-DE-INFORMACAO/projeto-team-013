import React, { useState } from 'react'
import Buttom from '../../components/Buttom'
import BackButtom from '../../components/BackButtom'
import Progress from '../../components/Progress'
import Input from '../../components/Input'
import { Container, Logo, Header, WelcomeText, Form } from './styles'
import RaServices from '../../services/RaServices'

const FindStudent = ({ navigation }) => {
  const [loading, setLoading] = useState(false)
  const [ra, setRA] = useState()
  const [error, setError] = useState()

  const getStudent = async () => {
    setLoading(true)
    const student = await RaServices.getStudent(ra)
    setLoading(true)
    if (student[0]) {
      setLoading(false)
      navigation.navigate('Register', { student: student[0] })
      setError('')
      return
    }

    setError('Lamento, não encontramos o RA digitado.')
    setLoading(false)
  }
  return (
    <Container>
      <Header>
        <BackButtom handlePress={() => navigation.goBack()} />
        <Logo source={require('../../assets/unasp.png')} />
        <WelcomeText>
          Para continuar, por favor insira seu RA abaixo
        </WelcomeText>
        <Progress level={0} />
      </Header>
      <Form>
        <Input onTextChange={setRA} error={error} placeholder="Digite seu RA" />
        <Buttom
          loading={loading}
          tittle={'Confirmar'}
          handlePress={() => getStudent()}
        />
      </Form>
    </Container>
  )
}

export default FindStudent
