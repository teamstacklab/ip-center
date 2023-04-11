"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const User_usecases_1 = require("../../application/usecases/User.usecases");
const User_entity_1 = require("../../domain/models/User.entity");
const User_controller_1 = require("../../presentation/controllers/User.controller");
let UserModule = class UserModule {
};
UserModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([User_entity_1.User])],
        controllers: [User_controller_1.UserControler],
        providers: [User_usecases_1.UserUseCases],
        exports: [typeorm_1.TypeOrmModule]
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=User.module.js.map