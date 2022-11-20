import { inject, injectable } from "tsyringe";
import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IResquest {
  first_name: string;
  last_name: string;
}

@injectable()
class FindUserByNameUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ first_name, last_name }: IResquest): Promise<User[] | undefined> {
    const user = await this.usersRepository.findUserByFullName({ first_name, last_name });
    return user;
  }
}
export { FindUserByNameUseCase };