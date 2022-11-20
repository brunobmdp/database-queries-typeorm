import { Router } from 'express';
import { CountGamesController } from '../modules/games/useCases/countGames/CountGamesController';
import { ListGamesController } from '../modules/games/useCases/listGames/ListGamesController';
import { ListUsersController } from '../modules/games/useCases/listUsers/ListUsersController';

const gamesRoutes = Router();

const countGamesController = new CountGamesController();
const listGamesController = new ListGamesController();
const listUsersController = new ListUsersController();

gamesRoutes.get("/", countGamesController.handle);
gamesRoutes.get("/search", listGamesController.handle);
gamesRoutes.get("/users", listUsersController.handle);

export { gamesRoutes };
