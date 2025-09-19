import {
  Controller,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { GetAllTasksService } from '../../domain/use-cases/tasks/get-all-tasks.service';
import { GetTaskByIdService } from '../../domain/use-cases/tasks/get-task-by-id.service';
import { CreateTaskService } from '../../domain/use-cases/tasks/create-task.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateTaskDTO } from './dtos/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(
    private readonly getAllTasksUseCase: GetAllTasksService,
    private readonly getTaskByIdUseCase: GetTaskByIdService,
    private readonly createTaskUseCase: CreateTaskService,
  ) {}

  @MessagePattern({ cmd: 'ping' })
  async ping(@Payload() data: { message: string }) {
    console.log('Received ping', data.message);
    return 'pong';
  }

  @MessagePattern({ cmd: 'get_tasks' })
  async findAll(@Payload() data: { userId: number }) {
    try {
      console.log('received get_tasks message');

      return await this.getAllTasksUseCase.execute({ userId: data.userId });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @MessagePattern({ cmd: 'get_task_by_id' })
  async findOne(@Payload() data: { userId: number; taskId: number }) {
    try {
      console.log('received get_task_by_id message');

      return await this.getTaskByIdUseCase.execute({
        userId: data.userId,
        taskId: data.taskId,
      });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @MessagePattern({ cmd: 'create_task' })
  async create(@Payload() data: { userId: number; task: CreateTaskDTO }) {
    try {
      console.log('received create_task message');

      return await this.createTaskUseCase.execute({
        userId: data.userId,
        task: data.task,
      });
    } catch (error) {
      throw new UnprocessableEntityException(error.message);
    }
  }
}
