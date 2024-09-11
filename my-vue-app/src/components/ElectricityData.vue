<template>
  <div>
    <h1>電力銷售數據</h1>
    <div v-if="loading">載入中...</div>
    <div v-else>
      <table>
        <thead>
          <tr>
            <th>期間</th>
            <th>州</th>
            <th>部門</th>
            <th>價格 (每千瓦時分)</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in data"
            :key="item.period + item.stateid + item.sectorid"
          >
            <td>{{ item.period }}</td>
            <td>{{ item.stateDescription }}</td>
            <td>{{ item.sectorName }}</td>
            <td>{{ item.price }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { fetchData } from "../services/apiService";

export default {
  name: "ElectricityData",
  setup() {
    const data = ref([]);
    const loading = ref(true);

    const loadElectricityData = async () => {
      try {
        const response = await fetchData("electricity/retail-sales/data", {
          data: ["price"],
          facets: {
            sectorid: ["RES"],
            stateid: ["CO"],
          },
          frequency: "monthly",
        });
        data.value = response.data;
      } catch (error) {
        console.error("Error loading electricity data:", error);
      } finally {
        loading.value = false;
      }
    };

    onMounted(loadElectricityData);

    return {
      data,
      loading,
    };
  },
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  background-color: #f2f2f2;
}
</style>
