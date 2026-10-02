import express from "express";
import router from "./routes";
import cors from "cors";

function creatApp(){
    const app = express();

    app.use(cors());
    app.use(express.json());
    app.use("/api", router);

    return app; 
}

export default creatApp;