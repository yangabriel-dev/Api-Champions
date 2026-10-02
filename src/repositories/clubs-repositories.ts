import { clubModel } from "../models/clubs-models";
 import fs from "fs/promises";

export const findAllClubs = async (): Promise<clubModel[]> => {
    const data = await fs.readFile("./src/data/clubs.json", "utf-8");
    const clubs: clubModel[] = JSON.parse(data);
    return clubs;
}