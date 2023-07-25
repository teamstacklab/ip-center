"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageModule = void 0;
const common_1 = require("@nestjs/common");
const Image_service_1 = require("../services/Image.service");
const typeorm_1 = require("@nestjs/typeorm");
const Image_controller_1 = require("../controllers/Image.controller");
const Image_entity_1 = require("../domain/entities/Image.entity");
const platform_express_1 = require("@nestjs/platform-express");
const config_1 = require("@nestjs/config");
let ImageModule = class ImageModule {
};
ImageModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule,
            platform_express_1.MulterModule.registerAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (env) => ({
                    dest: env.get('IMAGES_DEST'),
                }),
            }),
            typeorm_1.TypeOrmModule.forFeature([Image_entity_1.Image]),
        ],
        providers: [Image_service_1.ImageService, config_1.ConfigService],
        controllers: [Image_controller_1.ImageController],
        exports: [typeorm_1.TypeOrmModule, Image_service_1.ImageService],
    })
], ImageModule);
exports.ImageModule = ImageModule;
//# sourceMappingURL=Image.module.js.map