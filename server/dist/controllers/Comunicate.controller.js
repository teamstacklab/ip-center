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
exports.ComunicateController = void 0;
const common_1 = require("@nestjs/common");
const Comunicate_service_1 = require("../services/Comunicate.service");
const is_admin_guard_1 = require("../infra/guards/Roles/is-admin.guard");
const common_2 = require("@nestjs/common");
const jwt_access_guard_1 = require("../infra/guards/Auth/jwt-access.guard");
const Comunicate_dto_1 = require("../domain/dto/Comunicate.dto");
let ComunicateController = class ComunicateController {
    constructor(comunicateService) {
        this.comunicateService = comunicateService;
    }
    async getAll() {
        return await this.comunicateService.getAll();
    }
    async getOneById(id) {
        return await this.comunicateService.getOneById(+id);
    }
    async create(comunicate) {
        return await this.comunicateService.create(comunicate);
    }
    async update(id, update) {
        return await this.comunicateService.update(+id, update);
    }
    async delete(id) {
        return await this.comunicateService.delete(+id);
    }
};
__decorate([
    (0, common_1.Get)('/find'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ComunicateController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/find/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ComunicateController.prototype, "getOneById", null);
__decorate([
    (0, common_2.UseGuards)(jwt_access_guard_1.JwtAccessAuthGuard, is_admin_guard_1.IsAdminGuard),
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Comunicate_dto_1.CreateComunicateDto]),
    __metadata("design:returntype", Promise)
], ComunicateController.prototype, "create", null);
__decorate([
    (0, common_2.UseGuards)(jwt_access_guard_1.JwtAccessAuthGuard, is_admin_guard_1.IsAdminGuard),
    (0, common_1.Post)('/update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Comunicate_dto_1.UpdateComunicateDto]),
    __metadata("design:returntype", Promise)
], ComunicateController.prototype, "update", null);
__decorate([
    (0, common_2.UseGuards)(jwt_access_guard_1.JwtAccessAuthGuard, is_admin_guard_1.IsAdminGuard),
    (0, common_1.Post)('/delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ComunicateController.prototype, "delete", null);
ComunicateController = __decorate([
    (0, common_1.Controller)('api/comunicates'),
    __metadata("design:paramtypes", [Comunicate_service_1.ComunicateService])
], ComunicateController);
exports.ComunicateController = ComunicateController;
//# sourceMappingURL=Comunicate.controller.js.map