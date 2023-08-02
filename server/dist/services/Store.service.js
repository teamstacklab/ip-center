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
var StoreService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Store_entity_1 = require("../domain/entities/Store.entity");
const typeorm_2 = require("typeorm");
let StoreService = StoreService_1 = class StoreService {
    constructor(storeRepo) {
        this.storeRepo = storeRepo;
        this.logger = new common_1.Logger(StoreService_1.name);
    }
    async getAll() {
        this.logger.log(`Get all Stores.`);
        return await this.storeRepo.find({
            loadRelationIds: { relations: ['owner'] },
        });
    }
    async getOneById(id) {
        this.logger.log(`Get a specific Store ${id}.`);
        const store = await this.storeRepo.findOne({
            where: { id },
            loadRelationIds: {
                relations: ['owner'],
                disableMixedMap: true,
            },
        });
        if (!store) {
            throw new common_1.NotFoundException(`Loja ${id} não encontrada!`);
        }
        return store;
    }
    async create(storeDto) {
        this.logger.log(`Creates a store`);
        const store = await this.storeRepo.findOneBy({ name: storeDto.name });
        if (store) {
            throw new common_1.ConflictException(`A loja '${store.name}' já existe!`);
        }
        try {
            const newStore = this.storeRepo.create(storeDto);
            return await this.storeRepo.save(newStore);
        }
        catch (err) {
            throw new common_1.HttpException(`${err}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async update(id, update) {
        this.logger.log(`Get the Store of id ${id}.`);
        const store = await this.getOneById(id);
        if (!store) {
            throw new common_1.NotFoundException(`Loja ${id} não encontrada!`);
        }
        try {
            await this.storeRepo.update({ id }, Object.assign({}, update));
            return await this.getOneById(id);
        }
        catch (err) {
            throw new common_1.HttpException(`${err}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async delete(id) {
        this.logger.log(`Deleting Store ${id}.`);
        const store = await this.getOneById(id);
        if (!store) {
            throw new common_1.NotFoundException(`Loja ${id} não encontrada!`);
        }
        await this.storeRepo.delete({ id });
        return store;
    }
    async assureOwnerIsCurrentUser(storeId, userId) {
        const store = await this.getOneById(storeId);
        if (store.owner.id !== userId) {
            throw new common_1.ConflictException(`Você não tem acesso a essa loja!`);
        }
        return true;
    }
};
StoreService = StoreService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Store_entity_1.Store)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], StoreService);
exports.StoreService = StoreService;
//# sourceMappingURL=Store.service.js.map