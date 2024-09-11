import axios from 'axios'

const API_KEY = import.meta.env.VITE_API_KEY
const BASE_URL = 'https://api.eia.gov/v2'

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default {
  getRetailSales(stateId, sectorId, frequency) {
    return apiClient.get(`/electricity/retail-sales/data`, {
      params: {
        api_key: API_KEY,
        'facets[stateid][]': stateId,
        'facets[sectorid][]': sectorId,
        frequency: frequency
      }
    })
  }
}
