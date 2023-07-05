import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt'

@Injectable()
export class EncryptionAdapter {
    private readonly encryptionService = bcrypt;
    private readonly saltRounds = 10;

    async hash(password: string) {
        return this.encryptionService.hash(password, this.saltRounds)
    }

    async match(password: string) {
        return this.encryptionService.compare(password, await this.hash(password))
    }
    async compare(password:string, hash: string) {
        return this.encryptionService.compare(password, hash);
    }
}