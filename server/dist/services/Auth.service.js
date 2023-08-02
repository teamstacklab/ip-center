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
var AuthService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const User_service_1 = require("./User.service");
const jwt_1 = require("@nestjs/jwt");
const Encription_service_1 = require("./Encription.service");
const config_1 = require("@nestjs/config");
const Demand_service_1 = require("./Demand.service");
let AuthService = AuthService_1 = class AuthService {
    constructor(userService, demandService, encryption, jwtService, env) {
        this.userService = userService;
        this.demandService = demandService;
        this.encryption = encryption;
        this.jwtService = jwtService;
        this.env = env;
        this.logger = new common_1.Logger(AuthService_1.name);
    }
    async login(user) {
        this.logger.log(`Logging in a user.`);
        const payload = {
            user: user.username,
            sub: user.id,
        };
        const { accessToken, refreshToken } = await this.getTokens(payload);
        await this.updateRefreshToken(user.id, refreshToken);
        return {
            access_token: accessToken,
            refresh_token: refreshToken,
        };
    }
    async logout(userId) {
        this.logger.log(`Logging out a user.`);
        await this.userService.update(userId, {
            refreshToken: null,
        });
        return {
            message: 'logout feito com sucesso!',
            status: common_1.HttpStatus.OK,
        };
    }
    async register(credentials) {
        this.logger.log(`Registering a user.`);
        await this.demandService.create(credentials);
        return {
            message: 'registro feito com sucesso!',
            status: common_1.HttpStatus.OK,
        };
    }
    async validate(credentials) {
        this.logger.log(`Validating a user.`);
        const user = await this.userService.getOne({
            username: credentials.username,
        });
        if (user) {
            let passwordsMatch;
            if (user.username === this.env.get('SU_USER')) {
                if (user.password === credentials.password) {
                    passwordsMatch = true;
                }
            }
            else {
                passwordsMatch = await this.encryption.compare(credentials.password, user.password);
            }
            if (passwordsMatch) {
                const userData = { username: user.username, id: user.id };
                return userData;
            }
        }
        return null;
    }
    async updateRefreshToken(userId, refreshToken) {
        this.logger.log(`Update refresh token.`);
        const hashedToken = await this.encryption.hash(refreshToken);
        await this.userService.update(userId, {
            refreshToken: hashedToken,
        });
        return true;
    }
    async getTokens(payload) {
        this.logger.log(`Get the auth tokens.`);
        const accessToken = await this.jwtService.signAsync(payload, {
            secret: this.env.get('JWT_ACCESS_SECRET'),
            expiresIn: this.env.get('JWT_ACCESS_EXPIRATION'),
        });
        const refreshToken = await this.jwtService.signAsync(payload, {
            secret: this.env.get('JWT_REFRESH_SECRET'),
            expiresIn: this.env.get('JWT_REFRESH_EXPIRATION'),
        });
        return {
            accessToken,
            refreshToken,
        };
    }
    async refreshTokens(userId, refreshToken) {
        this.logger.log(`Get the refresh tokens.`);
        const user = await this.userService.getOneById(userId);
        if (!user || !user.refreshToken) {
            throw new common_1.ForbiddenException(`Acesso negado!`);
        }
        const tokenMatches = await this.encryption.compare(refreshToken, user.refreshToken);
        if (!tokenMatches) {
            throw new common_1.ForbiddenException(`Acesso negado!`);
        }
        const tokens = await this.getTokens({ sub: user.id, user: user.username });
        await this.updateRefreshToken(user.id, tokens.refreshToken);
        return {
            access_token: tokens.accessToken,
            refresh_token: tokens.refreshToken,
        };
    }
};
AuthService = AuthService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [User_service_1.UserService,
        Demand_service_1.DemandService,
        Encription_service_1.EncryptionService,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=Auth.service.js.map