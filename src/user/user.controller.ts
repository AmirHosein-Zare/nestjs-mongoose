import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './schema/user.schema';
import { FilterQuery } from 'mongoose';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ){}

    @Get()
    async findAll(): Promise<User[]>{
        return await this.userService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: string): Promise<User>{
        return await this.userService.findById(id);
    }

    @Post('query')
    async find(@Body() query: FilterQuery<User>): Promise<User>{
        return await this.userService.findByQuery(query);
    }

    @Post()
    async create(@Body() input: User): Promise<User>{
        return await this.userService.create(input);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() input: Partial<User>): Promise<User>{
        return await this.userService.update(id, input);
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<User>{
        return await this.userService.delete(id);
    }
}
