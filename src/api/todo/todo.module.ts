import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoRepository } from './todo.repository';

@Module({
  imports: [TypeOrmModule.forFeature([TodoRepository])],
  providers: [TodoService],
  controllers: [TodoController],
  exports: [TodoService],
})
export class TodoModule {}
