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
exports.DemandController = void 0;
const common_1 = require("@nestjs/common");
const Demand_service_1 = require("../services/Demand.service");
const is_admin_guard_1 = require("../infra/guards/Roles/is-admin.guard");
const common_2 = require("@nestjs/common");
const jwt_access_guard_1 = require("../infra/guards/Auth/jwt-access.guard");
let DemandController = class DemandController {
    constructor(demandService) {
        this.demandService = demandService;
    }
    async getAll() {
        return await this.demandService.getAll();
    }
    async getOneById(id) {
        return await this.demandService.getOneById(+id);
    }
    async authorizate(id) {
        return await this.demandService.authorizate(+id);
    }
    async reject(id) {
        return await this.demandService.reject(+id);
    }
};
__decorate([
    (0, common_2.UseGuards)(jwt_access_guard_1.JwtAccessAuthGuard, is_admin_guard_1.IsAdminGuard),
    (0, common_1.Post)('/find'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DemandController.prototype, "getAll", null);
__decorate([
    (0, common_2.UseGuards)(jwt_access_guard_1.JwtAccessAuthGuard, is_admin_guard_1.IsAdminGuard),
    (0, common_1.Post)('/find/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DemandController.prototype, "getOneById", null);
__decorate([
    (0, common_2.UseGuards)(jwt_access_guard_1.JwtAccessAuthGuard, is_admin_guard_1.IsAdminGuard),
    (0, common_1.Post)('/authorizate/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DemandController.prototype, "authorizate", null);
__decorate([
    (0, common_2.UseGuards)(jwt_access_guard_1.JwtAccessAuthGuard, is_admin_guard_1.IsAdminGuard),
    (0, common_1.Post)('/reject/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DemandController.prototype, "reject", null);
DemandController = __decorate([
    (0, common_1.Controller)('api/demands'),
    __metadata("design:paramtypes", [Demand_service_1.DemandService])
], DemandController);
exports.DemandController = DemandController;
//# sourceMappingURL=Demand.controller.js.map