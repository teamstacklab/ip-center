"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComunicateModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Comunicate_entity_1 = require("../domain/entities/Comunicate.entity");
const Comunicate_service_1 = require("../services/Comunicate.service");
const Comunicate_controller_1 = require("../controllers/Comunicate.controller");
let ComunicateModule = class ComunicateModule {
};
ComunicateModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Comunicate_entity_1.Comunicate])],
        providers: [Comunicate_service_1.ComunicateService],
        controllers: [Comunicate_controller_1.ComunicateController],
        exports: [typeorm_1.TypeOrmModule, Comunicate_service_1.ComunicateService],
    })
], ComunicateModule);
exports.ComunicateModule = ComunicateModule;
//# sourceMappingURL=Comunicate.module.js.map