"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const Auth_usecases_1 = require("../../application/usecases/Auth.usecases");
const Auth_controller_1 = require("../../presentation/controllers/Auth.controller");
const User_module_1 = require("./User.module");
const config = new config_1.ConfigService();
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            User_module_1.UserModule,
            jwt_1.JwtModule.register({
                global: true,
                secret: ("JWT_SECRET"),
                signOptions: { expiresIn: config.get("JWT_EXPIRES") }
            })
        ],
        providers: [Auth_usecases_1.AuthUseCases],
        controllers: [Auth_controller_1.AuthControler],
        exports: [Auth_usecases_1.AuthUseCases]
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=Auth.module.js.map