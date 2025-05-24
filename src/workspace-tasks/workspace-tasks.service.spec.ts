import { Test, TestingModule } from '@nestjs/testing';
import { WorkspaceTasksService } from './workspace-tasks.service';

describe('WorkspaceTasksService', () => {
  let service: WorkspaceTasksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkspaceTasksService],
    }).compile();

    service = module.get<WorkspaceTasksService>(WorkspaceTasksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
