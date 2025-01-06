import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import {AuthGuard} from "@nestjs/passport";
import { JwtService } from '@nestjs/jwt';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from '@/decorator/customize';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt'){
  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext) {

    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) {
      return true;
    }

    return super.canActivate(context);
  }

  handleRequest(err, user, info) {
    if (err || !user){
      throw new UnauthorizedException("Access Token Không hợp lệ");
    }
    return user
  }

}