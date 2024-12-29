import { NextResponse, NextRequest } from "next/server";
// import prisma from "@/utils/db";
import { verifyToken } from "@/utils/verifyToken";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
// interface ProjectBody {
//     name: string,
//     description: string,
//     demoUrl: string,
//     githubUrl: string,
//     tags: [
//         {
//             tagName: string
//         }
//     ]
// }
export async function POST(request: NextRequest) {
    try {
        const userPayload = verifyToken(request)
        if(!userPayload || userPayload.isAdmin !== true){
            return NextResponse.json({message: "sorry you are not user"}, {status: 400})
        }
        const body = await request.json()
        const project = await prisma.projects.create({
            data: {
                name: body.name,
                description: body.description,
                demoUrl: body.demoUrl,
                githubUrl: body.githubUrl,
            }
        })
        const projectTags = body.tags.map((tagName: string) => ({
            tagName: tagName, 
            projectId: project.id,
        }));

        await prisma.tags.createMany({
            data: projectTags
        })

        const projectImages = body.ProjectsImages.map((image: string) => ({
            imageUrl: image,
            projectId: project.id
        }))
    
        await prisma.projectsImages.createMany({
            data: projectImages
        })

        return NextResponse.json({message: "project creates successfully"}, {status: 201})
    } catch (error) {
        return NextResponse.json({message: "internal server error", error}, {status: 500})
    }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: NextRequest) {
    try {
        const projects = await prisma.projects.findMany({
            select: {
                id: true,
                name: true,
                description: true,
                demoUrl: true,
                githubUrl: true,
                tags: true,
                projectsImages: true
            }
        })
        return NextResponse.json(projects, {status: 200})
    } catch (error) {
        return NextResponse.json({message: "internal server error", error}, {status: 500})
    }
}