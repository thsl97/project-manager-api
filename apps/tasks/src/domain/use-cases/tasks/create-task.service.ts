import { Injectable } from '@nestjs/common';
import { BaseUseCase } from '@project-manager-api/domain/use-cases/base-use-case';
import { CreateTaskDTO } from 'apps/tasks/src/gateways/controllers/dtos/create-task.dto';
import { TasksRepositoryService } from 'apps/tasks/src/infrastructure/repositories/tasks.repository.service';
import { ITask } from '../../interfaces/task.interface';

@Injectable()
export class CreateTaskService implements BaseUseCase {
  constructor(private readonly tasksRepository: TasksRepositoryService) {}

  async execute(payload: {
    task: CreateTaskDTO;
    userId: number;
  }): Promise<ITask> {
    console.log('Creating task');
    const createdTask = await this.tasksRepository.add({
      name: payload.task.name,
      status: payload.task.status,
      project: { id: payload.task.projectId },
      user: { id: payload.userId },
    });

    if (!createdTask) {
      throw new Error('Erro ao criar tarefa');
    }

    return createdTask;
  }
}
