import { CreateCategoryDto, UpdateCategoryDto } from 'domain/dto/Category.dto';
import { CategoryService } from 'services/Category.service';
import { Category } from 'domain/entities/Category.entity';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    getAll(): Promise<Category[]>;
    getById(id: number): Promise<Category>;
    createCategory(category: CreateCategoryDto): Promise<Category>;
    updateCategory(id: string, update: UpdateCategoryDto): Promise<Category>;
    deleteCategory(id: string): Promise<Category>;
}
