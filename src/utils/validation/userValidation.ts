import z from "zod"

export const validateRegisterSchema = z.object({
    name: z.string().max(20).min(3),
    email: z.string().max(30).min(3),
    password: z.string().min(6).max(30)
})