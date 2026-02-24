import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Issue } from './issue.entity';

@Injectable()
export class IssuesService {
    constructor(
        @InjectRepository(Issue)
        private repo: Repository<Issue>
    ){}
    
    create(dto){
        const issue = this.repo.create(dto);
        return this.repo.save(issue);
    }
    findAll() {
        return this.repo.find();
    }
}
