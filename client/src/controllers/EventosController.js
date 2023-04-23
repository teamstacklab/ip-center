import { ApiInstance, EventRoutes } from "../api";

export class EventosController {
  eventos = new EventRoutes();

  async getAllEventos() {
    const response = await ApiInstance(this.eventos.all());
  }
}