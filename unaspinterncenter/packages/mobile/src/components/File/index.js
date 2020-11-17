import React, { useContext } from 'react'
import { parseISO, format } from 'date-fns'

import Icon from 'react-native-vector-icons/MaterialIcons'
import { ThemeContext } from 'styled-components'

import { Container, Text, Content, Description, Button } from './styles'

const File = ({ filename, updated_at, handleUpdate, id }) => {
  const { colors } = useContext(ThemeContext)

  return (
    <Container>
      <Content>
        <Icon name="attach-file" size={72} color={colors.primary} />
        <Description>
          <Text>{filename.substring(0, 32 - 3) + '...'}</Text>
          <Text>
            {format(parseISO(updated_at), "'Dia' dd 'de' MMMM', às ' HH:mm'h'")}
          </Text>
        </Description>
      </Content>
      <Button onPress={() => handleUpdate(id)}>
        <Icon name="edit" size={22} color={colors.primary} />
      </Button>
    </Container>
  )
}

export default File
