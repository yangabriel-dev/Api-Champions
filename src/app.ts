import express, { Request, Response, json } from "express";

function creatApp(){
    const app = express();

    app.use(express.json());

    app.get("/", (req: Request, res: Response) => {
        res.status(200).json({player:"Neymar"});
    });
    return app; 
}

export default creatApp;