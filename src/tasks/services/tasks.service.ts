import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Task } from '../entities/task.entity'
import { In, Repository } from 'typeorm'
import { Category } from '../entities/category.entity'

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(Task) private tasksRepository: Repository<Task>,
        @InjectRepository(Category) private categoriesRepository: Repository<Category>
    ) {}

    findAll(): Promise<Task[]> {
        return this.tasksRepository.find()
    }

    findOne(id: number): Promise<Task | null> {
        return this.tasksRepository.findOne({ relations: ['categories'], where: { id } })
    }

    async create(body: any): Promise<Task> {
        const newTask = new Task()
        newTask.name = body.name
        const categoriesIds = body.categoriesIds
        newTask.categories = await this.categoriesRepository.findBy({ id: In(categoriesIds) })
        return this.tasksRepository.save(newTask)
    }

    async update(id: number, body: any): Promise<Task> {
        const task = await this.tasksRepository.findOneBy({ id })
        this.tasksRepository.merge(task, body)
        return this.tasksRepository.save(task)
    }

    async delete(id: number): Promise<void> {
        await this.tasksRepository.delete(id)
    }
}
