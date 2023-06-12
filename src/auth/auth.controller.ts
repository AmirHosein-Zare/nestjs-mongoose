import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { LocalStrategy } from './local.strategy';
import { UseGuard } from './UserGaurd';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly localStrategy: LocalStrategy,
        private readonly authService: AuthService
    ){}

    @UseGuards(UseGuard)
    @Post('login')
    async login(@Request() req): Promise<any>{
        const token = await this.authService.getTokenForUser(req.user);
        
        return {
            userId: req.user,
            token: token
        }
    }
}
