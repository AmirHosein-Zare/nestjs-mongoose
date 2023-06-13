import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtGuard extends AuthGuard('jwt'){
    canActivate(context: ExecutionContext) {
        // Add any custom logic here before calling the parent canActivate method.
        return super.canActivate(context);
      }
}