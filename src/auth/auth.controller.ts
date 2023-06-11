import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { LocalStrategy } from './local.strategy';
import { AuthGuard } from '@nestjs/passport';
import { UseGuard } from './UserGaurd';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly localStrategy: LocalStrategy
    ){}

    @UseGuards(UseGuard)
    @Post('login')
    async validate(@Request() req): Promise<any>{
        return {
            token: "token is here"
        }
    }
}
