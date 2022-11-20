import { inject, injectable } from "tsyringe";
import { IGamesRepository } from "../../repositories/IGamesRepository";

@injectable()
class CountGamesUseCase {
  constructor(
    @inject("GamesRepository")
    private gamesRepository: IGamesRepository
  ) {}

  async execute(): Promise<[{ count: string }]> {
    return await this.gamesRepository.countAllGames();
  }

}
export { CountGamesUseCase };