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
exports.UserControler = void 0;
const common_1 = require("@nestjs/common");
const User_dto_1 = require("../domain/dto/User.dto");
const User_service_1 = require("../services/User.service");
const is_admin_guard_1 = require("../infra/guards/Roles/is-admin.guard");
const jwt_access_guard_1 = require("../infra/guards/Auth/jwt-access.guard");
let UserControler = class UserControler {
    constructor(userService) {
        this.userService = userService;
    }
    async getAllPartials() {
        const users = await this.userService.getAll();
        const partialUsers = [];
        users.forEach((user) => {
            partialUsers.push(this.userService.partial(user));
        });
        return partialUsers;
    }
    async getAll() {
        return await this.userService.getAll();
    }
    async getOneByIdPartial(id) {
        const user = await this.userService.getOneById(+id);
        return this.userService.partial(user);
    }
    async getOneById(id) {
        return await this.userService.getOneById(+id);
    }
    async create(userDto) {
        return await this.userService.create(userDto);
    }
    async update(id, userDto) {
        return await this.userService.update(+id, userDto);
    }
    async delete(id) {
        return await this.userService.delete(+id);
    }
};
__decorate([
    (0, common_1.Get)('/find'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserControler.prototype, "getAllPartials", null);
__decorate([
    (0, common_1.UseGuards)(jwt_access_guard_1.JwtAccessAuthGuard, is_admin_guard_1.IsAdminGuard),
    (0, common_1.Post)('/find'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserControler.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/find/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserControler.prototype, "getOneByIdPartial", null);
__decorate([
    (0, common_1.UseGuards)(jwt_access_guard_1.JwtAccessAuthGuard, is_admin_guard_1.IsAdminGuard),
    (0, common_1.Post)('/find/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserControler.prototype, "getOneById", null);
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UserControler.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(jwt_access_guard_1.JwtAccessAuthGuard, is_admin_guard_1.IsAdminGuard),
    (0, common_1.Post)('/update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, User_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UserControler.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_access_guard_1.JwtAccessAuthGuard, is_admin_guard_1.IsAdminGuard),
    (0, common_1.Post)('/delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserControler.prototype, "delete", null);
UserControler = __decorate([
    (0, common_1.Controller)('api/users'),
    __metadata("design:paramtypes", [User_service_1.UserService])
], UserControler);
exports.UserControler = UserControler;
//# sourceMappingURL=User.controller.js.map