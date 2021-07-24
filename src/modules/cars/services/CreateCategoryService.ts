import { IcategoriesRepository } from "../repositories/IcategoriesRepository"

interface IRequest {
    name: string;
    description?: string
}

class CreateCategoryService {
    constructor(private categoriesRepository: IcategoriesRepository) { }

    execute({ name, description }: IRequest): void {
        const categoryAlreadyExists = this.categoriesRepository.findByName(name)

        if (categoryAlreadyExists) {
            throw new Error(`Category with name ${name} already exists`)
        }

        this.categoriesRepository.create({ name, description })
    }
}

export { CreateCategoryService }