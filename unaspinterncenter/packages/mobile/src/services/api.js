import axios from 'axios'

const api = axios.create({
  baseURL: 'http://206.189.170.75:3001'
})

export default api
