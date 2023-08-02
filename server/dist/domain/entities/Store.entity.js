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
exports.Store = void 0;
const User_entity_1 = require("./User.entity");
const typeorm_1 = require("typeorm");
const Category_entity_1 = require("./Category.entity");
const Image_entity_1 = require("./Image.entity");
let Store = class Store {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Store.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_entity_1.User, { cascade: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", User_entity_1.User)
], Store.prototype, "owner", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Category_entity_1.Category, (category) => category.id, {
        cascade: true,
        nullable: true,
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Category_entity_1.Category)
], Store.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { nullable: false, length: 300 }),
    __metadata("design:type", String)
], Store.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { nullable: false, length: 500 }),
    __metadata("design:type", String)
], Store.prototype, "slogan", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Image_entity_1.Image, (image) => image.id, { cascade: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Image_entity_1.Image)
], Store.prototype, "logo", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Image_entity_1.Image, (image) => image.id, { cascade: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], Store.prototype, "images", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: false }),
    __metadata("design:type", String)
], Store.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { nullable: false, length: 100 }),
    __metadata("design:type", String)
], Store.prototype, "instagram", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { nullable: false, length: 100 }),
    __metadata("design:type", String)
], Store.prototype, "whatsapp", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { nullable: false, length: 100 }),
    __metadata("design:type", String)
], Store.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { nullable: false, length: 100 }),
    __metadata("design:type", String)
], Store.prototype, "services", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { nullable: true, length: 100 }),
    __metadata("design:type", String)
], Store.prototype, "additionalInfo", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Store.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Store.prototype, "updatedAt", void 0);
Store = __decorate([
    (0, typeorm_1.Entity)('stores')
], Store);
exports.Store = Store;
//# sourceMappingURL=Store.entity.js.map