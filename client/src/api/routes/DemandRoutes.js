import { DEMANDS, AUTHORIZATE, REJECT } from "../util/constants";

export class DemandRoutes {
  all() {
    return `${USERS}`;
  }
  authorize(id) {
    return `${DEMANDS}/${AUTHORIZATE}/${id}`;
  }
  reject(id) {
    return `${DEMANDS}/${REJECT}/${id}`;
  }
}