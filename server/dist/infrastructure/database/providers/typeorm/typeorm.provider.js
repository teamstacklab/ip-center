"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOrmProvider = void 0;
const EnvService_1 = require("../../../environments/EnvService");
const common_1 = require("@nestjs/common");
let TypeOrmProvider = class TypeOrmProvider {
    constructor(envService) {
        this.envService = envService;
    }
    createTypeOrmOptions() {
        return {
            type: "postgres",
            host: this.envService.getVariable('DB_HOST'),
            port: parseInt(this.envService.getVariable('DB_PORT')),
            username: this.envService.getVariable('DB_USER'),
            password: this.envService.getVariable('DB_PASS'),
            database: this.envService.getVariable('DB_NAME'),
            entities: [
                'dist/**/*.entity.{js, ts}'
            ],
            migrations: [
                'dist/**/migrations/**/*.{js, ts}'
            ],
            logger: 'file',
        };
    }
};
TypeOrmProvider = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [EnvService_1.EnvService])
], TypeOrmProvider);
exports.TypeOrmProvider = TypeOrmProvider;
//# sourceMappingURL=typeorm.provider.js.map