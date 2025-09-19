import { NestFactory } from '@nestjs/core';
import { TasksModule } from './tasks.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(TasksModule, {
    transport: Transport.REDIS,
    options: { host: 'localhost', port: 6379 },
  });

  await app.listen();
}
bootstrap();
