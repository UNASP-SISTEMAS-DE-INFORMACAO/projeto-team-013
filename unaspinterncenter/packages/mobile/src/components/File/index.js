import React, { useContext } from 'react'
import { parseISO, format } from 'date-fns'

import Icon from 'react-native-vector-icons/MaterialIcons'
import { ThemeContext } from 'styled-components'

import { Container, Text, Content, Description, Button } from './styles'

const File = ({
  filename,
  updated_at,
  handleUpdate,
  file_delivery_id,
  handleFilePress
}) => {
  const { colors } = useContext(ThemeContext)

  return (
    <Container>
      <Content>
        <Button onPress={() => handleFilePress()}>
          <Icon name="attach-file" size={72} color={colors.primary} />
        </Button>
        <Description>
          <Text>{filename.substring(0, 32 - 3) + '...'}</Text>
          <Text>
            {format(parseISO(updated_at), "'Dia' dd 'de' MMMM', às ' HH:mm'h'")}
          </Text>
        </Description>
      </Content>
      <Button onPress={() => handleUpdate(file_delivery_id)}>
        <Icon name="edit" size={22} color={colors.primary} />
      </Button>
    </Container>
  )
}

export default File
