/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/require-await */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { User } from '../users/user.schema'; // adjust path if needed

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  // Validate user credentials
  async validateUser(
    email: string,
    password: string,
  ): Promise<Omit<User, 'password'> | null> {
    const user = await this.usersService.findByEmail(email); // should return plain object via .lean()

    if (user && (await bcrypt.compare(password, String(user.password)))) {
      const { password: _, ...rest } = user;
      const result = { ...rest, _id: user._id };
      return result;
    }

    return null;
  }

  // Generate JWT token
  async login(user: { _id: string; email: string }) {
    const payload = {
      sub: user._id,
      email: user.email,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  // Login using email and password (called from controller)
  async loginWithCredentials(email: string, password: string) {
    const user = await this.usersService.findByEmail(email); // should return lean object

    if (!user || !(await bcrypt.compare(password, String(user.password)))) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return this.login({ _id: String(user._id), email: user.email });
  }
}
