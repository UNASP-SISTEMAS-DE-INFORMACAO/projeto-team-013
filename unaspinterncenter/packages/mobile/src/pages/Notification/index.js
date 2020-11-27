import React from 'react'
import { parseISO, format } from 'date-fns'
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
  NotificationsContainer
} from './styles'

import { connect } from 'react-redux'

const Notification = ({ notifications }) => {
  return (
    <Container>
      <BackgroundHeader />
      <Header>
        <User>Alexsander Genuino</User>
        <NotificationHeader> Notificações</NotificationHeader>
      </Header>
      <NotificationsContainer>
        {notifications.map(item => (
          <MessageNotification key={item.id}>
            <NotificationTittle>{item.title}</NotificationTittle>
            <NotificationText>{item.description}</NotificationText>
            <DateNotification>
              {format(
                parseISO(item.createdAt),
                "'Dia' dd 'de' MMMM', às ' HH:mm'h'"
              )}
            </DateNotification>
          </MessageNotification>
        ))}
      </NotificationsContainer>
    </Container>
  )
}

const mapStateToProps = state => ({
  loading: state.notifications.loading,
  error: state.notifications.error,
  notifications: state.notifications.notifications
})

export default connect(mapStateToProps, null)(Notification)
