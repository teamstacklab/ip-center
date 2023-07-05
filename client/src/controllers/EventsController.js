import { CREATE, DELETE, UPDATE, EVENTS } from "../api/util/constants"
import { ApiInstance } from "../api";

export class EventsController {
  getAll() {
    try {
      return ApiInstance(`${EVENTS}`);
    } catch (err) {
      throw new Error(err);
    }
  }
}