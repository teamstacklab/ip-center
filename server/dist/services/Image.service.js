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
var ImageService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageService = void 0;
const common_1 = require("@nestjs/common");
const Image_entity_1 = require("../domain/entities/Image.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const fs = require("fs");
const config_1 = require("@nestjs/config");
const path = require("path");
let ImageService = ImageService_1 = class ImageService {
    constructor(imageRepo, env) {
        this.imageRepo = imageRepo;
        this.env = env;
        this.logger = new common_1.Logger(ImageService_1.name);
    }
    async getAll() {
        this.logger.log(`Get all images.`);
        return await this.imageRepo.find({
            loadRelationIds: { relations: ['owner'] },
        });
    }
    async getOneById(id) {
        this.logger.log(`Get a specific image ${id}.`);
        const image = await this.imageRepo.findOne({
            where: { id },
            loadRelationIds: {
                relations: ['owner'],
                disableMixedMap: true,
            },
        });
        if (!image) {
            throw new common_1.NotFoundException(`Imagem ${id} não encontrado!`);
        }
        return image;
    }
    async create(imageDtoList) {
        this.logger.log(`Creating a image.`);
        if (imageDtoList.length > 5) {
            throw new common_1.UnauthorizedException(`Você só pode enviar até 5 imagens por vez!`);
        }
        const verifyUser = await this.imageRepo.findBy({
            owner: imageDtoList[0].owner,
        });
        if (verifyUser.length >= 12) {
            throw new common_1.UnauthorizedException(`Você só pode enviar até 12 imagens!`);
        }
        try {
            const newImage = this.imageRepo.create(imageDtoList);
            return await this.imageRepo.save(newImage);
        }
        catch (err) {
            throw new common_1.HttpException(`${err}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async update(id, update) {
        this.logger.log(`Get the image of id ${id}.`);
        const image = this.getOneById(id);
        if (!image) {
            throw new common_1.NotFoundException(`Imagem ${id} não encontrada!`);
        }
        try {
            await this.imageRepo.update({ id }, Object.assign({}, update));
            return await this.imageRepo.findOneBy({ id });
        }
        catch (err) {
            throw new common_1.HttpException(`${err}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async delete(id) {
        this.logger.log(`Deleting Image ${id}.`);
        const image = await this.getOneById(id);
        if (!image) {
            throw new common_1.NotFoundException(`Imagem ${id} não encontrada!`);
        }
        this.deleteImage(image.url);
        await this.imageRepo.delete({ id });
        return image;
    }
    async assureOwnerIsCurrentUser(imageId, userId) {
        const store = await this.getOneById(imageId);
        if (store.owner.id !== userId) {
            throw new common_1.ConflictException(`Você não tem acesso a essa imagem!`);
        }
        return true;
    }
    deleteImage(imageName) {
        const imagesPath = this.env.get('IMAGES_DEST');
        return fs.unlink(path.join(imagesPath, imageName), (err) => {
            if (err) {
                return null;
            }
        });
    }
};
ImageService = ImageService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Image_entity_1.Image)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        config_1.ConfigService])
], ImageService);
exports.ImageService = ImageService;
//# sourceMappingURL=Image.service.js.map