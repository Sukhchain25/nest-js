import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import mongoose from 'mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: mongoose.Model<User>,
  ) {}

  async findUsers(): Promise<User[]> {
    try {
      const users = await this.userModel.find();
      return users;
    } catch (error) {}
  }

  async createUser(user: User): Promise<User> {
    try {
       const res = await this.userModel.create(user);
      return res;
    } catch (error: any) {
      console.error('Error: ', error.message);
    }
  }
}
