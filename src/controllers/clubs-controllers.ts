import { Request, Response } from "express"
import * as services from "../services/clubs-services"

export const getClubs = async (req: Request, res: Response) => {
    const response = await services.getClubsServices();
    res.status(response.statusCode).json(response.body);
};