import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { TypeOrmModule} from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ProjectsModule } from './projects/projects.module';
import { IssuesModule } from './issues/issues.module';



@Module({
  imports: [
  TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'jira',
  autoLoadEntities: true,
  synchronize: true
}),UsersModule, ProjectsModule, IssuesModule],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule {}
