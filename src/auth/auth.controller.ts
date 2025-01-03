import {Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request} from '@nestjs/common';
import { AuthService } from './auth.service';
import {LocalAuthGuard} from "@/auth/passport/local-auth.guard";
import {JwtAuthGuard} from "@/auth/passport/Jwt-auth.guard";

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("login")
  @UseGuards(LocalAuthGuard)
  signin(@Request() req: Request){
    // return this.authService.signIn(createAuthDto.username, createAuthDto.password);
    console.log(req);
    // @ts-ignore
    return this.authService.login(req.user)
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

}
