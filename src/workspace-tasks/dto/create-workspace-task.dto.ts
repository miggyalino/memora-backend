import { IsString } from 'class-validator';

export class CreateWorkspaceTaskDto {
  @IsString()
  title: string;

  @IsString()
  description?: string;

  @IsString()
  workspaceId: string;
}
