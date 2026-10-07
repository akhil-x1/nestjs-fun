import { Injectable } from '@nestjs/common';
import { UsersService, UserWithoutPassword } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async validateUser(
    username: string,
    password: string,
  ): Promise<UserWithoutPassword | null> {
    const user = await this.userService.findOne(username);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
