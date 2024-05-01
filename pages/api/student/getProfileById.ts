import { NextResponse, NextRequest } from "next/server";
import { db } from "@/db";

export default async function handler(req: NextRequest) {
    if(req.method === 'GET') {
        const id = req.nextUrl.searchParams.get('id')
        const student = await db.student.findUnique({
            where: {
                id: Number(id)
            }
        })
        const {password, ...rest} = student
        return NextResponse.json(rest)
    }

}