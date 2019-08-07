import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Handle uncaught/unhandled exceptions
  process.on('uncaughtException', err => {});
  process.on('unhandledRejection', err => {});

  await app.listen(3000);
}
bootstrap();
