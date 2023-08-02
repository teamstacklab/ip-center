import { ICategory } from 'domain/interfaces/ICategory';
export declare class Category implements ICategory {
    id: number;
    name: string;
    tags: string[];
}
