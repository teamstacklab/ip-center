import axios from "axios";
import { PORT } from "./util/constants";
import { UserRoutes } from "./routes/UserRoutes";
import { DemandRoutes } from "./routes/DemandRoutes";
import { EventRoutes } from "./routes/EventRoutes";
import { ComunicateRoutes } from "./routes/ComunicateRoutes";
import { CategoryRoutes } from "./routes/CategoryRoutes";


export const ApiInstance = axios.create({
  baseURL: `http://localhost:${PORT}`
});

export { 
  UserRoutes,
  DemandRoutes,
  EventRoutes,
  ComunicateRoutes,
  CategoryRoutes
}