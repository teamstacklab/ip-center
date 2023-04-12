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
const signIn_dto_1 = require("../../application/dto/signIn.dto");
const Auth_usecases_1 = require("../../application/usecases/Auth.usecases");
let AuthControler = class AuthControler {
    constructor(authUseCases) {
        this.authUseCases = authUseCases;
    }
    signIn(account) {
        return this.authUseCases.signIn(account.username, account.password);
    }
};
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)('/login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signIn_dto_1.SignInDto]),
    __metadata("design:returntype", Object)
], AuthControler.prototype, "signIn", null);
AuthControler = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [Auth_usecases_1.AuthUseCases])
], AuthControler);
exports.AuthControler = AuthControler;
//# sourceMappingURL=Auth.controller.js.map