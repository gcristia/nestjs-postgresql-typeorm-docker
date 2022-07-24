import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from '../entities/user.entity'
import { Profile } from '../entities/profile.entity'

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private usersRepository: Repository<User>,
        @InjectRepository(Profile) private profilesRepository: Repository<Profile>
    ) {}

    findAll(): Promise<User[]> {
        return this.usersRepository.find({
            relations: ['profile', 'profile.photo'],
        })
    }

    async create(body: any): Promise<User> {
        const profile = new Profile()
        profile.name = body.name
        profile.lastName = body.lastName
        const newProfile = await this.profilesRepository.save(profile)

        const user = new User()
        user.email = body.email
        user.password = body.password
        user.profile = newProfile

        return this.usersRepository.save(user)
    }
}
