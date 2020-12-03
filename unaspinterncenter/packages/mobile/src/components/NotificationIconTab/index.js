import React, { useContext, useMemo, useEffect, useState } from 'react'
import socketio from 'socket.io-client'
import { TouchableWithoutFeedback } from 'react-native'
import { ThemeContext } from 'styled-components'
import { MaterialIcons } from '@expo/vector-icons'

import { Button, Notifications } from './styles'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import NotificationsActions from '../../store/ducks/notifications'

const NotificationIconTab = ({
  onPress,
  focused,
  notifications,
  user_id,
  addNotification
}) => {
  const socket = useMemo(
    () =>
      socketio('http://carloshenr1que.ddns.net:3000', {
        query: {
          user_id
        }
      }),
    [user_id]
  )

  useEffect(() => {
    socket.on('notification', notification => {
      addNotification(notification)
    })
  }, [socket])

  const [unreadCount, setUnreadCount] = useState()

  useEffect(() => {
    var count = 0
    notifications.map(notification => {
      if (notification.seen == false) {
        count++
      }
    })
    setUnreadCount(count)
  }, [notifications])

  const { colors } = useContext(ThemeContext)
  return (
    <TouchableWithoutFeedback onPress={() => onPress()}>
      <Button focused={focused}>
        {unreadCount > 0 && <Notifications>{unreadCount}</Notifications>}
        <MaterialIcons
          name="notifications"
          size={22}
          color={focused ? colors.primary : colors.regular}
        />
      </Button>
    </TouchableWithoutFeedback>
  )
}

const mapStateToProps = state => ({
  loading: state.notifications.loading,
  error: state.notifications.error,
  notifications: state.notifications.notifications,
  user_id: state.auth.ra
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(NotificationsActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(NotificationIconTab)
