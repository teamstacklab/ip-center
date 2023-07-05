import axios from "axios";
import { PORT } from "./util/constants";


export const ApiInstance = axios.create({
  baseURL: `http://localhost:${PORT}/`
});