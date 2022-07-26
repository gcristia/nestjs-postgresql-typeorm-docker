import { Module } from '@nestjs/common'
import { TasksService } from './services/tasks.service'
import { TypeOrmModule } from '@nestjs/typeorm'

import { TasksController } from './controllers/tasks.controller'
import { UserController } from './controllers/user.controller'

import { Task } from './entities/task.entity'
import { User } from './entities/user.entity'
import { Profile } from './entities/profile.entity'
import { UserService } from './services/user.service'
import { Photo } from './entities/photo.entity'
import { PhotosService } from './services/photos.service'
import { PhotosController } from './controllers/photos.controller'
import { Category } from './entities/category.entity'
import { CategoriesService } from './services/categories.service';
import { CategoriesController } from './controllers/categories.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Task, User, Profile, Photo, Category])],
    providers: [TasksService, UserService, PhotosService, CategoriesService],
    controllers: [TasksController, UserController, PhotosController, CategoriesController],
})
export class TasksModule {}
