import { NextResponse, NextRequest } from "next/server";
import bcrypt from "bcryptjs"
import { setCookie } from "@/utils/generateToken";
import prisma from "@/utils/db";

type JWTpayloadTypes = {
    id: string,
    isAdmin: boolean
}

interface bodyInterface {
    email: string
    password: string
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json() as bodyInterface
        const user = await prisma.user.findUnique({ where: { email: body.email } })
        if (!user) {
            return NextResponse.json({ message: "please make an account, you do not have an account" }, { status: 400 })
        }
        const isPasswordMatch = await bcrypt.compare(body.password, user.password)
        if (!isPasswordMatch) {
            return NextResponse.json({ message: "invalid email or password" }, { status: 400 })
        }
        const jwtPayload: JWTpayloadTypes = {
            id: user.id,
            isAdmin: user.isAdmin,
        }
        const cookie = setCookie(jwtPayload)
        return NextResponse.json({ message: "Authenticated" }, { status: 200, headers: { "Set-Cookie": cookie } })
    } catch (error) {
        return NextResponse.json({ message: "internal server error", error }, { status: 500 })
    }
}