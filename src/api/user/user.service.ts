import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async findOne(email: string): Promise<User> {
    const user = await this.userRepository.findOne({ email });
    return user;
  }

  async create(createUser: User) {
    return await this.userRepository.save(createUser);
  }
}
