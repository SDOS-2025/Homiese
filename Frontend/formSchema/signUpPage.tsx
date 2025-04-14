import {z} from "zod";

const signUpSchema = z.object({
    username: z.string().trim().min(8 , "Username should be least 8 char long"),
    email : z.string().email(),
    password: z.string().min(8 ,"Password must be at least 8 characters long"),
    confirmPassword : z.string(),
    }).refine((data) => data.password === data.confirmPassword ,{
        message : "Password does not match",
        path : ["confirmPassword"]
    }
);

export default signUpSchema;