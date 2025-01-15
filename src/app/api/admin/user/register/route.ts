import { NextResponse, NextRequest } from "next/server";
import { setCookie } from "@/utils/generateToken";
import bcrypt from "bcryptjs"
import { validateRegisterSchema } from "@/utils/validation/userValidation";
import prisma from "@/utils/db";

type jwtPayloadType = {
    id: string,
    isAdmin: boolean
}

interface bodyInterface {
    name: string,
    email: string
    password: string
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json() as bodyInterface
        const validation = validateRegisterSchema.safeParse(body)
        if (!validation.success) {
            return NextResponse.json({ message: validation.error.issues[0].message }, { status: 400 })
        }

        const user = await prisma.user.findUnique({ where: { email: body.email } })

        if (user) {
            return NextResponse.json({ message: "this user already registered" }, { status: 400 })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(body.password, salt)
        const newUser = await prisma.user.create({
            data: {
                name: body.name,
                email: body.email,
                password: hashedPassword
            },
            select: {
                id: true,
                isAdmin: true
            }
        })

        const jwtPayloada: jwtPayloadType = {
            id: newUser.id,
            isAdmin: newUser.isAdmin
        }
        const cookie = setCookie(jwtPayloada)


        return NextResponse.json({ message: "User Created" }, { status: 201, headers: { "Set-Cookie": cookie } })
    } catch (error) {
        return NextResponse.json({ message: "internal server error", error }, { status: 500 })
    }
}