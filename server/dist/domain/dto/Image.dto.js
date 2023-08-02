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
exports.UpdateImageDto = exports.UploadImageDto = exports.CreateImageDto = void 0;
const class_validator_1 = require("class-validator");
const User_entity_1 = require("../entities/User.entity");
const IImage_1 = require("../interfaces/IImage");
class CreateImageDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateImageDto.prototype, "url", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", User_entity_1.User)
], CreateImageDto.prototype, "owner", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(IImage_1.ImagesRole),
    __metadata("design:type", String)
], CreateImageDto.prototype, "role", void 0);
exports.CreateImageDto = CreateImageDto;
class UploadImageDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(IImage_1.ImagesRole),
    __metadata("design:type", String)
], UploadImageDto.prototype, "role", void 0);
exports.UploadImageDto = UploadImageDto;
class UpdateImageDto {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateImageDto.prototype, "url", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(IImage_1.ImagesRole),
    __metadata("design:type", String)
], UpdateImageDto.prototype, "role", void 0);
exports.UpdateImageDto = UpdateImageDto;
//# sourceMappingURL=Image.dto.js.map