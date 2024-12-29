import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/db";

export async function GET(request: NextRequest, { params }: { params: Promise<{ projectId: string }> }) {
  try {
    const projectId = (await params).projectId; 

    if (!projectId) {
      return NextResponse.json({ message: "Missing projectId in params" }, { status: 400 });
    }

    const project = await prisma.projects.findUnique({
      where: { id: projectId },
      select: {
        name: true,
        description: true,
        demoUrl: true,
        githubUrl: true,
        projectsImages: true,
        tags: true,
      },
    });

    if (!project) {
      return NextResponse.json({ message: "Project not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "success", project }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Internal server error", error: error }, { status: 500 });
  }
}