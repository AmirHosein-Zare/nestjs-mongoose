import { Injectable, UploadedFile } from '@nestjs/common';

@Injectable()
export class UploadService {
    upload(@UploadedFile() file){
        return file
    }
}
