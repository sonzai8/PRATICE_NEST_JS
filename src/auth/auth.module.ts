
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';

import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import {UsersModule} from "@/modules/users/users.module";
import {ConfigService} from "@nestjs/config";
import {PassportModule} from "@nestjs/passport";
import {LocalStrategy} from "@/auth/passport/local.strategy";
import {JwtStrategy} from "@/auth/passport/jwt.strategy";

//npm install --save-exact @nestjs/passport@10.0.3 passport@0.7.0 passport-local@1.0.0
//npm install --save-dev @types/passport-local
//npm install --save-exact nestjs/jwt@10.2.0 passport-jwt@4.0.1
@Module({
  imports: [
      PassportModule,
    UsersModule,
    JwtModule.registerAsync({
      useFactory: async (configService: ConfigService) => ({
        global: true,
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: {
          expiresIn: configService.get<string>('JWT_ACCESS_TOKEN_EXPIRED')
        }
      }),
      inject: [ConfigService]
    })
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
