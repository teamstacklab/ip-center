"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEnvFilePath = exports.getEnv = void 0;
const config_1 = require("@nestjs/config");
const config = new config_1.ConfigService();
function getEnv(varName) {
    return config.get(varName);
}
exports.getEnv = getEnv;
function getEnvFilePath() {
    const envPath = './';
    return [
        envPath + `.test.env`,
        envPath + '.env',
        envPath + '.production.env',
    ];
}
exports.getEnvFilePath = getEnvFilePath;
//# sourceMappingURL=index.js.map