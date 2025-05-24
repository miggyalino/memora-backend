import { PartialType } from '@nestjs/mapped-types';
import { CreateWorkspaceTaskDto } from './create-workspace-task.dto';

export class UpdateWorkspaceTaskDto extends PartialType(CreateWorkspaceTaskDto) {}
