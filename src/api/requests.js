import axios from 'axios'

const baseURL = 'https://pokeapi.co/api/v2/'

export const makeRequest = ({
  url, method = 'get', data = {}, headers = {}
}) => axios({
  url,
  method,
  data,
  baseURL,
  headers
})
