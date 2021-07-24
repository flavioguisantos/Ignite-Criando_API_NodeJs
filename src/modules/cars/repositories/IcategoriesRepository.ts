import { Category } from "../model/category";

interface ICreateCategoryDTO {
    name: string;
    description?: string;
}

interface IcategoriesRepository {
    findByName(name: string): Category;
    list(): Category[];
    create({ name: string, description }: ICreateCategoryDTO): void
}

export { IcategoriesRepository, ICreateCategoryDTO }