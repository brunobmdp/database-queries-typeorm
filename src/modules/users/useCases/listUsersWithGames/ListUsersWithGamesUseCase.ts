import { inject, injectable } from "tsyringe";
import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

@injectable()
class ListUsersWithGamesUseCase {

  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ user_id }: IRequest): Promise<User> {
    const user = await this.usersRepository.findUserWithGamesById({ user_id });
    return user;
  }
}
export { ListUsersWithGamesUseCase };