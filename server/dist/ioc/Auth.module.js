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
const User_module_1 = require("./User.module");
const Auth_service_1 = require("../services/Auth.service");
const local_strategy_1 = require("../infra/strategies/Auth/local.strategy");
const Auth_controller_1 = require("../controllers/Auth.controller");
const Encryption_module_1 = require("./Encryption.module");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const jwt_access_strategy_1 = require("../infra/strategies/Auth/jwt-access.strategy");
const Demand_module_1 = require("./Demand.module");
const jwt_refresh_strategy_1 = require("../infra/strategies/Auth/jwt-refresh.strategy");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            User_module_1.UserModule,
            config_1.ConfigModule,
            Demand_module_1.DemandModule,
            Encryption_module_1.EncryptionModule,
            jwt_1.JwtModule.register({}),
        ],
        providers: [
            Auth_service_1.AuthService,
            local_strategy_1.LocalStrategy,
            jwt_access_strategy_1.JwtAccessStrategy,
            jwt_refresh_strategy_1.JwtRefreshStrategy,
        ],
        controllers: [Auth_controller_1.AuthController],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=Auth.module.js.map