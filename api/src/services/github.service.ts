import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as dotenv from "dotenv";

dotenv.config();

@Injectable()
export class GithubService {
  async getCommits(): Promise<any> {
    const url = 'https://api.github.com/repos/pluska/take_home/commits';
    const response = await axios.get(url, {
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });
    const commits = []

    response.data.forEach(commit => {
      commits.push(commit.commit.message)
    });
    return commits.reverse();
  }
}
