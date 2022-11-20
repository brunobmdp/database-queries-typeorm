import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindUserByNameUseCase } from "./FindUserByNameUseCase";

class FindUserByNameController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { first_name, last_name } = request.body;
    const findUserByNameUseCase = container.resolve(FindUserByNameUseCase);
    const user = await findUserByNameUseCase.execute({ first_name, last_name });
    return response.json(user);

  }
}
export { FindUserByNameController };