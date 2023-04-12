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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthUseCases = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const User_usecases_1 = require("./User.usecases");
let AuthUseCases = class AuthUseCases {
    constructor(jwtService, userUseCases) {
        this.jwtService = jwtService;
        this.userUseCases = userUseCases;
    }
    async signIn(username, pass) {
        const user = await this.userUseCases.getByUsername(username);
        if ((user === null || user === void 0 ? void 0 : user.password) !== pass) {
            throw new common_1.UnauthorizedException();
        }
        const payload = { username: user.username, sub: user.id };
        return {
            acess_token: await this.jwtService.signAsync(payload)
        };
    }
};
AuthUseCases = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        User_usecases_1.UserUseCases])
], AuthUseCases);
exports.AuthUseCases = AuthUseCases;
//# sourceMappingURL=Auth.usecases.js.map