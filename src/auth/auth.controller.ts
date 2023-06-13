import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { LocalStrategy } from './local.strategy';
import { TokenGuard } from './UserGaurd';
import { AuthService } from './auth.service';
import { JwtGuard } from './jwt.gaurd';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly localStrategy: LocalStrategy,
        private readonly authService: AuthService
    ){}

    @UseGuards(TokenGuard)
    @Post('login')
    async login(@Request() req): Promise<any>{
        const token = await this.authService.getTokenForUser(req.user);
        
        return {
            userId: req.user,
            token: token
        }
    }

    @Get('profile')
    @UseGuards(JwtGuard)
    profile(@Request() req): any{
        return req.user;
    }
}
