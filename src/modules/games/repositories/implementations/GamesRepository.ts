import { getRepository, Repository } from 'typeorm';

import { User } from '../../../users/entities/User';
import { Game } from '../../entities/Game';

import { IGamesRepository } from '../IGamesRepository';

export class GamesRepository implements IGamesRepository {
  private repository: Repository<Game>;

  constructor() {
    this.repository = getRepository(Game);
  }

  async findByTitleContaining(param: string): Promise<Game[]> {
    return await this.repository
      .createQueryBuilder("game")
      .where("game.title ilike :parameter", { parameter: `%${param}%` })
      .getMany();

  }

  async countAllGames(): Promise<[{ count: string }]> {
    const count = await this.repository
      .query(`SELECT COUNT(title) FROM games`);

    return count; // Complete usando raw query
  }

  async findUsersByGameId(id: string): Promise<User[]> {
    const users = await this.repository
      .createQueryBuilder("game")
      .relation(Game, "users")
      .of(id)
      .loadMany();

    return users;

  }
}
