<template>
  <div>
    <h1>IEO Data</h1>
    <button @click="fetchIeoData">fetch IEO Data</button>
    <pre>{{ ieoData }}</pre>
  </div>
</template>

<script>
import eiaService from '../api/eiaService'

export default {
  data() {
    return {
      ieoData: null,
      route1: 'someRoute', // 根據實際情況設置
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
      console.log('IEO START.')
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
