import { Module } from '@nestjs/common';
import { GetUserByIdService } from './get-user-by-id.service';
import { CreateUserService } from './create-user.service';
import { DatabaseModule } from 'src/infrastructure/database/database.module';

@Module({
  exports: [CreateUserService, GetUserByIdService],
  imports: [DatabaseModule],
  providers: [CreateUserService, GetUserByIdService],
})
export class UsersModule {}
