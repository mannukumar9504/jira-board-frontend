import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { IssueStatus } from '../issue.entity';

export class CreateIssueDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  description: string;

  @IsEnum(IssueStatus)
  status: IssueStatus;
}