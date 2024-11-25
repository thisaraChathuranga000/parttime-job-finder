import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
const bcrypt = require('bcrypt');
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from 'src/dto/auth/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<AuthDto> {
    const query = { email: email };
    const user = await this.usersService.findOne(query);
    if (!user) throw new NotFoundException('Email Does not exist');
    const isMatched = await this.comparePasswords(pass, user.password);
    if (!isMatched) throw new UnauthorizedException('Invalid Password');
    const payload = { sub: user };
    return {
      userDetails: user,
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async comparePasswords(
    password: string,
    hashedPassword: string,
  ): Promise<any> {
    return bcrypt
      .compare(password, hashedPassword)
      .then((isMatch: any) => {
        if (isMatch) return true;
        return false;
      })
      .catch((err: any) => err);
  }
}
