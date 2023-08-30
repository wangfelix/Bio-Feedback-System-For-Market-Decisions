import express from "express";
import { User } from "./Types/user";
let cors = require("cors");
const bcrypt = require("bcrypt");
import mongoose from "mongoose";
import { LogInRequestBody } from "./Types/logInRequestBody";
import { PostTrackSessionRequestBody } from "./Types/postTrackSessionRequestBody";
const UserSchema = require("./Models/userModel");
const SessionSchema = require("./Models/sessionModel");

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

// Register User
app.post("/register-user", async (_req, _res) => {
    const user: User = _req.body as User;
    const { password } = user;

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const userWithHashedPassword: User = {
            ...user,
            password: hashedPassword,
        };

        const usera = await UserSchema.create(userWithHashedPassword);

        console.log(usera);

        fake_db.push(userWithHashedPassword);

        console.log(fake_db);

        _res.json({ usera });
    } catch (e) {
        console.log(e);
        _res.status(500).send();
    }
});

// Login User
app.post("/log-in", async (_req, _res) => {
    const loginData: LogInRequestBody = _req.body as LogInRequestBody;
    const { email, password } = loginData;

    try {
        const user = await UserSchema.findOne({ email: email });

        const matches = await bcrypt.compare(password, user.password);

        if (matches) {
            _res.json({ user });
        } else {
            _res.status(403).send();
        }
    } catch (e) {
        console.log(e);
        _res.status(500).send();
    }
});

// Get all Users
app.get("/get-users", async (_req, _res) => {
    try {
        const users = await UserSchema.find();

        _res.json({ users });
    } catch (e) {
        console.log(e);
        _res.status(500).send();
    }
});

// Track Session
app.post("/track-session", async (_req, _res) => {
    const sessionData: PostTrackSessionRequestBody = _req.body as PostTrackSessionRequestBody;
    const {
        userId,
        sensorFilePath,
        experimentFilePath,
        experimentAlias,
        experimentId,
        sensorName,
        sessionName,
        duration,
        sensorId,
    } = sessionData;

    try {
        const session = await SessionSchema.create({
            userId: userId,
            name: sessionName,
            sensorName: sensorName,
            sensorId: sensorId,
            sensorFilePath: sensorFilePath,
            duration: duration,
            experimentAlias: experimentAlias,
            experimentId: experimentId,
            experimentFilePath: experimentFilePath,
        });
        _res.json({ session });
    } catch (e) {
        console.log(e);
        _res.status(500).send();
    }
});

mongoose
    .connect("mongodb+srv://felixwang:3584gVenus@cluster0.ge6vnss.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
        console.log("Connected to Mongodb.");

        // Server setup
        app.listen(port, () => {
            console.log(`Server runing on http://localhost:${port}/`);
        });
    })
    .catch((e) => console.log(e));
