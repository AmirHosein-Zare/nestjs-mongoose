import { Injectable } from '@nestjs/common';
import { UserService } from "src/user/user.service";

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService
    ){}

    async validate(username: string, password: string): Promise<any>{
        const user = await this.userService.findByQuery({username: username});
        if(user[0] && user[0].password === password){
            return user[0];
        }

        return null;
    }
}
