"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var EncryptionService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncryptionService = void 0;
const bcrypt = require("bcrypt");
const common_1 = require("@nestjs/common");
let EncryptionService = EncryptionService_1 = class EncryptionService {
    constructor() {
        this.encryption = bcrypt;
        this.logger = new common_1.Logger(EncryptionService_1.name);
    }
    async hash(value) {
        this.logger.log(`generates a hash`);
        return await this.encryption.hash(value, await this.encryption.genSalt());
    }
    async compare(value, hash) {
        this.logger.log(`compares a value with a hash`);
        return await this.encryption.compare(value, hash);
    }
};
EncryptionService = EncryptionService_1 = __decorate([
    (0, common_1.Injectable)()
], EncryptionService);
exports.EncryptionService = EncryptionService;
//# sourceMappingURL=Encription.service.js.map