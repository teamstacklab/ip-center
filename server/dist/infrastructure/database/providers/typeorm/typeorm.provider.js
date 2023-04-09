"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOrmProvider = void 0;
const environments_1 = require("../../../environments");
const common_1 = require("@nestjs/common");
let TypeOrmProvider = class TypeOrmProvider {
    createTypeOrmOptions() {
        return {
            type: "postgres",
            host: (0, environments_1.getEnv)('DB_HOST'),
            port: parseInt((0, environments_1.getEnv)('DB_PORT')),
            username: (0, environments_1.getEnv)('DB_USER'),
            password: (0, environments_1.getEnv)('DB_PASS'),
            database: (0, environments_1.getEnv)('DB_NAME'),
            entities: [
                'dist/**/*.entity.{js, ts}'
            ],
            migrations: [
                'dist/**/migrations/**/*.{js, ts}'
            ],
            logger: 'file',
            synchronize: true,
        };
    }
};
TypeOrmProvider = __decorate([
    (0, common_1.Injectable)()
], TypeOrmProvider);
exports.TypeOrmProvider = TypeOrmProvider;
//# sourceMappingURL=typeorm.provider.js.map