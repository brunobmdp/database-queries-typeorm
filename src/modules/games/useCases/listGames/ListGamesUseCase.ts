import { inject, injectable } from "tsyringe";
import { Game } from "../../entities/Game";
import { IGamesRepository } from "../../repositories/IGamesRepository";

interface IResquest {
  param: string;
}

@injectable()
class ListGamesUseCase {
  constructor(
    @inject("GamesRepository")
    private gamesRepository: IGamesRepository
  ) {}
  async execute({ param }: IResquest): Promise<Game[]> {
    return await this.gamesRepository.findByTitleContaining(param);
  }
}
export { ListGamesUseCase };