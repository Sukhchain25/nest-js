import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './schema/user.schema';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUsers(): Promise<User[]> {
    try {
      return await this.userService.findUsers();
    } catch (error: any) {
      console.error('Error: ', error.message);
    }
  }

  @Post()
  async createUser(
    @Body()
    user: CreateUserDto,
  ): Promise<User> {
    try {
      return this.userService.createUser(user);
    } catch (error: any) {
      console.log('Error: ', error.message ? error.message : error);
    }
  }
}
