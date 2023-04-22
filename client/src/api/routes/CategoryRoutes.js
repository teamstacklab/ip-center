import { CATEGORIES, CREATE, UPDATE, DELETE } from "../util/constants";

export class CategoryRoutes {
  all() {
    return `${CATEGORIES}`;
  }
  create() {
    return `${CATEGORIES}/${CREATE}`;
  }
  update(id) {
    return `${CATEGORIES}/${UPDATE}/${id}`;
  }
  delete(id) {
    return `${CATEGORIES}/${DELETE}/${id}`;
  }
}