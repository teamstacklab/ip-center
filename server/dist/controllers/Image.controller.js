"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageController = void 0;
const common_1 = require("@nestjs/common");
const is_admin_guard_1 = require("../infra/guards/Roles/is-admin.guard");
const common_2 = require("@nestjs/common");
const jwt_access_guard_1 = require("../infra/guards/Auth/jwt-access.guard");
const Image_service_1 = require("../services/Image.service");
const Image_dto_1 = require("../domain/dto/Image.dto");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const config_1 = require("@nestjs/config");
const files_util_1 = require("../utils/files.util");
const env = new config_1.ConfigService();
let ImageController = class ImageController {
    constructor(imageService) {
        this.imageService = imageService;
    }
    async getAll() {
        return await this.imageService.getAll();
    }
    async getOneById(id) {
        return await this.imageService.getOneById(+id);
    }
    async upload(req, imageDto, images) {
        const imagesList = [];
        images.forEach((image) => {
            const imageObject = {
                url: image.filename,
                owner: req.user['sub'],
                role: imageDto.role,
            };
            imagesList.push(imageObject);
        });
        return await this.imageService.create(imagesList);
    }
    async show(imageName, res) {
        return res.sendFile(imageName, { root: env.get('IMAGES_DEST') });
    }
    async update(req, id, imageDto) {
        let ownerIsCurrentUser = true;
        if (!req.user['isAdmin']) {
            try {
                ownerIsCurrentUser = await this.imageService.assureOwnerIsCurrentUser(+id, req.user['sub']);
            }
            catch (err) {
                throw err;
            }
        }
        if (ownerIsCurrentUser) {
            return await this.imageService.update(+id, imageDto);
        }
    }
    async delete(req, id) {
        let ownerIsCurrentUser = true;
        if (!req.user['isAdmin']) {
            try {
                ownerIsCurrentUser = await this.imageService.assureOwnerIsCurrentUser(+id, req.user['sub']);
            }
            catch (err) {
                throw err;
            }
        }
        if (ownerIsCurrentUser) {
            return await this.imageService.delete(+id);
        }
    }
};
__decorate([
    (0, common_1.Get)('/find'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ImageController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/find/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ImageController.prototype, "getOneById", null);
__decorate([
    (0, common_2.UseGuards)(jwt_access_guard_1.JwtAccessAuthGuard, is_admin_guard_1.IsAdminGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('image', 5, {
        storage: (0, multer_1.diskStorage)({
            destination: (req, file, cb) => {
                cb(null, env.get('IMAGES_DEST'));
            },
            filename: (req, file, cb) => {
                cb(null, (0, files_util_1.generateRandomFileName)(file.originalname));
            },
        }),
    })),
    (0, common_1.Post)('/upload'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFiles)(new common_1.ParseFilePipe({
        validators: [
            new common_1.MaxFileSizeValidator({ maxSize: 1024 * 1024 * 10 }),
            new common_1.FileTypeValidator({
                fileType: /image\/(jpg|jpeg|png|gif|tiff)$/,
            }),
        ],
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Image_dto_1.UploadImageDto,
        Array]),
    __metadata("design:returntype", Promise)
], ImageController.prototype, "upload", null);
__decorate([
    (0, common_1.Get)('/show/:imgname'),
    __param(0, (0, common_1.Param)('imgname')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ImageController.prototype, "show", null);
__decorate([
    (0, common_2.UseGuards)(jwt_access_guard_1.JwtAccessAuthGuard, is_admin_guard_1.IsAdminGuard),
    (0, common_1.Post)('/update/:id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Image_dto_1.UpdateImageDto]),
    __metadata("design:returntype", Promise)
], ImageController.prototype, "update", null);
__decorate([
    (0, common_2.UseGuards)(jwt_access_guard_1.JwtAccessAuthGuard, is_admin_guard_1.IsAdminGuard),
    (0, common_1.Post)('/delete/:id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ImageController.prototype, "delete", null);
ImageController = __decorate([
    (0, common_1.Controller)('api/images'),
    __metadata("design:paramtypes", [Image_service_1.ImageService])
], ImageController);
exports.ImageController = ImageController;
//# sourceMappingURL=Image.controller.js.map