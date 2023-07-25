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
exports.EventController = void 0;
const common_1 = require("@nestjs/common");
const Event_dto_1 = require("../domain/dto/Event.dto");
const Event_service_1 = require("../services/Event.service");
const is_admin_guard_1 = require("../infra/guards/Roles/is-admin.guard");
const common_2 = require("@nestjs/common");
const jwt_access_guard_1 = require("../infra/guards/Auth/jwt-access.guard");
let EventController = class EventController {
    constructor(eventService) {
        this.eventService = eventService;
    }
    async getAll() {
        return await this.eventService.getAll();
    }
    async getOneById(id) {
        return await this.eventService.getOneById(+id);
    }
    async create(event) {
        return await this.eventService.create(event);
    }
    async update(id, eventDto) {
        return await this.eventService.update(+id, eventDto);
    }
    async delete(id) {
        return await this.eventService.delete(+id);
    }
};
__decorate([
    (0, common_1.Get)('/find'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EventController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/find/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EventController.prototype, "getOneById", null);
__decorate([
    (0, common_2.UseGuards)(jwt_access_guard_1.JwtAccessAuthGuard, is_admin_guard_1.IsAdminGuard),
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Event_dto_1.CreateEventDto]),
    __metadata("design:returntype", Promise)
], EventController.prototype, "create", null);
__decorate([
    (0, common_2.UseGuards)(jwt_access_guard_1.JwtAccessAuthGuard, is_admin_guard_1.IsAdminGuard),
    (0, common_1.Post)('/update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Event_dto_1.UpdateEventDto]),
    __metadata("design:returntype", Promise)
], EventController.prototype, "update", null);
__decorate([
    (0, common_2.UseGuards)(jwt_access_guard_1.JwtAccessAuthGuard, is_admin_guard_1.IsAdminGuard),
    (0, common_1.Post)('/delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EventController.prototype, "delete", null);
EventController = __decorate([
    (0, common_1.Controller)('api/events'),
    __metadata("design:paramtypes", [Event_service_1.EventService])
], EventController);
exports.EventController = EventController;
//# sourceMappingURL=Event.controller.js.map