import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { LocalStrategy } from './local.strategy';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly localStrategy: LocalStrategy
    ){}

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async validate(@Request() req): Promise<any>{
        return {
            userId: req.body,
            token: "token is here"
        }
    }
}
