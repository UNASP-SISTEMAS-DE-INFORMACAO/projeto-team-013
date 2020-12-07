import React, { useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'

import NoData from '../../components/NoData'
import NotificationComponent from '../../components/NotificationComponent'

import {
  Container,
  BackgroundHeader,
  Header,
  NotificationHeader
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
      if (notification.seen === false) {
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
        <NotificationHeader>Notificações</NotificationHeader>
      </Header>
      {notifications.length > 0 ? (
        notifications.map(item => (
          <NotificationComponent
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))
      ) : (
        <NoData text="Você não possui notificações" />
      )}
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
