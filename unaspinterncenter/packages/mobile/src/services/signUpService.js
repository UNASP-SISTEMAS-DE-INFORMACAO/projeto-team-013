import api, { apiunasp } from './api'

export const findStudentByRA = async ra => {
  const { data } = await apiunasp.get(`/students?ra=${ra}`)
  return data[0]
}

export const create = async student => {
  const { data } = await api.post(`/users`, {
    ra: student.ra,
    name: student.name,
    email: student.email,
    password: student.password,
    id_course: student.id_course
  })

  return data
}
