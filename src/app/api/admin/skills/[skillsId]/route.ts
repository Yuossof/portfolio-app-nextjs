import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/utils/verifyToken";
import prisma from "@/utils/db";
// interface ParamsProps {
//     params: {skillsId: any}
// }
export async function DELETE(request: NextRequest, context: { params: { skillsId: string } }) {
    try {
        const { skillsId } = await context.params;
        const userPayload = verifyToken(request)
        if(!userPayload || userPayload.isAdmin === false) {
            return NextResponse.json({message: "hahahahaha try again 😉"}, { status: 400 })
        }
        await prisma.skills.delete({where: {id: skillsId}})
        return NextResponse.json({message: "skill deleted successfully"}, {status: 201})
    } catch (error) {
        return NextResponse.json({ message: "internal server error", error }, { status: 500 })
    }
}