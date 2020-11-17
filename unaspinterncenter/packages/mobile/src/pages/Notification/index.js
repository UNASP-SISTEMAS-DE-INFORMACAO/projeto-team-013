import React from 'react'

// import Icon from 'react-native-vector-icons/MaterialIcons'
import {
  Container,
  BackgroundHeader,
  Header,
  User,
  NotificationHeader,
  NotificationTittle,
  MessageNotification,
  NotificationText,
  DateNotification,
  NotificationList
} from './styles'

Lista = {
  notificacoes: [
    {
      Titulo: 'Termo de Compromisso',
      Texto: 'Seu Termo de Compromisso enviado foi aprovado',
      Data: '10/12/2020',
      id: 1
    },
    {
      Titulo: 'Termo de Compromisso',
      Texto: 'Seu Termo de Compromisso enviado foi aprovado',
      Data: '10/11/2020',
      id: 2
    },
    {
      Titulo: 'Termo de Compromisso',
      Texto: 'Seu Termo de Compromisso enviado foi aprovado',
      Data: '10/11/2020',
      id: 3
    },
    {
      Titulo: 'Termo de Compromisso',
      Texto: 'Seu Termo de Compromisso enviado foi aprovado',
      Data: '10/11/2020',
      id: 3
    },
    {
      Titulo: 'Termo de Compromisso',
      Texto: 'Seu Termo de Compromisso enviado foi aprovado',
      Data: '10/11/2020',
      id: 3
    },
    {
      Titulo: 'Termo de Compromisso',
      Texto: 'Seu Termo de Compromisso enviado foi aprovado',
      Data: '10/11/2020',
      id: 3
    },
    {
      Titulo: 'Termo de Compromisso',
      Texto: 'Seu Termo de Compromisso enviado foi aprovado',
      Data: '10/11/2020',
      id: 3
    },
    {
      Titulo: 'Termo de Compromisso',
      Texto: 'Seu Termo de Compromisso enviado foi aprovado',
      Data: '10/11/2020',
      id: 3
    }
  ]
}

const Notification = ({ navigation }) => {
  return (
    <Container>
      <BackgroundHeader />
      <Header>
        <User>Alexsander Genuino</User>
        <NotificationHeader> Notificações</NotificationHeader>
      </Header>
      <NotificationList>
        {this.Lista.notificacoes.map((item, index) => (
          <MessageNotification key={item.id}>
            <NotificationTittle>{item.Titulo}</NotificationTittle>
            <NotificationText>{item.Texto}</NotificationText>
            <DateNotification>{item.Data}</DateNotification>
          </MessageNotification>
        ))}
      </NotificationList>
    </Container>
  )
}
export default Notification
