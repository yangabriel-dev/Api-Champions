import { noContent, ok } from "../utilidades/http-helper";

export const getPlayerService = async ()=>{
    const data = {player: "Neymar Jr"};
    let response = null;
    
    if (data){
    response = await ok(data);
    }else{
    response = await noContent();
    }

    return response;
};