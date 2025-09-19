import { Module } from '@nestjs/common';
import { TasksModule } from '../tasks.module';

@Module({
  imports: [TasksModule],
  exports: [TasksModule],
})
export class DomainModule {}
