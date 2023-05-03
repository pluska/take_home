import { Controller, Get } from '@nestjs/common';
import { GithubService } from '../services/github.service';

@Controller()
export class CommitsController {
  constructor(private readonly githubService: GithubService) {}

  @Get('/commits')
  async getCommits(): Promise<any> {
    const commits = await this.githubService.getCommits();
    return commits;
  }
}
