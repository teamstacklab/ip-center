import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt'

@Injectable()
export class EncryptionAdapter {
    constructor(private encryptionService = bcrypt) { }

    private readonly saltOrRounds = 10;

    async salt() {
        return await this.encryptionService.genSalt();
    }

    async hash(password: string) {
        return this.encryptionService.hash(password, this.saltOrRounds)
    }

    async match(password: string) {
        return this.encryptionService.compare(password, await this.hash(password))
    }
}