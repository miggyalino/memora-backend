import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WorkspaceTasksService } from './workspace-tasks.service';
import { CreateWorkspaceTaskDto } from './dto/create-workspace-task.dto';

@Controller('workspace-tasks')
export class WorkspaceTasksController {
  constructor(private readonly workspaceTasksService: WorkspaceTasksService) {}

  @Post()
  create(@Body() createWorkspaceTaskDto: CreateWorkspaceTaskDto) {
    return this.workspaceTasksService.create(createWorkspaceTaskDto);
  }

  @Get()
  findAll() {
    return this.workspaceTasksService.findAllTasks();
  }

  @Get('workspace/:workspaceId')
  findAllByWorkspace(@Param('workspaceId') workspaceId: string) {
    return this.workspaceTasksService.findAllTasksByWorkspace(workspaceId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workspaceTasksService.findOne(id);
  }

  @Patch(':id/pending')
  updateStatusToPending(@Param('id') id: string) {
    return this.workspaceTasksService.updateTaskToPending(id);
  }

  @Patch(':id/in-progress')
  updateStatusToInProgress(@Param('id') id: string) {
    return this.workspaceTasksService.updateTaskToInProgress(id);
  }

  @Patch(':id/completed')
  updateStatusToCompleted(@Param('id') id: string) {
    return this.workspaceTasksService.updateTaskToCompleted(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workspaceTasksService.deleteTask(id);
  }
}
