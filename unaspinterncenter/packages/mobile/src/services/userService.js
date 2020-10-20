import api  from './api'

export const loadStudent = async ra => {
  const { data } = await api.get(`/users/${ra}`)
  return data
}
