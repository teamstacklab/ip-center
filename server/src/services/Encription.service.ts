import * as bcrypt from "bcrypt";
import { Injectable } from "@nestjs/common";
import { IEncryptionService } from "domain/interfaces/IEncryption";


@Injectable()
export class EncryptionService implements IEncryptionService {
  private readonly encryption = bcrypt;

  async generateHash(value: string): Promise<string> {
    return this.encryption.hash(value, await this.encryption.genSalt());
  }

  async compareWithHash(value: string): Promise<boolean> {
    return await this.encryption.compare(value, await this.generateHash(value));
  }
}