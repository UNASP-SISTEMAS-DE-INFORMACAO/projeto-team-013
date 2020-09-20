import api from './api'

class RaServices {
  async getStudent(RA) {
    const { data } = await api.get(`/students?ra=${RA}`)
    return data
  }
}

export default new RaServices()
