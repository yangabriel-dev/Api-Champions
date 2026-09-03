import { Request, Response } from "express";
import * as service from "../services/players-service";
import { noContent } from "../utilidades/http-helper";


export const getPlayer = async (req: Request, res: Response) => {
    const HttpResponse = await service.getPlayerService();
    res.status(HttpResponse.statusCode).json(HttpResponse.body);
};

export const getPlayerById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id as string, 19);
    const httpResponse = await service.getPLayerByIdService(id);
    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const postPlayer = async(req: Request, res: Response) => {
    const bodyValue = req.body;
    const httpResponse = await service.creatPlayerService(bodyValue);
    if(httpResponse){
        res.status(httpResponse.statusCode).json(httpResponse.body);
    } else {
        const response = await noContent();
        res.status(response.statusCode).json(httpResponse.body);
    }
};