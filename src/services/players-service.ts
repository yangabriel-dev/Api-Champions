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