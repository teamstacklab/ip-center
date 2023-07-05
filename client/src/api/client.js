import axios from "axios";

export const client = axios.create({
  baseURL: "localhost:5000/api"
});
