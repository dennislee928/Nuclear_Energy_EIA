<template>
  <div>
    <h1>IEO Data</h1>
    <pre>{{ ieoData }}</pre>
  </div>
</template>

<script>
import eiaService from '../api/eiaService'

export default {
  data() {
    return {
      ieoData: null,
      route1: '2021', // 設置為特定的 IEO 年份或數據集名稱
      params: {
        // 根據實際情況設置查詢參數
      }
    }
  },
  created() {
    this.fetchIeoData()
  },
  methods: {
    async fetchIeoData() {
      try {
        const response = await eiaService.getIeoData(this.route1, this.params)
        this.ieoData = response.data
      } catch (error) {
        console.error('Error fetching IEO data:', error)
      }
    }
  }
}
</script>
