import { USERS, CREATE, UPDATE, DELETE } from "../util/constants";


export class UserRoutes {
  all() {
    return `${USERS}`;
  }
  create() {
    return `${USERS}/${CREATE}`;
  }
  update(id) {
    return `${USERS}/${UPDATE}/${id}`;
  }
  delete(id) {
    return `${USERS}/${DELETE}/${id}`;
  }
}