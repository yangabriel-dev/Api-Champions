import { clubModel } from "../models/clubs-models";
 import fs from "fs/promises";

const database = [
        {
            id: 1,
            name: "Real Madri",
        },
    ];

export const findAllClubs = async (): Promise<clubModel[]> => {
    const data = await fs.readFile("./src/data/clubs.json", "utf-8");
    const clubs: clubModel[] = JSON.parse(data);
    return clubs;
}