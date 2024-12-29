import { NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"


export async function GET(request: NextRequest){
    try {
        (await cookies()).delete("jwtToken")
        return NextResponse.json({message: "logout"})
    } catch (error) {
        return NextResponse.json({message: "internal server error", err: error} , {status: 500})
    }
}