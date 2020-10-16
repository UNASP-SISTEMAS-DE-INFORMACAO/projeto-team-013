import axios from 'axios'

export const apiunasp = axios.create({
  baseURL: 'http://206.189.170.75:3001'
})

export const api = axios.create({
  baseURL: 'http://206.189.170.75:3000'
})
