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
exports.AuthControler = void 0;
const common_1 = require("@nestjs/common");
const Auth_usecases_1 = require("../../application/usecases/Auth.usecases");
const partialUser_dto_1 = require("../../application/dto/partialUser.dto");
const Auth_guard_1 = require("../../infrastructure/guards/Auth.guard");
const User_entity_1 = require("../../domain/models/User.entity");
let AuthControler = class AuthControler {
    constructor(authUseCases) {
        this.authUseCases = authUseCases;
    }
    login(account) {
        return this.authUseCases.login(account.username, account.password);
    }
    register(user) {
        return this.authUseCases.register(user);
    }
    getProfile(req) {
        return req.user;
    }
};
__decorate([
    (0, common_1.UseGuards)(Auth_guard_1.AuthGuard),
    (0, common_1.Post)('/login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [partialUser_dto_1.PartialUser]),
    __metadata("design:returntype", Object)
], AuthControler.prototype, "login", null);
__decorate([
    (0, common_1.UseGuards)(Auth_guard_1.AuthGuard),
    (0, common_1.Post)('/register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User_entity_1.User]),
    __metadata("design:returntype", Object)
], AuthControler.prototype, "register", null);
__decorate([
    (0, common_1.UseGuards)(Auth_guard_1.AuthGuard),
    (0, common_1.Get)('/profile'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], AuthControler.prototype, "getProfile", null);
AuthControler = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [Auth_usecases_1.AuthUseCases])
], AuthControler);
exports.AuthControler = AuthControler;
//# sourceMappingURL=Auth.controller.js.map