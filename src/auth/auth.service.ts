import {Injectable, UnauthorizedException} from '@nestjs/common';
import {UsersService} from "@/modules/users/users.service";
import {comparrePasswordHelper} from "@/helpers/util";
import { JwtService } from '@nestjs/jwt';
import {User} from "@/modules/users/schemas/user.schema";
import { CreateAuthDto } from '@/auth/dto/create-auth.dto';
import { Public } from '@/decorator/customize';
@Injectable()
export class AuthService {
  constructor(
      private usersService: UsersService,
      private jwtService: JwtService

  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException("Invalid email");
    }
    const isValidPassword = await comparrePasswordHelper(pass, user?.password)
    if (!user || !isValidPassword) return null
    return user
  }


  async login(user): Promise<any> {

    const payload = { username: user.email, sub: user._id };
    return {
      accessToken: this.jwtService.sign(payload),
    }
  }

  handleRegister = async(CreateAuthDto : CreateAuthDto) => {

    return this.usersService.handleRegister(CreateAuthDto)


  }

}
