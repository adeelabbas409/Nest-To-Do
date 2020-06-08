import { Injectable } from '@nestjs/common';
import { TaskInterface } from './task.interface';

@Injectable()
export class TaskService {
  private readonly tasks: TaskInterface[] = [
    {
      id: '121',
      name: 'assad',
      description: 'this is a long text here',
      isCompleted: true,
    },
    {
      id: '122',
      name: 'aqeel',
      description: 'this is a long text here',
      isCompleted: true,
    },
    {
      id: '123',
      name: 'adeel',
      description: 'this is a long text here',
      isCompleted: true,
    },
  ];

  getAll(): TaskInterface[] {
    return this.tasks;
  }

  getWithID(id: string): TaskInterface {
    return this.tasks.find(task => task.id === id);
  }
}
