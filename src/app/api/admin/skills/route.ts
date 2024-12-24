import { NextResponse, NextRequest } from "next/server";
import { verifyToken } from "@/utils/verifyToken";
import prisma from "@/utils/db";

export async function POST(request: NextRequest) {
    try {
        const userPayload = verifyToken(request)
        if (!userPayload || userPayload.isAdmin === false) {
            return NextResponse.json({ message: "hahahahaha try again 😉" }, { status: 404 })
        }
        const body = await request.json() as { name: string, description: string }
        await prisma.skills.create({
            data: {
                name: body.name,
                description: body.description,
            }
        })
        return NextResponse.json({ message: "skill created successfully" }, { status: 201 })

    } catch (error) {
        return NextResponse.json({ message: "internal server error2", error }, { status: 500 })
    }
}

export async function GET(request: NextRequest) {
    try {

        const skills = await prisma.skills.findMany({
            select: {
                name: true,
                description: true,
                id: true
            }
        })
        return NextResponse.json(skills, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "internal server error", error }, { status: 500 })
    }
}


