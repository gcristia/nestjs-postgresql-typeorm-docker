import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm'

import { User } from './user.entity'
import { Photo } from './photo.entity'

@Entity()
export class Profile {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({ name: 'last_name' })
    lastName: string

    @OneToOne(() => User, (user) => user.profile)
    profile: User

    @OneToMany(() => Photo, (photo) => photo.profile)
    photo: Photo[]
}
