export interface IEncryptionService {
  generateHash(value: string): Promise<string>;
  compareWithHash(value: string): Promise<boolean>;
}