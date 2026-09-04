import { Router } from "express";
import * as PlayersController from "./controllers/players-controllers";

const router = Router();

router.get("/players", PlayersController.getPlayer);
router.post("/players", PlayersController.postPlayer);
router.delete("/players/:id", PlayersController.deletePlayer);
router.patch("/players/:id", PlayersController.updatePlayer);

router.get("/players/:id", PlayersController.getPlayerById);


export default router;