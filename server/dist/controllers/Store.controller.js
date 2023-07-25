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
exports.StoreController = void 0;
const Store_service_1 = require("../services/Store.service");
const Store_dto_1 = require("../domain/dto/Store.dto");
const jwt_access_guard_1 = require("../infra/guards/Auth/jwt-access.guard");
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
let StoreController = class StoreController {
    constructor(storesService) {
        this.storesService = storesService;
    }
    async getAll() {
        return await this.storesService.getAll();
    }
    async getOneById(id) {
        return await this.storesService.getOneById(+id);
    }
    async create(store) {
        return await this.storesService.create(store);
    }
    async update(req, id, storeDto) {
        let ownerIsCurrentUser = true;
        if (!req.user['isAdmin']) {
            try {
                ownerIsCurrentUser = await this.storesService.assureOwnerIsCurrentUser(+id, req.user['sub']);
            }
            catch (err) {
                throw err;
            }
        }
        if (ownerIsCurrentUser) {
            return await this.storesService.update(+id, storeDto);
        }
    }
    async delete(req, id) {
        let ownerIsCurrentUser = true;
        if (!req.user['isAdmin']) {
            try {
                ownerIsCurrentUser = await this.storesService.assureOwnerIsCurrentUser(+id, req.user['sub']);
            }
            catch (err) {
                throw err;
            }
        }
        if (ownerIsCurrentUser) {
            return await this.storesService.delete(+id);
        }
    }
};
__decorate([
    (0, common_2.Get)('/find'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StoreController.prototype, "getAll", null);
__decorate([
    (0, common_2.Get)('/find/:id'),
    __param(0, (0, common_2.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StoreController.prototype, "getOneById", null);
__decorate([
    (0, common_2.UseGuards)(jwt_access_guard_1.JwtAccessAuthGuard),
    (0, common_2.Post)('/create'),
    __param(0, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Store_dto_1.CreateStoreDto]),
    __metadata("design:returntype", Promise)
], StoreController.prototype, "create", null);
__decorate([
    (0, common_2.UseGuards)(jwt_access_guard_1.JwtAccessAuthGuard),
    (0, common_2.Post)('/update/:id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_2.Param)('id')),
    __param(2, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Store_dto_1.UpdateStoreDto]),
    __metadata("design:returntype", Promise)
], StoreController.prototype, "update", null);
__decorate([
    (0, common_2.UseGuards)(jwt_access_guard_1.JwtAccessAuthGuard),
    (0, common_2.Post)('/delete/:id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_2.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], StoreController.prototype, "delete", null);
StoreController = __decorate([
    (0, common_2.Controller)('api/stores'),
    __metadata("design:paramtypes", [Store_service_1.StoreService])
], StoreController);
exports.StoreController = StoreController;
//# sourceMappingURL=Store.controller.js.map