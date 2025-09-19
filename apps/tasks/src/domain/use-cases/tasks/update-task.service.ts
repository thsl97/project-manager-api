import { Injectable } from '@nestjs/common';
import { BaseUseCase } from '@project-manager-api/domain/use-cases/base-use-case';
import { UsersRepositoryService } from '@project-manager-api/infrastructure/database/repositories/users.repository.service';
import { UpdateTaskDTO } from 'apps/tasks/src/gateways/controllers/dtos/update-task.dto';
import { ITask } from '../../interfaces/task.interface';
import { TasksRepositoryService } from 'apps/tasks/src/infrastructure/repositories/tasks.repository.service';

@Injectable()
export class UpdateTaskService implements BaseUseCase {
  constructor(private readonly tasksRepository: TasksRepositoryService) {}

  async execute(payload: { task: UpdateTaskDTO }): Promise<ITask> {
    await this.tasksRepository.updateById(payload.task);

    const task = this.tasksRepository.findById(payload.task.id);

    if (!task) {
      throw new Error('Tarefa não encontrado');
    }

    return task;
  }
}
