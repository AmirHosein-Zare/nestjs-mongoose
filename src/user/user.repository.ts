import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "./schema/user.schema";
import { FilterQuery, Model } from "mongoose";

@Injectable()
export class UserRepository {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>
    ){}

    // find all method
    async findAll(): Promise<User[]>{
        return await this.userModel.find();
    }

    // find by id method
    async findById(id: number): Promise<User>{
        return await this.userModel.findById(id);
    }

    // find by Query
    async find(query: FilterQuery<User>): Promise<User[]>{
        return await this.userModel.findOne(query);
    }

    // create method
    async create(user: User): Promise<User>{
        const newUser = new this.userModel(user);
        return await newUser.save()
    }

    // update method
    async update(id: number, user: Partial<User>): Promise<User>{
        return await this.userModel.findByIdAndUpdate(id, user, { new: true });
    }

    // delete method
    async delete(id: number): Promise<User>{
        return await this.userModel.findByIdAndRemove(id);
    }
}