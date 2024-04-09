import axios from "axios";
import { API_URL } from "./config";

const ApiService = {
  async get(endpoint) {
    try {
      const response = await axios.get(`${API_URL}/${endpoint}`);
      return response.data;
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  },
};

export default ApiService;
