import {z} from "zod"
export const LoginValidatoin = z.object({
    businessEmail: z.string().email().min(1).max(255),
    password: z.string().min(1).max(255),
})