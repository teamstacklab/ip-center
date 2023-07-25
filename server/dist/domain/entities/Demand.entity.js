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
exports.Demand = void 0;
const typeorm_1 = require("typeorm");
let Demand = class Demand {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Demand.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, length: 300 }),
    __metadata("design:type", String)
], Demand.prototype, "cpf", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, length: 300 }),
    __metadata("design:type", String)
], Demand.prototype, "store", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, length: 300 }),
    __metadata("design:type", String)
], Demand.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, length: 300 }),
    __metadata("design:type", String)
], Demand.prototype, "whatsapp", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, length: 300 }),
    __metadata("design:type", String)
], Demand.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, length: 300 }),
    __metadata("design:type", String)
], Demand.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, length: 300 }),
    __metadata("design:type", String)
], Demand.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Boolean)
], Demand.prototype, "isAdmin", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Demand.prototype, "createdAt", void 0);
Demand = __decorate([
    (0, typeorm_1.Entity)('demands')
], Demand);
exports.Demand = Demand;
//# sourceMappingURL=Demand.entity.js.map