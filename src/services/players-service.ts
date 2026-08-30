import * as PlayerRepository from "../repositories/Players-repository";
import { noContent, ok } from "../utilidades/http-helper";

export const getPlayerService = async ()=>{
    const data = await PlayerRepository.findAllPlayers();
    let response = null;
    
    if (data){
    response = await ok(data);
    }else{
    response = await noContent();
    }

    return response;
};