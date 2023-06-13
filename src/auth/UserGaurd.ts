import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class TokenGuard extends AuthGuard('local'){
    canActivate(context: ExecutionContext) {
        // Add any custom logic here before calling the parent canActivate method.
        return super.canActivate(context);
      }
}