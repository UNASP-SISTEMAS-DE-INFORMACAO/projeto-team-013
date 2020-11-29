import api from './api'

export const loadNotifications = async ra => {
  const { data } = await api.get(`/users/${ra}/notifications`)
  return data
}

export const setNotifications = async (ra, notifications) => {
  const { data } = await api.patch(`/users/${ra}/notifications`, {
    notifications
  })
  return data
}
