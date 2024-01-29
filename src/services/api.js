import axios from 'axios'

export const api = axios.create({
  // dev url
  // baseURL: 'http://localhost:3333',

  // prod url
  baseURL: 'https://foodexplorer-api-nxjr.onrender.com',
  withCredentials: true,
})
