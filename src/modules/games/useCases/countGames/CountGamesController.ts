import { Request, Response } from "express";
import { container } from "tsyringe";
import { CountGamesUseCase } from "./CountGamesUseCase";

class CountGamesController {
  async handle(request: Request, response: Response) {
    const countGamesUseCase = container.resolve(CountGamesUseCase);
    const count = await countGamesUseCase.execute();
    return response.json(count);
  }
}

export { CountGamesController };