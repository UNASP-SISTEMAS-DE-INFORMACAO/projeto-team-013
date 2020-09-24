import axios from 'axios'

export const apiunasp = axios.create({
  baseURL: 'http://:3001'
})

export const api = axios.create({
  baseURL: 'http://:3000'
})
