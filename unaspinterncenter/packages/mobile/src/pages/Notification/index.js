import React, { useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'
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
import { bindActionCreators } from 'redux'

import NotificationsActions from '../../store/ducks/notifications'

const Notification = ({ notifications, setNotificationsSeenRequest }) => {
  useFocusEffect(
    useCallback(() => {
      setNotificationSeen()
    })
  )

  function setNotificationSeen() {
    const unReadNotifications = []
    notifications.map(notification => {
      if (notification.seen == false) {
        unReadNotifications.push({
          id: notification.id
        })
      }
    })
    if (unReadNotifications.length > 0) {
      return setNotificationsSeenRequest(unReadNotifications)
    }
  }

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

const mapDispatchToProps = dispatch =>
  bindActionCreators(NotificationsActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Notification)
