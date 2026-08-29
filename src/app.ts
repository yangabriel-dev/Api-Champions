import express, { Request, Response, json } from "express";
import { getPlayer } from "./controllers/players-controllers";

function creatApp(){
    const app = express();

    app.use(express.json());

    app.get("/", getPlayer);
    return app; 
}

export default creatApp;