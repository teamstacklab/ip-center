import { CREATE, DELETE, UPDATE, COMUNICATES } from "../api/util/constants"
import { ApiInstance } from "../api";

export class ComunicatesController {
  async getAll() {
    const comunicates = await ApiInstance(`${COMUNICATES}`).then((res) => { return res.data });
    return comunicates;
  }
}