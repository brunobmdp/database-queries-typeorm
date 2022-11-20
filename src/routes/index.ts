import { Router } from "express";
import { gamesRoutes } from "./games.routes";
import { usersRoutes } from "./users.routes";

const router = Router();
router.use("/games", gamesRoutes);
router.use("/users", usersRoutes);

export { router };