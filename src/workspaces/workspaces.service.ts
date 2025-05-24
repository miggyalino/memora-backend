import { Injectable } from '@nestjs/common';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';
import { UpdateWorkspaceDto } from './dto/update-workspace.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WorkspacesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createWorkspaceDto: CreateWorkspaceDto) {
    const workspace = await this.prisma.workspace.create({
      data: {
        name: createWorkspaceDto.name,
        description: createWorkspaceDto.description,
      },
    });

    return workspace;
  }

  async findAll() {
    const workspaces = await this.prisma.workspace.findMany({
      include: {
        workspaceTasks: true,
      },
    });

    return workspaces;
  }

  async findOne(id: string) {
    const workspace = await this.prisma.workspace.findUnique({
      where: {
        id,
      },
      include: {
        workspaceDocuments: true,
        workspaceQuizzes: true,
        workspaceTasks: true,
      },
    });

    return workspace;
  }

  async update(id: string, updateWorkspaceDto: UpdateWorkspaceDto) {
    const updatedWorkspace = await this.prisma.workspace.update({
      where: {
        id,
      },
      data: {
        ...updateWorkspaceDto,
      },
    });

    return updatedWorkspace;
  }

  async remove(id: string) {
    const deletedWorkspace = await this.prisma.workspace.delete({
      where: {
        id,
      },
    });

    return deletedWorkspace;
  }
}
