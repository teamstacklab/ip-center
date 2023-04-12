import { ConfigService } from "@nestjs/config";
export declare class EnvConfig {
    private config;
    constructor(config: ConfigService);
    getVariable(variable: string): any;
}
