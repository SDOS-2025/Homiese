import {Router} from 'express';
import {signUp , signIn} from "../controller/auth.controller.js";


const authRouter = new Router();

authRouter.post('/sign-in', signIn);

authRouter.post("/sign-up" , signUp);

authRouter.post("/sign-out", (req, res) => {
    res.send("Logout");
})


export default authRouter;

