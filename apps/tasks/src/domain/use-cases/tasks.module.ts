import { Module } from '@nestjs/common';
import { InfrastructureModule } from 'apps/tasks/src/infrastructure/infrastructure.module';
import { GetAllTasksService } from './tasks/get-all-tasks.service';
import { GetTaskByIdService } from './tasks/get-task-by-id.service';
import { CreateTaskService } from './tasks/create-task.service';
import { UpdateTaskService } from './tasks/update-task.service';

@Module({
  imports: [InfrastructureModule],
  providers: [
    GetAllTasksService,
    GetTaskByIdService,
    CreateTaskService,
    UpdateTaskService,
  ],
  exports: [
    GetAllTasksService,
    GetTaskByIdService,
    CreateTaskService,
    UpdateTaskService,
  ],
})
export class TasksModule {}
