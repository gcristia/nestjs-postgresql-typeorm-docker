import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Category } from '../entities/category.entity'

@Injectable()
export class CategoriesService {
    constructor(@InjectRepository(Category) private categoriesRepository: Repository<Category>) {}

    create(body: any): Promise<Category[]> {
        const newCategory = this.categoriesRepository.create(body)
        return this.categoriesRepository.save(newCategory)
    }
}
