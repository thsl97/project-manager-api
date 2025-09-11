import { Module } from '@nestjs/common';
import { ControllersModule } from './gateways/controllers/controllers.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ControllersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
