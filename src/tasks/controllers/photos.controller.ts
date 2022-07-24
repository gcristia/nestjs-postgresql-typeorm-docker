import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common'
import { PhotosService } from '../services/photos.service'

@Controller('api/photos')
export class PhotosController {
    constructor(private photosService: PhotosService) {}

    @Post()
    addPhoto(@Body() body: any, @Res() response) {
        this.photosService
            .addPhoto(body)
            .then((photoList) => response.status(HttpStatus.OK).json(photoList))
            .catch(({ message }) => {
                response.status(HttpStatus.NOT_FOUND).json({ message })
            })
    }
}
