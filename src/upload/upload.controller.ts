import { Controller, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { UploadService } from './upload.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('file')
export class UploadController {
    constructor(
        private readonly uploadService:UploadService
    ){}

    @Post()
    @UseInterceptors(FileInterceptor('file'))
    uploadImage(@UploadedFile() file: Express.Multer.File){
        return this.uploadService.upload(file);
    }
}
