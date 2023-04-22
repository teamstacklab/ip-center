import { COMUNICATES, CREATE, UPDATE, DELETE } from "../util/constants";


export class ComunicateRoutes {
  all() {
    return `${COMUNICATES}`;
  }
  create() {
    return `${COMUNICATES}/${CREATE}`;
  }
  update(id) {
    return `${COMUNICATES}/${UPDATE}/${id}`;
  }
  delete(id) {
    return `${COMUNICATES}/${DELETE}/${id}`;
  }
}