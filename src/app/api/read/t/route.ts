import { NextResponse } from "next/server";
import pool from "@/lib/db"

export async function GET(request: Request) {
    try {
        const [rows] = await pool.query(`SELECT * FROM Teacher`);
        return NextResponse.json({ success: true, data: rows });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, error: "Error while reading TEACHER" }, { status: 500 });
    }
}