import { CREATE, DELETE, UPDATE, COMUNICATES } from "../api/util/constants"
import { ApiInstance } from "../api";

export class ComunicatesController {
  getAll() {
    try {
      return ApiInstance(`${COMUNICATES}`);
    } catch (err) {
      throw new Error(err);
    }
  }
}