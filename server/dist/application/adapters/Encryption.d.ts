import * as bcrypt from 'bcrypt';
export declare class EncryptionAdapter {
    private encryptionService;
    constructor(encryptionService?: typeof bcrypt);
    private readonly saltOrRounds;
    salt(): Promise<string>;
    hash(password: string): Promise<string>;
    match(password: string): Promise<boolean>;
}
