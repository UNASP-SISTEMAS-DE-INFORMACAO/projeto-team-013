import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {
  Container,
  BackgroundHeader,
  Header,
  Title,
  InputContainer,
  Label,
  Input,
  Exit,
  ButtomExit,
  InputContainerPass,
  DadosPassword
} from './styles'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import AuthActions from '../../store/ducks/auth'

const Profile = ({ name, email, signOutRequest }) => {
  const { colors } = useContext(ThemeContext)
  return (
    <Container>
      <BackgroundHeader />
      <Header>
        <Title>Perfil</Title>
      </Header>
      <InputContainer>
        <Label>Nome</Label>
        <Input value={name} editable={false} placeholder="Digite seu Nome" />
      </InputContainer>
      <InputContainer>
        <Label>E-mail</Label>
        <Input value={email} editable={false} placeholder="Digite seu E-mail" />
      </InputContainer>
      <InputContainerPass>
        <DadosPassword>
          <Label>Senha</Label>
          <Input
            value={'***********'}
            editable={false}
            placeholder="Digite sua Senha"
          />
        </DadosPassword>
        <Icon name="edit" size={24} color="#FFFFFF" />
      </InputContainerPass>
      <Exit onPress={() => signOutRequest()}>
        <ButtomExit>Sair da minha conta</ButtomExit>
        <Icon name="exit-to-app" size={24} color={colors.primary} />
      </Exit>
    </Container>
  )
}

const mapStateToProps = state => ({
  name: state.user.name,
  email: state.user.email
})

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
