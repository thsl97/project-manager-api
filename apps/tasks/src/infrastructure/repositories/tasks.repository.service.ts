import { Injectable } from '@nestjs/common';
import { DataSource, DeepPartial, Repository } from 'typeorm';
import { TaskEntity } from '../entities/task.entity';
import { ITasksRepository } from 'apps/tasks/src/domain/repositories/tasks-repository.interface';
import { ITask } from 'apps/tasks/src/domain/interfaces/task.interface';

@Injectable()
export class TasksRepositoryService
  extends Repository<TaskEntity>
  implements ITasksRepository
{
  constructor(dataSource: DataSource) {
    super(TaskEntity, dataSource.createEntityManager());
  }

  findAll(userId: number): Promise<ITask[]> {
    return this.findBy({ user: { id: userId } });
  }

  findById(id: number): Promise<ITask> {
    return this.findOneByOrFail({ id });
  }

  async add(payload: DeepPartial<ITask>): Promise<ITask> {
    try {
      return this.save(payload);
    } catch (error) {
      console.error(error);
      throw new Error('Error adding task');
    }
  }

  updateById(payload: DeepPartial<ITask>) {
    if (payload.id == undefined) {
      throw new Error('ID is required to update a task');
    }
    return this.update(payload.id, payload);
  }
}
