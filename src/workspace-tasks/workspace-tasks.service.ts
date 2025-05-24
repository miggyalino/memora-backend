import { Injectable } from '@nestjs/common';
import { CreateWorkspaceTaskDto } from './dto/create-workspace-task.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { WorkspacesService } from 'src/workspaces/workspaces.service';
import { TaskStatus } from '@prisma/client';

@Injectable()
export class WorkspaceTasksService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly workspaceService: WorkspacesService,
  ) {}

  async create(createWorkspaceTaskDto: CreateWorkspaceTaskDto) {
    const newWorkspaceTask = await this.prisma.workspaceTasks.create({
      data: {
        title: createWorkspaceTaskDto.title,
        description: createWorkspaceTaskDto.description,
        workspace: {
          connect: {
            id: createWorkspaceTaskDto.workspaceId,
          },
        },
      },
    });

    return newWorkspaceTask;
  }

  async findAllTasks() {
    const tasks = await this.prisma.workspaceTasks.findMany();

    return tasks;
  }

  async findAllTasksByWorkspace(workspaceId: string) {
    // If the workspaceId is valid and there is an actual workspace assocaited with the id
    const workspace = await this.workspaceService.findOne(workspaceId);

    if (!workspace) {
      throw new Error(`Workspace with id ${workspaceId} does not exist.`);
    }
    // If it exists then continue with the query logic of getting the tasks by workspace

    // Find all tasks that has a workspaceId that is equal to the workspaceId passed in
    const tasks = await this.prisma.workspaceTasks.findMany({
      where: {
        workspaceId,
      },
    });

    return tasks;
  }

  async findOne(id: string) {
    const task = await this.prisma.workspaceTasks.findUnique({
      where: {
        id,
      },
    });

    if (!task) {
      throw new Error(`Task with id ${id} does not exist.`);
    }

    return task;
  }

  async updateTaskToInProgress(id: string) {
    const updatedTask = await this.prisma.workspaceTasks.update({
      where: {
        id,
      },
      data: {
        status: TaskStatus.IN_PROGRESS,
      },
    });

    return updatedTask;
  }

  async updateTaskToCompleted(id: string) {
    const updatedTask = await this.prisma.workspaceTasks.update({
      where: {
        id,
      },
      data: {
        status: TaskStatus.COMPLETED,
      },
    });

    return updatedTask;
  }

  async updateTaskToPending(id: string) {
    const updatedTask = await this.prisma.workspaceTasks.update({
      where: {
        id,
      },
      data: {
        status: TaskStatus.PENDING,
      },
    });

    return updatedTask;
  }

  async deleteTask(id: string) {
    const deletedTask = await this.prisma.workspaceTasks.delete({
      where: {
        id,
      },
    });

    return deletedTask;
  }
}
