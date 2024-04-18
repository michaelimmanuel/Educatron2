import { NextResponse, NextRequest } from "next/server";

export default function handler(req: NextRequest) {
    return NextResponse.json({ name: "John Doe" });
}