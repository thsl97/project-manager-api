import { Module } from '@nestjs/common';
import { InfrastructureModule } from '@project-manager-api/infrastructure/infrastructure.module';
import { GatewaysModule } from '@project-manager-api/gateways/gateways.module';

@Module({
  imports: [InfrastructureModule, GatewaysModule],
})
export class TasksModule {}
