import api from './api'
import jwt_decode from 'jwt-decode'

export const signIn = async (email, password) => {
  const { data } = await api.post('/auth', {
    email: email,
    password: password
  })

  return data
}

export const decode = token => {
  return jwt_decode(token)
}
