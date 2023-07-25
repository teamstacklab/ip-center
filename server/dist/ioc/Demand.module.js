"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DemandModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Demand_service_1 = require("../services/Demand.service");
const Demand_entity_1 = require("../domain/entities/Demand.entity");
const Demand_controller_1 = require("../controllers/Demand.controller");
const User_module_1 = require("./User.module");
const config_1 = require("@nestjs/config");
let DemandModule = class DemandModule {
};
DemandModule = __decorate([
    (0, common_1.Module)({
        imports: [User_module_1.UserModule, typeorm_1.TypeOrmModule.forFeature([Demand_entity_1.Demand])],
        controllers: [Demand_controller_1.DemandController],
        providers: [Demand_service_1.DemandService, config_1.ConfigService],
        exports: [typeorm_1.TypeOrmModule, Demand_service_1.DemandService],
    })
], DemandModule);
exports.DemandModule = DemandModule;
//# sourceMappingURL=Demand.module.js.map