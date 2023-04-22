import { EVENTS, CREATE, UPDATE, DELETE } from "../util/constants";


export class EventRoutes {
  all() {
    return `${EVENTS}`;
  }
  create() {
    return `${EVENTS}/${CREATE}`;
  }
  update(id) {
    return `${EVENTS}/${UPDATE}/${id}`;
  }
  delete(id) {
    return `${EVENTS}/${DELETE}/${id}`;
  }
}