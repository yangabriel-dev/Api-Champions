import { PlayerMoldel } from "../models/player-model";
import { statisticsModel } from "../models/statistics-models";
import * as PlayerRepository from "../repositories/Players-repository";
import * as HttpResponse from "../utilidades/http-helper";

export const getPlayerService = async ()=>{
    const data = await PlayerRepository.findAllPlayers();
    let response = null;
    
    if (data){
    response = await HttpResponse.ok(data);
    }else{
    response = await HttpResponse.noContent();
    }

    return response;
};

export const getPLayerByIdService = async (id: number) => {
    //pedir para o repositorio de dados
    const data = await PlayerRepository.findPlayerById(id)
    let response = null;
    
    if(data){
        response = HttpResponse.ok(data);
    }else{
        response = HttpResponse.noContent();
    }

    return response;
}

export const creatPlayerService = async (player: PlayerMoldel)=>{
    let response = null;
    //verifica se está vazio
    if (player){       
        await PlayerRepository.insertPlayer(player);
        response = await HttpResponse.created();
    } else {
        response = await HttpResponse.badRequest(); 
    }
    return response;
};

export const deletePlayerService = async (id: number) => {
    let response = null;
    await PlayerRepository.deleteOnePlayer(id);
    response = await HttpResponse.ok({message: "deleted"})
    return response;
};

export const updatePlayerService = async (id: number, statistics: statisticsModel) => {
    const data = await PlayerRepository.findAndModifyPlayer(id, statistics);
    const response = await HttpResponse.ok(data);
    return response;
};