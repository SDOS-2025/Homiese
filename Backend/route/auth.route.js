import {Router} from 'express';
import {signUp } from "../controller/auth.controller.js";


const authRouter = new Router();

authRouter.post('/sign-in', (req, res) => {
    res.send("signIn");
});

authRouter.post("/sign-up" , signUp);

authRouter.post("/sign-out", (req, res) => {
    res.send("Logout");
})


export default authRouter;

