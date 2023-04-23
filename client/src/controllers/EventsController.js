import { EVENTS, CREATE, DELETE, UPDATE } from "../api/util/constants"
import { ApiInstance } from "../api";

export class EventsController {
  async getAll() {
    const events = await ApiInstance(`${EVENTS}`).then((res) => { return res.data });
    return events;
  }
}