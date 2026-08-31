import creatApp from "./app";
 
const app = creatApp();
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server running at port https://locahost:${port}`);
});