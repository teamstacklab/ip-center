import { Category } from 'domain/entities/Category.entity';
import { Repository } from 'typeorm';
import { CreateCategoryDto, UpdateCategoryDto } from 'domain/dto/Category.dto';
import { ICategoryService } from 'domain/interfaces/ICategory';
export declare class CategoryService implements ICategoryService {
    private categoryRepo;
    constructor(categoryRepo: Repository<Category>);
    private readonly logger;
    getAll(): Promise<Category[]>;
    getOne(filter: Partial<Omit<Category, 'tags'>> | Partial<Omit<Category, 'tags'>>[]): Promise<Category>;
    getOneById(id: number): Promise<Category>;
    create(categoryDto: CreateCategoryDto): Promise<Category>;
    update(id: number, update: UpdateCategoryDto): Promise<Category>;
    delete(id: number): Promise<Category>;
}
