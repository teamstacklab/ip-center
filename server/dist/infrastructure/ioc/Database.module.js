"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const User_entity_1 = require("../../domain/models/User.entity");
const EnvService_1 = require("../environments/EnvService");
const typeorm_provider_1 = require("../database/providers/typeorm/typeorm.provider");
const Env_module_1 = require("./Env.module");
let DatabaseModule = class DatabaseModule {
};
DatabaseModule = __decorate([
    (0, common_1.Module)({
        providers: [typeorm_provider_1.TypeOrmProvider, EnvService_1.EnvService],
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                useClass: typeorm_provider_1.TypeOrmProvider,
                imports: [Env_module_1.EnvModule],
                inject: [EnvService_1.EnvService],
            }),
            typeorm_1.TypeOrmModule.forFeature([User_entity_1.User])
        ],
        exports: [typeorm_provider_1.TypeOrmProvider]
    })
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;
//# sourceMappingURL=Database.module.js.map