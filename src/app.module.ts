import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { ConfigModule, ConfigService } from 'nestjs-config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from './api/auth/auth.module';
import { UserModule } from './api/user/user.module';
import { TodoModule } from './api/todo/todo.module';

import { AuthMiddleware } from './api/auth/auth.middleware';

import * as path from 'path';

@Module({
  imports: [
    ConfigModule.load(
      path.resolve(__dirname, 'config', '**', '!(*.d).{ts,js}'),
    ),
    TypeOrmModule.forRootAsync({
      useFactory: async (config: ConfigService) => config.get('database'),
      inject: [ConfigService],
    }),
    AuthModule,
    UserModule,
    TodoModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
