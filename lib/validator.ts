import * as z from 'zod';

const loginData = z.object({
    email: z.string().email(),
    password: z.string().
        min(8, {message: "Password must be at least 8 characters long"}),
})

const registerData = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().
        min(8, {message: "Password must be at least 8 characters long"}),
    bio: z.string()
})

export {loginData, registerData}