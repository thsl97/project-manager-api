import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectsRepositoryService } from './repositories/projects.repository.service';
import { UsersRepositoryService } from './repositories/users.repository.service';
import { UserEntity } from './entities/user.entity';
import { ProjectEntity } from './entities/project.entity';
import { TaskEntity } from 'apps/tasks/src/infrastructure/database/entities/task.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, ProjectEntity, TaskEntity]),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
  providers: [ProjectsRepositoryService, UsersRepositoryService],
  exports: [ProjectsRepositoryService, UsersRepositoryService],
})
export class DatabaseModule {}
