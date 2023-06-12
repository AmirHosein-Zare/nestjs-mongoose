import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/user/schema/user.schema';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
        private readonly jwtService: JwtService
    ){}

    // validate username and password of user using passport.js
    async validate(username: string, password: string): Promise<any>{
        console.log('user service ->' + username + ' ----- ' + password);
        
        const user = await this.userModel.findOne({username: username});
        if(user && user.password === password){
            return user;
        }

        return null;
    }

    // getTokenForUser using jwt
    async getTokenForUser(user: User): Promise<any>{
        return this.jwtService.sign({
            username: user.username,
            sub: user.userId
        })
    }
}
