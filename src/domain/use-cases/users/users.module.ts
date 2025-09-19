import { Module } from '@nestjs/common';
import { GetUserByIdService } from './get-user-by-id.service';
import { CreateUserService } from './create-user.service';
import { DatabaseModule } from 'src/infrastructure/database/database.module';
import { GetUserByEmailService } from 'src/–-flat/domain/use-cases/users/get-user-by-email/get-user-by-email.service';

@Module({
  exports: [CreateUserService, GetUserByIdService, GetUserByEmailService],
  imports: [DatabaseModule],
  providers: [CreateUserService, GetUserByIdService, GetUserByEmailService],
})
export class UsersModule {}
