import React, { useContext } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { ThemeContext } from 'styled-components'

import {
  Container,
  BackgroundHeader,
  Header,
  Title,
  BackButton,
  InputContainer,
  Input,
  SearchButton,
  SimpleList,
  Type,
  TypeText,
  JobsContainer,
  Job
} from './styles'

const Internships = ({ navigation }) => {
  const { colors } = useContext(ThemeContext)

  const types = [
    {
      title: 'Desenvolvimento'
    },
    {
      title: 'Suporte'
    }
  ]

  return (
    <Container>
      <BackgroundHeader />
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <Icon name="keyboard-arrow-left" size={22} color={colors.white} />
        </BackButton>
        <Title>Estágios</Title>
      </Header>

      <InputContainer>
        <Input placeholder="Oque você procura ?" />
        <SearchButton>
          <Icon name="search" size={22} color={colors.primary} />
        </SearchButton>
      </InputContainer>
      <SimpleList
        horizontal={true}
        data={types}
        renderItem={({ item }) => (
          <Type key={item.title}>
            <TypeText>{item.title}</TypeText>
          </Type>
        )}
      />
      <JobsContainer>
        <Job />
        <Job />
        <Job />
      </JobsContainer>
    </Container>
  )
}

export default Internships
