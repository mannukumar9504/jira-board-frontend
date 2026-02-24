import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Issue {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column({ default: 'todo' })
  status: string;
}