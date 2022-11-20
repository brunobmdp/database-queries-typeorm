import { Router } from "express";

import { FindUserByNameController } from "../modules/users/useCases/findUserByName/FindUserByNameController";
import { ListAllUsersController } from "../modules/users/useCases/listAllUsers/ListAllUsersController";
import { ListUsersWithGamesController } from "../modules/users/useCases/listUsersWithGames/ListUsersWithGamesController";


const usersRoutes = Router();

const findUsersByNameController = new FindUserByNameController();
const listAllUsersController = new ListAllUsersController();
const listUsersWithGamesController = new ListUsersWithGamesController()

usersRoutes.get("/search", findUsersByNameController.handle);
usersRoutes.get("/", listAllUsersController.handle);
usersRoutes.get("/games", listUsersWithGamesController.handle);

export { usersRoutes };
