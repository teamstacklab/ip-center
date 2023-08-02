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
var DemandService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DemandService = void 0;
const common_1 = require("@nestjs/common");
const Demand_entity_1 = require("../domain/entities/Demand.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const common_2 = require("@nestjs/common");
const User_service_1 = require("./User.service");
let DemandService = DemandService_1 = class DemandService {
    constructor(demandRepo, userService) {
        this.demandRepo = demandRepo;
        this.userService = userService;
        this.logger = new common_2.Logger(DemandService_1.name);
    }
    async getAll() {
        this.logger.log(`Get all demands`);
        return this.demandRepo.find();
    }
    async getOneById(id) {
        this.logger.log(`Get demand ${id}`);
        const demand = await this.demandRepo.findOneBy({ id });
        if (!demand) {
            throw new common_1.NotFoundException(`Demanda ${id} não encontrada!`);
        }
        return demand;
    }
    async create(demandDto) {
        this.logger.log(`Creating a demand.`);
        const demand = await this.demandRepo.findOne({
            where: [
                { username: demandDto.username },
                { email: demandDto.email },
                { cpf: demandDto.cpf },
            ],
        });
        if (demand) {
            throw new common_1.ConflictException(`Demanda ou usuário com este email ou username já existe`);
        }
        const newDemand = this.demandRepo.create(demand);
        return await this.demandRepo.save(newDemand);
    }
    async authorizate(id) {
        const demand = await this.getOneById(id);
        if (!demand) {
            throw new common_1.NotFoundException(`Demanda ${id} não encontrada!`);
        }
        await this.userService.create(demand);
        await this.demandRepo.delete(demand);
        return { message: 'Usuário autorizado com sucesso!' };
    }
    async reject(id) {
        const demand = await this.getOneById(id);
        if (!demand) {
            throw new common_1.NotFoundException(`Demanda ${id} não encontrada!`);
        }
        await this.demandRepo.delete(demand);
        return { message: 'Usuário rejeitado com sucesso!' };
    }
};
DemandService = DemandService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Demand_entity_1.Demand)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        User_service_1.UserService])
], DemandService);
exports.DemandService = DemandService;
//# sourceMappingURL=Demand.service.js.map