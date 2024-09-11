import axios from "axios";

const API_KEY = "EsdzNkb5xuHlNiQuQKJah7OQmCfCCpflBhNYgKJM";
const BASE_URL = "https://api.eia.gov/v2";

export const fetchData = async (route, params = {}) => {
  try {
    const response = await axios.get(`${BASE_URL}/${route}`, {
      params: {
        api_key: API_KEY,
        ...params,
      },
    });
    return response.data;
  } catch (error) {
    console.error("API fetch error:", error);
    throw error;
  }
};
