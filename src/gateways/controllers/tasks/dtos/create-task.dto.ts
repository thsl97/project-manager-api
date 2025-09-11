import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTaskDTO {
  @IsNotEmpty({ message: 'Task name must be defined' })
  @IsString()
  name: string;

  @IsNotEmpty({ message: 'Task status must be defined' })
  @IsString()
  status: 'pending' | 'completed';

  projectId: number;
}
