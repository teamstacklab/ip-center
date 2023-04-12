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
var UserUseCases_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUseCases = void 0;
const User_entity_1 = require("../../domain/models/User.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let UserUseCases = UserUseCases_1 = class UserUseCases {
    constructor(userRepository) {
        this.userRepository = userRepository;
        this.logger = new common_1.Logger(UserUseCases_1.name);
    }
    async getAllUsers() {
        this.logger.log('Find all users');
        return await this.userRepository.find();
    }
    async getByUsername(username) {
        this.logger.log(`Find an user with username`);
        const user = await this.userRepository.findOneBy({ username });
        if (!user) {
            throw new common_1.NotFoundException(`Usuário ${username} não encontrado"`);
        }
        return user;
    }
    async getUserById(id) {
        this.logger.log(`Find an user with id: ${id}`);
        const user = await this.userRepository.findOneBy({ id });
        if (!user) {
            throw new common_1.NotFoundException(`O usuário de Id: ${id} não foi encontrado.`);
        }
        return user;
    }
    async createUser(userDto) {
        this.logger.log(`Save a new user`);
        try {
            const { name, username, email, password, isAdmin } = userDto;
            const userExists = await this.userRepository.findOneBy({ username: userDto.username });
            if (userExists) {
                throw new common_1.ConflictException(`O usuário de username: ${userDto.username} já existe.`);
            }
            const user = this.userRepository.create(Object.assign({}, userDto));
            return await this.userRepository.save(user);
        }
        catch (_a) {
            throw new common_1.InternalServerErrorException(`Informações insuficientes`);
        }
    }
    async updateUser(id, values) {
        this.logger.log(`Updating an user by id: ${id}`);
        const user = await this.userRepository.findOneBy({ id });
        if (!user) {
            throw new common_1.NotFoundException(`O usuário de Id: ${id} não foi encontrado.`);
        }
        await this.userRepository.update({ id }, Object.assign({}, values));
        return this.userRepository.findOneBy({ id });
    }
    async deleteUser(id) {
        this.logger.log(`Deleting an user by id: ${id}`);
        const user = this.userRepository.findOneBy({ id });
        if (!user) {
            throw new common_1.NotFoundException(`O usuário de Id: ${id} não foi encontrado.`);
        }
        await this.userRepository.delete({ id });
        return user;
    }
};
UserUseCases = UserUseCases_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(User_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserUseCases);
exports.UserUseCases = UserUseCases;
//# sourceMappingURL=User.usecases.js.map