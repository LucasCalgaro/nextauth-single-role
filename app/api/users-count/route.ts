import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // ou use "force-static" se preferir cache

export async function GET() {
  const usersCount = await db.user.count();
  return NextResponse.json({ usersCount });
}
