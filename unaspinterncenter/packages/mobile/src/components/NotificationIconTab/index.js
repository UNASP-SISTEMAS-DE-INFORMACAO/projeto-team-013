import React, { useContext, useMemo, useEffect } from 'react'
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
      socketio('http://192.168.15.72:3000', {
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

  const unreadCount = useMemo(
    () => notifications.map(notification => notification.seen === false),
    [notifications]
  )

  const { colors } = useContext(ThemeContext)
  return (
    <TouchableWithoutFeedback onPress={() => onPress()}>
      <Button focused={focused}>
        {unreadCount.length > 0 && (
          <Notifications>{unreadCount.length}</Notifications>
        )}
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
