import * as bcrypt from 'bcrypt';
import { Injectable, Logger } from '@nestjs/common';
import { IEncryptionService } from '../domain/interfaces/IEncryption';

@Injectable()
export class EncryptionService implements IEncryptionService {
  private readonly encryption = bcrypt;

  private readonly logger = new Logger(EncryptionService.name);

  async hash(value: string): Promise<string> {
    this.logger.log(`generates a hash`);
    return await this.encryption.hash(value, await this.encryption.genSalt());
  }

  async compare(value: string, hash: string): Promise<boolean> {
    this.logger.log(`compares a value with a hash`);
    return await this.encryption.compare(value, hash);
  }
}
