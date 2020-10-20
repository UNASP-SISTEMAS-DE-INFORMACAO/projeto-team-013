/* eslint-disable camelcase */
import api from './api'

export const listModules = async id_course => {
  const { data } = await api.get(`/modules?course=${id_course}`)
  return data
}
