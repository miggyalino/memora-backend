import { Test, TestingModule } from '@nestjs/testing';
import { WorkspaceTasksController } from './workspace-tasks.controller';
import { WorkspaceTasksService } from './workspace-tasks.service';

describe('WorkspaceTasksController', () => {
  let controller: WorkspaceTasksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkspaceTasksController],
      providers: [WorkspaceTasksService],
    }).compile();

    controller = module.get<WorkspaceTasksController>(WorkspaceTasksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
