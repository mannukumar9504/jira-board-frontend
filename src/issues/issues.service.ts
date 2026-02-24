import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Issue } from './issue.entity';
import { DeepPartial, Repository } from 'typeorm';

@Injectable()
export class IssuesService {
    constructor(
        @InjectRepository(Issue)
        private repo: Repository<Issue>
    ){}
    
    create(dto: DeepPartial<Issue>[]) {
        const issue = this.repo.create(dto);
        return this.repo.save(issue);
    }
    findAll() {
        return this.repo.find();
    }
}
