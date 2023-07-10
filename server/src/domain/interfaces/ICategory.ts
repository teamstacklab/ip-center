export interface ICategory {
  id: number;
  name: string;
  tags: string[];
<<<<<<< HEAD
=======
}

export interface ICategoryService {
  getAll(): Promise<Category[]>;
  getOneById(id: number): Promise<Category>;
  getOne(filter: Partial<Omit<Category, 'tags'>> | Partial<Omit<Category, 'tags'>>[]): Promise<Category>;
  create(categoryDto: CreateCategoryDto): Promise<Category>;
  update(id: number, update: UpdateCategoryDto): Promise<Category>;
  delete(id: number): Promise<Category>;
>>>>>>> server
}