"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const Database_module_1 = require("./ioc/Database.module");
const User_module_1 = require("./ioc/User.module");
const Demand_module_1 = require("./ioc/Demand.module");
const Store_module_1 = require("./ioc/Store.module");
const Category_module_1 = require("./ioc/Category.module");
const Event_module_1 = require("./ioc/Event.module");
const Comunicate_module_1 = require("./ioc/Comunicate.module");
const config_1 = require("@nestjs/config");
const Encryption_module_1 = require("./ioc/Encryption.module");
const Auth_module_1 = require("./ioc/Auth.module");
const Image_module_1 = require("./ioc/Image.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            Auth_module_1.AuthModule,
            Database_module_1.DatabaseModule,
            User_module_1.UserModule,
            Demand_module_1.DemandModule,
            Store_module_1.StoreModule,
            Category_module_1.CategoryModule,
            Event_module_1.EventModule,
            Comunicate_module_1.ComunicateModule,
            Encryption_module_1.EncryptionModule,
            Image_module_1.ImageModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map