import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { GithubService } from './services/github.service';
import { CommitsController } from './controllers/commits.controllers';

@Module({
  controllers: [AppController, CommitsController],
  providers: [GithubService],
})
export class AppModule {}
