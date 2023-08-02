"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOrmProvider = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const config_1 = require("@nestjs/config");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
let TypeOrmProvider = class TypeOrmProvider {
    constructor() {
        this.env = new config_1.ConfigService();
    }
    buildDataSourceOptions() {
        return {
            type: 'postgres',
            url: this.env.get('DB_URL'),
            entities: ['dist/**/*.entity.js'],
            synchronize: false,
        };
    }
    createTypeOrmOptions() {
        return this.buildDataSourceOptions();
    }
};
TypeOrmProvider = __decorate([
    (0, common_1.Injectable)()
], TypeOrmProvider);
exports.TypeOrmProvider = TypeOrmProvider;
const dataSource = new typeorm_1.DataSource(new TypeOrmProvider().buildDataSourceOptions());
exports.default = dataSource;
//# sourceMappingURL=typeorm.provider.js.map