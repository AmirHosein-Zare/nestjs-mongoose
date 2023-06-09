import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { User } from './schema/user.schema';
import { FilterQuery } from 'mongoose';

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

    // find by query
    async findByQuery(query: FilterQuery<User>):Promise<User[]>{
        const user = await this.userRep.find(query);
        if(!user) throw new NotFoundException();
        return user;
    }

    
}
