import { ConfigService } from "@nestjs/config";
export declare class EnvService {
    private config;
    constructor(config: ConfigService);
    getVariable(variable: string): any;
}
