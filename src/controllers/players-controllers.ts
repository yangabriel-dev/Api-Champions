import { Request, Response } from "express";
import * as service from "../services/players-service";


export const getPlayer = async (req: Request, res: Response) => {
    const HttpResponse = await service.getPlayerService();
    res.status(HttpResponse.statusCode).json(HttpResponse.body);
};

export const getPlayerById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id as string, 19);
    const httpResponse = await service.getPLayerByIdService(id);
    res.status(httpResponse.statusCode).json(httpResponse.body);
}