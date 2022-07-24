import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Category } from './category.entity'

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({ default: false })
    completed: boolean

    @ManyToMany(() => Category, (category) => category.tasks)
    @JoinTable({
        name: 'tasks_categories',
        joinColumn: { name: 'task_id' },
        inverseJoinColumn: { name: 'category_id' },
    })
    categories: Category[]

    /* @CreateDateColumn({
         name: 'created_at',
         type: 'timestamp',
         default: () => 'CURRENT_TIMESTAMP',
     })
     createdAt: Date
 
     @UpdateDateColumn({
         name: 'updated_at',
         type: 'timestamp',
         default: () => 'CURRENT_TIMESTAMP',
     })
     updatedAt: Date*/
}
