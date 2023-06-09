import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './schema/user.schema';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ){}

    @Get()
    async findAll(): Promise<User[]>{
        return await this.userService.findAll();
    }
}
