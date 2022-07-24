import { DataSource } from 'typeorm'

const typeOrmConfig = new DataSource({
    migrationsTableName: 'migrations',
    type: 'postgres',
    host: 'localhost',
    port: 54320,
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    synchronize: false,
    entities: ['src/**/*.entity.ts'],
    migrations: ['src/database/migrations/*.ts'],
})

export default typeOrmConfig
