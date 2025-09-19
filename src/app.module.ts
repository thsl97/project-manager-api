import { Module } from '@nestjs/common';
import { ControllersModule } from './gateways/controllers/controllers.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DomainModule } from './domain/domain.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { GatewaysModule } from './gateways/gateways.module';
import { AuthService } from './–-flat/infrastructure/auth/auth/auth.service';
import { GetUserByEmailService } from './–-flat/domain/use-cases/users/get-user-by-email/get-user-by-email.service';
import { Domain } from 'domain';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuardService } from './gateways/guards/auth-guard.service';

@Module({
  imports: [InfrastructureModule, DomainModule, GatewaysModule],
  controllers: [AppController],
  providers: [AppService, { provide: APP_GUARD, useClass: AuthGuardService }],
})
export class AppModule {}
