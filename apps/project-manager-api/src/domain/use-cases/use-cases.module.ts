import { Module } from '@nestjs/common';
import { ProjectsModule } from './projects/projects.module';
import { UsersModule } from './users/users.module';

@Module({
  exports: [ProjectsModule, UsersModule],
  imports: [ProjectsModule, UsersModule],
})
export class UseCasesModule {}
