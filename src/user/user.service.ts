import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { User } from './schema/user.schema';

@Injectable()
export class UserService {
    constructor(
        private readonly userRep: UserRepository
    ){}

    // find all
    async findAll(): Promise<User[]>{
        return await this.userRep.findAll();
    }

    // find by id
    async findById(id: number): Promise<User>{
        const user = await this.userRep.findById(id);
        if(!user) throw new NotFoundException();
        return user;
    }
}
