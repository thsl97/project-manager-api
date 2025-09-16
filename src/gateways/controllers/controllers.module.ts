import { Module } from '@nestjs/common';
import { ProjectsController } from './projects/projects.controller';
import { TasksController } from './tasks/tasks.controller';
import { UsersController } from './users/users.controller';
import { UseCasesModule } from 'src/domain/use-cases/use-cases.module';

@Module({
  controllers: [ProjectsController, TasksController, UsersController],
  imports: [UseCasesModule],
})
export class ControllersModule {}
