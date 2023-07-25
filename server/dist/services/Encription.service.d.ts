import { IEncryptionService } from 'domain/interfaces/IEncryption';
export declare class EncryptionService implements IEncryptionService {
    private readonly encryption;
    private readonly logger;
    hash(value: string): Promise<string>;
    compare(value: string, hash: string): Promise<boolean>;
}
