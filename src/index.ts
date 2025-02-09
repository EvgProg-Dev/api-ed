import express, { Request, Response } from "express";


const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!!!!");
});

app.get("/users", (req: Request, res: Response) => {
    res.send("USERS!!!!!");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
