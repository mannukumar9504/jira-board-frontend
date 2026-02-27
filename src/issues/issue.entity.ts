import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum IssueStatus {
  TODO = 'todo',
  INPROGRESS = 'inprogress',
  DONE = 'done'
}

@Entity()
export class Issue {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column({ 
    type: 'enum',
    enum: IssueStatus,
    default: 'todo' 
  })
  status: string;
}