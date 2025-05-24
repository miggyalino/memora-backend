import { Module } from '@nestjs/common';
import { WorkspaceTasksService } from './workspace-tasks.service';
import { WorkspaceTasksController } from './workspace-tasks.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { WorkspacesModule } from 'src/workspaces/workspaces.module';

@Module({
  controllers: [WorkspaceTasksController],
  providers: [WorkspaceTasksService],
  imports: [PrismaModule, WorkspacesModule],
})
export class WorkspaceTasksModule {}
