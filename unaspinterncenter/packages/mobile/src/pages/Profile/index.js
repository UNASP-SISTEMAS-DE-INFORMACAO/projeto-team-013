import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {
  Container,
  BackgroundHeader,
  Header,
  Title,
  BackButton,
  InputContainer,
  Label,
  Input,
  Exit,
  ButtomExit,
  InputContainerPass,
  DadosPassword
} from './styles'

const Profile = ({ navigation }) => {
  const { colors, metrics } = useContext(ThemeContext)
  return (
    <Container>
      <BackgroundHeader />
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <Icon name="keyboard-arrow-left" size={22} color={colors.white} />
        </BackButton>
        <Title>Perfil</Title>
      </Header>
      <InputContainer>
        <Label>Nome</Label>
        <Input placeholder="Digite seu Nome" />
      </InputContainer>
      <InputContainer>
        <Label>E-mail</Label>
        <Input placeholder="Digite seu E-mail" />
      </InputContainer>
      <InputContainerPass>
        <DadosPassword>
          <Label>Senha</Label>
          <Input placeholder="Digite sua Senha" />
        </DadosPassword>
        <Icon name="edit" size={24} color="#FFFFFF" />
      </InputContainerPass>
      <Exit>
        <ButtomExit>Sair da minha conta</ButtomExit>
        <Icon name="exit-to-app" size={24} color={colors.primary} />
      </Exit>
    </Container>
  )
}

export default Profile
