<template>
  <div>
    <h1>Retail Sales of Electricity</h1>
    <form @submit.prevent="fetchData">
      <label for="state">State ID:</label>
      <select v-model="stateId" id="state" required>
        <option v-for="state in states" :key="state.id" :value="state.id">
          {{ state.name }}
        </option>
      </select>

      <label for="sector">Sector ID:</label>
      <select v-model="sectorId" id="sector" required>
        <option v-for="sector in sectors" :key="sector.id" :value="sector.id">
          {{ sector.alias }}
        </option>
      </select>

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
      <table>
        <thead>
          <tr>
            <th>Period</th>
            <th>State ID</th>
            <th>State Description</th>
            <th>Sector ID</th>
            <th>Sector Name</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in data.response.data" :key="item.period + item.stateid + item.sectorid">
            <td>{{ item.period }}</td>
            <td>{{ item.stateid }}</td>
            <td>{{ item.stateDescription }}</td>
            <td>{{ item.sectorid }}</td>
            <td>{{ item.sectorName }}</td>
          </tr>
        </tbody>
      </table>
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
      data: null,
      sectors: [
        { id: 'COM', name: 'commercial', alias: '(COM) commercial' },
        { id: 'RES', name: 'residential', alias: '(RES) residential' },
        { id: 'ALL', name: 'all sectors', alias: '(ALL) all sectors' },
        { id: 'OTH', name: 'other', alias: '(OTH) other' },
        { id: 'TRA', name: 'transportation', alias: '(TRA) transportation' },
        { id: 'IND', name: 'industrial', alias: '(IND) industrial' }
      ],
      states: [
        { id: 'AL', name: 'Alabama' },
        { id: 'AK', name: 'Alaska' },
        { id: 'AZ', name: 'Arizona' },
        { id: 'AR', name: 'Arkansas' },
        { id: 'CA', name: 'California' },
        { id: 'CO', name: 'Colorado' },
        { id: 'CT', name: 'Connecticut' },
        { id: 'DE', name: 'Delaware' },
        { id: 'DC', name: 'District of Columbia' },
        { id: 'FL', name: 'Florida' },
        { id: 'GA', name: 'Georgia' },
        { id: 'HI', name: 'Hawaii' },
        { id: 'ID', name: 'Idaho' },
        { id: 'IL', name: 'Illinois' },
        { id: 'IN', name: 'Indiana' },
        { id: 'IA', name: 'Iowa' },
        { id: 'KS', name: 'Kansas' },
        { id: 'KY', name: 'Kentucky' },
        { id: 'LA', name: 'Louisiana' },
        { id: 'ME', name: 'Maine' },
        { id: 'MD', name: 'Maryland' },
        { id: 'MA', name: 'Massachusetts' },
        { id: 'MI', name: 'Michigan' },
        { id: 'MN', name: 'Minnesota' },
        { id: 'MS', name: 'Mississippi' },
        { id: 'MO', name: 'Missouri' },
        { id: 'MT', name: 'Montana' },
        { id: 'NE', name: 'Nebraska' },
        { id: 'NV', name: 'Nevada' },
        { id: 'NH', name: 'New Hampshire' },
        { id: 'NJ', name: 'New Jersey' },
        { id: 'NM', name: 'New Mexico' },
        { id: 'NY', name: 'New York' },
        { id: 'NC', name: 'North Carolina' },
        { id: 'ND', name: 'North Dakota' },
        { id: 'OH', name: 'Ohio' },
        { id: 'OK', name: 'Oklahoma' },
        { id: 'OR', name: 'Oregon' },
        { id: 'PA', name: 'Pennsylvania' },
        { id: 'RI', name: 'Rhode Island' },
        { id: 'SC', name: 'South Carolina' },
        { id: 'SD', name: 'South Dakota' },
        { id: 'TN', name: 'Tennessee' },
        { id: 'TX', name: 'Texas' },
        { id: 'UT', name: 'Utah' },
        { id: 'VT', name: 'Vermont' },
        { id: 'VA', name: 'Virginia' },
        { id: 'WA', name: 'Washington' },
        { id: 'WV', name: 'West Virginia' },
        { id: 'WI', name: 'Wisconsin' },
        { id: 'WY', name: 'Wyoming' }
      ]
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
