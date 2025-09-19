import { Injectable } from '@nestjs/common';
import { BaseUseCase } from '@project-manager-api/domain/use-cases/base-use-case';
import { UsersRepositoryService } from '@project-manager-api/infrastructure/database/repositories/users.repository.service';
import { UpdateTaskDTO } from 'apps/tasks/src/gateways/controllers/dtos/update-task.dto';
import { TasksRepositoryService } from 'apps/tasks/src/infrastructure/database/repositories/tasks.repository.service';
import { ITask } from '../../interfaces/task.interface';

@Injectable()
export class UpdateTaskService implements BaseUseCase {
  constructor(
    private readonly usersRepository: UsersRepositoryService,
    private readonly tasksRepository: TasksRepositoryService,
  ) {}

  async execute(payload: {
    task: UpdateTaskDTO;
    userId: number;
  }): Promise<ITask> {
    const userData = await this.usersRepository.findById(payload.userId);

    if (!userData) {
      throw new Error('Usuário não encontrado');
    }

    await this.tasksRepository.updateById(payload.task);

    const task = this.tasksRepository.findById(payload.task.id);

    if (!task) {
      throw new Error('Tarefa não encontrado');
    }

    return task;
  }
}
