import {Injectable, UnauthorizedException} from '@nestjs/common';
import {UsersService} from "@/modules/users/users.service";
import {comparrePasswordHelper} from "@/helpers/util";
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
      private usersService: UsersService,
      private jwtService: JwtService

  ) {}

  async signIn(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException("Invalid email");
    }

    const isValidPassword = await comparrePasswordHelper(pass, user?.password)
    if (!isValidPassword) {
      throw new UnauthorizedException("Invalid password");
    }
    const payload = { sub: user._id, username: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
      refresh_token: await this.jwtService.signAsync(payload),
    };

  }
}
