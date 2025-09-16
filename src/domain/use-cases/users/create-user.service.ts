import { Injectable } from '@nestjs/common';
import { BaseUseCase } from '../base-use-case';
import { UsersRepositoryService } from 'src/infrastructure/database/repositories/users.repository.service';
import { CreateUserDTO } from 'src/gateways/controllers/users/dtos/create-user.dto';
import { IUser } from 'src/domain/interfaces/user.interface';

@Injectable()
export class CreateUserService implements BaseUseCase {
  constructor(private readonly usersRepository: UsersRepositoryService) {}

  async execute(user: CreateUserDTO): Promise<IUser> {
    const createdUser = await this.usersRepository.create(user);

    if (!createdUser) {
      throw new Error('User could not be created');
    }

    return createdUser;
  }
}
