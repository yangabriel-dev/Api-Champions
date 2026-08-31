import { Router } from "express";
import * as PlayersController from "./controllers/players-controllers";

const router = Router();

router.get("/players", PlayersController.getPlayer);
router.get("/players/:id", PlayersController.getPlayerById)

export default router;