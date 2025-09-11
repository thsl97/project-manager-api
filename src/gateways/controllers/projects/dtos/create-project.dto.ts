import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProjectDTO {
  @IsNotEmpty({ message: 'Project name must be defined' })
  @IsString()
  name: string;

  @IsNotEmpty({ message: 'A descrição do projeto precisa de ser definida' })
  @IsString()
  description: string;
}
