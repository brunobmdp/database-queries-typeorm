import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListUsersWithGamesUseCase } from "./ListUsersWithGamesUseCase";

class ListUsersWithGamesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const user_id = request.body;
    const listUsersWithGamesUseCase = container.resolve(ListUsersWithGamesUseCase);

    const user = await listUsersWithGamesUseCase.execute(user_id);

    return response.json(user);
  }
}

export { ListUsersWithGamesController };