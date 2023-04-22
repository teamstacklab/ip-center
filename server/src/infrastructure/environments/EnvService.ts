import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class EnvService {
  constructor(private config: ConfigService) {}
  getVariable(variable: string) {
    return this.config.get(variable)
  }
}