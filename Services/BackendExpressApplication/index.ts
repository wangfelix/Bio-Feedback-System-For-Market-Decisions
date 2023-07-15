import express from "express";
let cors = require("cors");

const app: express.Application = express();

const port: number = 5200;

// Handle the coming data.
app.use(express.json());

app.use(cors());

// Handle '/', path of the api.
app.get("/", (_req, _res): void => {
    _res.json({
        name: "typescitp_api",
        path: "/",
        work: "search_other_apis",
    });
});

let fake_db: any = [];

type User = { email: string; firstName: string; lastName: string; password: string };

// Handle '/create', path for create user
app.post("/register-user", (_req, _res): void => {
    // Fetched the user using body data
    const user: User = _req.body as User;
    const { email, lastName, firstName, password } = user;

    // Assign the user in fake_db with id as a index
    fake_db.push(user);

    console.log(firstName);
    console.log(fake_db);

    _res.header("Access-Control-Allow-Origin", "*");
    _res.json({
        success: true,
    });
});

// Server setup
app.listen(port, () => {
    console.log(`TypeScript with Express
		http://localhost:${port}/`);
});
