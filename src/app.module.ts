import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WorkspacesModule } from './workspaces/workspaces.module';
import { WorkspaceTasksModule } from './workspace-tasks/workspace-tasks.module';

@Module({
  imports: [WorkspacesModule, WorkspaceTasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
