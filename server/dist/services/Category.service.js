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
var CategoryService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Category_entity_1 = require("../domain/entities/Category.entity");
const typeorm_2 = require("typeorm");
let CategoryService = CategoryService_1 = class CategoryService {
    constructor(categoryRepo) {
        this.categoryRepo = categoryRepo;
        this.logger = new common_1.Logger(CategoryService_1.name);
    }
    async getAll() {
        this.logger.log('Find all categories');
        return await this.categoryRepo.find();
    }
    async getOne(filter) {
        const category = this.categoryRepo.findOne({ where: filter });
        if (!category) {
            throw new common_1.NotFoundException(`Categoria ${filter} não encontrada!`);
        }
        return category;
    }
    async getOneById(id) {
        this.logger.log(`Get category ${id}.`);
        const category = await this.categoryRepo.findOneBy({ id });
        if (!category) {
            throw new common_1.NotFoundException(`Categoria ${id} não encontrada!`);
        }
        return category;
    }
    async create(categoryDto) {
        this.logger.log(`Creates a category`);
        const category = await this.categoryRepo.findOneBy({
            name: categoryDto.name,
        });
        if (category) {
            throw new common_1.ConflictException(`Uma categoria com nome: ${category.name} já existe!`);
        }
        const newCategory = this.categoryRepo.create(categoryDto);
        return await this.categoryRepo.save(newCategory);
    }
    async update(id, update) {
        this.logger.log(`Update category ${id}`);
        const category = await this.getOneById(id);
        if (!category) {
            throw new common_1.NotFoundException(`Comunicado ${id} não existe!`);
        }
        await this.categoryRepo.update({ id }, Object.assign({}, update));
        return await this.getOneById(id);
    }
    async delete(id) {
        this.logger.log(`Delete category ${id}`);
        const category = await this.getOneById(id);
        if (!category) {
            throw new common_1.NotFoundException(`Comunicado ${id} não existe!`);
        }
        await this.categoryRepo.delete({ id });
        return category;
    }
};
CategoryService = CategoryService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Category_entity_1.Category)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CategoryService);
exports.CategoryService = CategoryService;
//# sourceMappingURL=Category.service.js.map