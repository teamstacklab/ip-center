"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Store_service_1 = require("../services/Store.service");
const Store_entity_1 = require("../domain/entities/Store.entity");
const Store_controller_1 = require("../controllers/Store.controller");
const User_entity_1 = require("../domain/entities/User.entity");
const Category_entity_1 = require("../domain/entities/Category.entity");
let StoreModule = class StoreModule {
};
StoreModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Store_entity_1.Store, User_entity_1.User, Category_entity_1.Category])],
        controllers: [Store_controller_1.StoreController],
        providers: [Store_service_1.StoreService],
        exports: [typeorm_1.TypeOrmModule, Store_service_1.StoreService],
    })
], StoreModule);
exports.StoreModule = StoreModule;
//# sourceMappingURL=Store.module.js.map