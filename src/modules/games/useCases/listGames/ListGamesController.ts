import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListGamesUseCase } from "./ListGamesUseCase";

class ListGamesController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { param } = request.body;
    const listGamesUseCase = container.resolve(ListGamesUseCase);
    const games = await listGamesUseCase.execute({ param });
    return response.json(games);
  }
}
export { ListGamesController };