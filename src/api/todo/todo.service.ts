import { Injectable } from '@nestjs/common';
import { TodoRepository } from './todo.repository';

@Injectable()
export class TodoService {
  constructor(private readonly todoRepository: TodoRepository) {}

  async findAll() {
    return await this.todoRepository.find();
  }
}
