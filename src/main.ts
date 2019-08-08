import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  // Handle uncaught/unhandled exceptions
  process.on('uncaughtException', err => {});
  process.on('unhandledRejection', err => {});

  await app.listen(3000);
}
bootstrap();
