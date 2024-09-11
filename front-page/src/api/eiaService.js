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
  },
  // 新增 AEO 資料的 fetch 函數
  getAeoData(route1, params) {
    return apiClient.get(`/aeo/${route1}/data`, {
      params: {
        api_key: API_KEY,
        ...params
      }
    })
  },
  // 新增 IEO 資料的 fetch 函數
  getIeoData(route1, params) {
    return apiClient.get(`/ieo/${route1}/data`, {
      params: {
        api_key: API_KEY,
        ...params
      }
    })
  }
}
