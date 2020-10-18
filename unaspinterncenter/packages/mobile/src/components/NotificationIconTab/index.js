/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import { ThemeContext } from 'styled-components'
import { MaterialIcons } from '@expo/vector-icons'

import { Button, Notifications } from './styles'

const NotificationIconTab = ({ onPress, focused }) => {
  const notification = 8
  const { colors } = useContext(ThemeContext)
  return (
    <TouchableWithoutFeedback onPress={() => onPress()}>
      <Button focused={focused}>
        {notification > 0 && <Notifications>{notification}</Notifications>}
        <MaterialIcons
          name="notifications"
          size={22}
          color={focused ? colors.primary : colors.regular}
        />
      </Button>
    </TouchableWithoutFeedback>
  )
}

export default NotificationIconTab
