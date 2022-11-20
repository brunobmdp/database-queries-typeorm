import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { User } from "../../entities/User"


@injectable()
class ListAllUsersUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute(): Promise<User[]> {
    const users = await this.usersRepository.findAllUsersOrderedByFirstName();
    return users;
  }
}
export { ListAllUsersUseCase };