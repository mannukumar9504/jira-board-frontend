import { Module } from '@nestjs/common';
import { IssuesService } from './issues.service';
import { IssuesController } from './issues.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Issue } from './issue.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Issue])],
  providers: [IssuesService],
  controllers: [IssuesController]
})
export class IssuesModule {}
