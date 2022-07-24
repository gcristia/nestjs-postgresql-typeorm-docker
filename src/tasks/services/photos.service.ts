import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Photo } from '../entities/photo.entity'
import { Profile } from '../entities/profile.entity'

@Injectable()
export class PhotosService {
    constructor(
        @InjectRepository(Photo) private photosRepository: Repository<Photo>,
        @InjectRepository(Profile) private profilesRepository: Repository<Profile>
    ) {}

    async addPhoto(data: any): Promise<Photo> {
        const profile = await this.profilesRepository.findOneBy({ id: data.profileId })

        if (!profile) throw new NotFoundException('Profile not found')

        const newPhoto = new Photo()
        newPhoto.profile = profile
        newPhoto.url = data.url
        return this.photosRepository.save(newPhoto)
    }
}
