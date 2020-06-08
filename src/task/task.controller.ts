import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { TaskDto } from './task.dto';
import { TaskService } from './task.service';
import { TaskInterface } from './task.interface';

@Controller('task')
export class TaskController {
  constructor(private readonly taskS: TaskService) {}
  @Get()
  getAll(): TaskInterface[] {
    return this.taskS.getAll();
  }

  @Post()
  createTask(@Body() newTask: TaskDto): string {
    return `posted a new task ${newTask.name}`;
  }

  @Get(':id')
  getWithID(@Param('id') id): TaskInterface {
    return this.taskS.getWithID(id);
  }
}
