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
var EventService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Event_entity_1 = require("../domain/entities/Event.entity");
const typeorm_2 = require("typeorm");
let EventService = EventService_1 = class EventService {
    constructor(eventRepo) {
        this.eventRepo = eventRepo;
        this.logger = new common_1.Logger(EventService_1.name);
    }
    async getAll() {
        this.logger.log(`Get all events.`);
        return await this.eventRepo.find();
    }
    async getOneById(id) {
        this.logger.log(`Get a specific event ${id}.`);
        const event = await this.eventRepo.findOneBy({ id });
        if (!event) {
            throw new common_1.NotFoundException(`Evento ${id} não encontrado!`);
        }
        return event;
    }
    async create(eventDto) {
        this.logger.log(`Creating a event.`);
        const event = await this.eventRepo.findOne({
            where: [{ name: eventDto.name }],
        });
        if (event) {
            throw new common_1.ConflictException(`Esta Evento já existe!`);
        }
        const newEvent = this.eventRepo.create(eventDto);
        return await this.eventRepo.save(newEvent);
    }
    async update(id, update) {
        this.logger.log(`Get the event of id ${id}.`);
        const event = this.getOneById(id);
        if (!event) {
            throw new common_1.NotFoundException(`Evento ${id} não encontrado!`);
        }
        await this.eventRepo.update({ id }, Object.assign({}, update));
        return await this.eventRepo.findOneBy({ id });
    }
    async delete(id) {
        this.logger.log(`Deleting Event ${id}.`);
        const event = this.getOneById(id);
        if (!event) {
            throw new common_1.NotFoundException(`Evento ${id} não encontrado!`);
        }
        await this.eventRepo.delete({ id });
        return event;
    }
};
EventService = EventService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Event_entity_1.Event)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EventService);
exports.EventService = EventService;
//# sourceMappingURL=Event.service.js.map