import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/user/schema/user.schema';
import { UserService } from "src/user/user.service";

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>
    ){}

    async validate(username: string, password: string): Promise<any>{
        const user = await this.userModel.findOne({username: username});
        if(user && user.password === password){
            return user;
        }

        return null;
    }
}
