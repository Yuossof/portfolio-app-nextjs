import { NextResponse, NextRequest } from "next/server";
import prisma from "@/utils/db";
import { verifyToken } from "@/utils/verifyToken";
export async function POST(request: NextRequest) {
    try {
        const userPayload = await verifyToken(request)
        if(!userPayload || userPayload.isAdmin !== true){
            return NextResponse.json({message: "sorry you are not user"}, {status: 400})
        }
        const body = await request.json()
        const projects = await prisma.projects.create({
            data: {
                name: body.name,
                description: body.description
            }
        })
        return NextResponse.json({message: "project creates successfully", projects}, {status: 201})
    } catch (error) {
        return NextResponse.json({message: "internal server error"}, {status: 500})
    }
}

export async function GET(request: NextRequest) {
    try {
        const projects = await prisma.projects.findMany()
        return NextResponse.json(projects, {status: 200})
    } catch (error) {
        return NextResponse.json({message: "internal server error"}, {status: 500})
    }
}