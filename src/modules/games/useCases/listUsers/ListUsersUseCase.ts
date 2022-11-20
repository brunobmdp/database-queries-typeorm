import { inject, injectable } from "tsyringe";
import { User } from "../../../users/entities/User";
import { IGamesRepository } from "../../repositories/IGamesRepository";

interface IRequest {
  id: string;
}
@injectable()
class ListUsersUseCase {
  constructor(
    @inject("GamesRepository")
    private gamesRepository: IGamesRepository
  ) {}
  async execute({ id }: IRequest): Promise<User[]> {
    return await this.gamesRepository.findUsersByGameId(id)
  }

}
export { ListUsersUseCase };
