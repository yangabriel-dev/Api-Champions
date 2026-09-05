import * as Httpresponse from "../utilidades/http-helper";
import * as repositories from "../repositories/clubs-repositories";

export const getClubsServices = async () =>{
    const data = await repositories.findAllClubs();
    const response = Httpresponse.ok(data);
    return response;
}