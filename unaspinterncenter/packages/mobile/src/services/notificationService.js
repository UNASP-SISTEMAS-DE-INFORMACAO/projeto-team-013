import api from './api'

export const loadNotifications = async ra => {
  const { data } = await api.get(`/users/${ra}/notifications`)
  return data
}
