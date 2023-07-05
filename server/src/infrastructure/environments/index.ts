import { ConfigService } from "@nestjs/config";

const config = new ConfigService();

export function getEnv(varName: string): any {
  return config.get(varName);
}

export function getEnvFilePath(): string[] {
  const envPath = './';
  return [
    envPath + `.test.env`,
    envPath + '.env',
    envPath + '.production.env',
  ];
}