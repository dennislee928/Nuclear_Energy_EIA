<template>
  <div>
    <h1>AEO Data</h1>
    <pre>{{ aeoData }}</pre>
  </div>
</template>

<script>
import eiaService from '../api/eiaService'

export default {
  data() {
    return {
      aeoData: null,
      route1: 'someRoute', // 根據實際情況設置
      params: {
        // 根據實際情況設置查詢參數
      }
    }
  },
  created() {
    this.fetchAeoData()
  },
  methods: {
    async fetchAeoData() {
      try {
        const response = await eiaService.getAeoData(this.route1, this.params)
        this.aeoData = response.data
      } catch (error) {
        console.error('Error fetching AEO data:', error)
      }
    }
  }
}
</script>
