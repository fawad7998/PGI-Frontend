import {z} from "zod"
export const registerValidation = z.object({
    companyName:z.string().min(3).max(255),
    businessEmail: z.string().email().min(1).max(255),
    phoneNumber:z.string(),
    name:z.string().min(1).max(255)
    
})