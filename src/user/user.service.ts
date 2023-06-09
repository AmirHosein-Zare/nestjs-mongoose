import { Injectable } from '@nestjs/common';
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
}
