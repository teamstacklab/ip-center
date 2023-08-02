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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var UserService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const User_entity_1 = require("../domain/entities/User.entity");
const Encription_service_1 = require("./Encription.service");
let UserService = UserService_1 = class UserService {
    constructor(userRepo, encryptionService) {
        this.userRepo = userRepo;
        this.encryptionService = encryptionService;
        this.logger = new common_1.Logger(UserService_1.name);
    }
    async getAll() {
        this.logger.log(`Get all users.`);
        return await this.userRepo.find();
    }
    async getOne(filter) {
        this.logger.log(`Get a specific user ${Object.values(filter)}.`);
        const user = await this.userRepo.findOne({ where: filter });
        if (!user) {
            throw new common_1.NotFoundException(`Usuário ${filter} não encontrado!`);
        }
        return user;
    }
    async getOneById(id) {
        this.logger.log(`Get a specific user ${id}.`);
        const user = await this.userRepo.findOneBy({ id });
        if (!user) {
            throw new common_1.NotFoundException(`Usuário ${id} não encontrado!`);
        }
        return user;
    }
    async create(userDto) {
        this.logger.log(`Creates a user`);
        const user = await this.userRepo.findOne({
            where: [{ username: userDto.username }, { email: userDto.email }],
        });
        if (user) {
            throw new common_1.ConflictException(`Este usuário já existe!`);
        }
        const { password } = userDto, partialUser = __rest(userDto, ["password"]);
        const hashPassword = await this.encryptionService.hash(password);
        const newUser = this.userRepo.create(Object.assign(Object.assign({}, partialUser), { password: hashPassword }));
        return this.partial(await this.userRepo.save(newUser));
    }
    async update(id, update) {
        this.logger.log(`Get the user of id ${id}.`);
        const user = await this.getOneById(id);
        if (!user) {
            throw new common_1.NotFoundException(`Usuário ${id} não encontrado!`);
        }
        if (update.username || update.email) {
            const verification = await this.userRepo.findOne({
                where: [{ username: update.username }, { email: update.email }],
            });
            if (verification) {
                throw new common_1.ConflictException(`Algum usuário com este email ou username já existe!`);
            }
        }
        const { password } = update, partialUser = __rest(update, ["password"]);
        if (password) {
            const hashPassword = await this.encryptionService.hash(password);
            await this.userRepo.update({ id }, Object.assign(Object.assign({}, partialUser), { password: hashPassword }));
        }
        else {
            await this.userRepo.update({ id }, Object.assign({}, update));
        }
        return this.partial(await this.getOneById(id));
    }
    async delete(id) {
        this.logger.log(`Deleting user ${id}.`);
        const user = await this.getOneById(id);
        if (!user) {
            throw new common_1.NotFoundException(`Usuário ${id} não encontrado!`);
        }
        await this.userRepo.delete({ id });
        return this.partial(user);
    }
    partial(user) {
        const { username, email, password, refreshToken } = user, partialUser = __rest(user, ["username", "email", "password", "refreshToken"]);
        return partialUser;
    }
};
UserService = UserService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(User_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        Encription_service_1.EncryptionService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=User.service.js.map