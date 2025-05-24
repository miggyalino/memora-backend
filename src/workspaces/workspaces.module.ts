import { Module } from '@nestjs/common';
import { WorkspacesService } from './workspaces.service';
import { WorkspacesController } from './workspaces.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [WorkspacesController],
  providers: [WorkspacesService],
  imports: [PrismaModule],
  exports: [WorkspacesService],
})
export class WorkspacesModule {}
