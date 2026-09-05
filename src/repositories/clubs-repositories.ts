 import { clubModel } from "../models/clubs-models";

const database = [
        {
            id: 1,
            name: "Real Madri",
        },
    ];

export const findAllClubs = async (): Promise<clubModel[]> => {
    return database;
}