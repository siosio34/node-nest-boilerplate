import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

import { AllExceptionsFilter } from './filters/all-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new AllExceptionsFilter());

  // Handle uncaught/unhandled exceptions
  process.on('uncaughtException', err => {
    console.log('uncaughtException', err);
  });
  process.on('unhandledRejection', err => {
    console.log('unhandledRejection', err);
  });

  await app.listen(3000);
}
bootstrap();
