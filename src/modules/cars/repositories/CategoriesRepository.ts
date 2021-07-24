import { Category } from "../model/category";
import { ICreateCategoryDTO } from "./IcategoriesRepository";

class CategoriesRepository {
    private categories: Category[]

    constructor() {
        this.categories = []
    }

    create({ name, description }: ICreateCategoryDTO): void {
        const category = new Category()
        Object.assign(category, {
            name,
            description,
            created_at: new Date(),
        })

        this.categories.push(category)
    }
    list(): Category[] {
        return this.categories
    }

    findByName(name: string): Category {
        const category = this.categories.find(c => c.name === name)
        return category
    }

}

export { CategoriesRepository }
