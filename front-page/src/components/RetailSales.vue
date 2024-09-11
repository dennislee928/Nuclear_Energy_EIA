<template>
  <div>
    <h1>Retail Sales of Electricity</h1>
    <form @submit.prevent="fetchData">
      <label for="state">State ID:</label>
      <input v-model="stateId" id="state" required />

      <label for="sector">Sector ID:</label>
      <input v-model="sectorId" id="sector" required />

      <label for="frequency">Frequency:</label>
      <select v-model="frequency" id="frequency" required>
        <option value="monthly">Monthly</option>
        <option value="quarterly">Quarterly</option>
        <option value="annual">Annual</option>
      </select>

      <button type="submit">Fetch Data</button>
    </form>

    <div v-if="data">
      <h2>Results:</h2>
      <pre>{{ data }}</pre>
    </div>
  </div>
</template>

<script>
import eiaService from '@/api/eiaService'

export default {
  data() {
    return {
      stateId: '',
      sectorId: '',
      frequency: 'monthly',
      data: null
    }
  },
  methods: {
    async fetchData() {
      console.log('api_key=' + import.meta.env.API_KEY)
      try {
        const response = await eiaService.getRetailSales(
          this.stateId,
          this.sectorId,
          this.frequency
        )
        this.data = response.data
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
  }
}
</script>
