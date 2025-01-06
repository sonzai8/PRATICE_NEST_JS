import {Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request} from '@nestjs/common';
import { AuthService } from './auth.service';
import {LocalAuthGuard} from "@/auth/passport/local-auth.guard";
import { Public } from '@/decorator/customize';
import { CreateAuthDto } from '@/auth/dto/create-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Public()
  @Post("login")
  @UseGuards(LocalAuthGuard)
  signin(@Request() req: Request){
    // @ts-ignore
    return this.authService.login(req.user)
  }

  // @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Post('register')
  @Public()
  register(@Body() createAuthDto: CreateAuthDto) {
    //console.log("da vao day")
    return this.authService.handleRegister(createAuthDto)
  }


}
