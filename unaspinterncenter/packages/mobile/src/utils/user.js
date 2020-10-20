import { AsyncStorage } from 'react-native'

export const getToken = async () => {
  const token = await AsyncStorage.getItem('@AUTH_TOKEN')
  return JSON.parse(token)
}

export const getUserRa = async () => {
  const id = await AsyncStorage.getItem('@USER_ID')
  return JSON.parse(id)
}

export const saveUser = async (token, id) => {
  await AsyncStorage.setItem('@AUTH_TOKEN', JSON.stringify(token))
  await AsyncStorage.setItem('@USER_ID', JSON.stringify(id))
}

export const destroyToken = async () => {
  await AsyncStorage.clear()
}
