import creatApp from "./app";
 
const app = creatApp();
const port = process.env.PORT || 3333;

app.listen(port, () => {
    console.log(`Server running at port http://localhost:${port}`);
});