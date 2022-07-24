import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { TasksService } from '../services/tasks.service'

@Controller('api/tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Get()
    getAll() {
        return this.tasksService.findAll()
    }

    @Get(':id')
    getTask(@Param('id') id: number) {
        return this.tasksService.findOne(id)
    }

    @Post()
    createTask(@Body() body: any) {
        return this.tasksService.create(body)
    }

    @Put()
    updateTask(@Param('id') id: number, @Body() body: any) {
        return this.tasksService.update(id, body)
    }

    @Delete(':id')
    deleteTask(@Param('id') id: number) {
        return this.tasksService.delete(id)
    }
}
