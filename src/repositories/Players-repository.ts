interface PlayerMoldel {
    id: number;
    name: string;
}

const database: PlayerMoldel[] = [
    {id:1, name: "Messi"},
    {id:2, name: "Rolnaldo"},
];

export const findAllPlayers = async (): Promise<PlayerMoldel[]> => {
    return database;
};

export const findPlayerById = async (id: number): Promise<PlayerMoldel | undefined> => {
    return database.find((player) => player.id === id);
};