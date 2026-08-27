import express, {Request, Response} from "express";
 
const app = express()

app.get("/", (req: Request, res: Response) => {
    res.send("Hellor wolrd");
});

app.listen(3000);