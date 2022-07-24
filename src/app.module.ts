import { Module } from '@nestjs/common'
import { TasksModule } from './tasks/tasks.module'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
    imports: [
        TasksModule,
        TypeOrmModule.forRoot({
            autoLoadEntities: true,
            type: 'postgres',
            host: 'localhost',
            port: 54320,
            username: 'postgres',
            password: 'postgres',
            database: 'postgres',
            entities: ['dist/**/*.entity{.ts,.js}'],
            synchronize: false,
            retryDelay: 3000,
            retryAttempts: 10,
        }),
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
