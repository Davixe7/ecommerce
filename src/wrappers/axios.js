import axios from 'axios'

const api = axios.create({
  baseURL: 'https://fakestoreapi.com/',
  timeout: 2000,
  headers: {}
})

export {api}