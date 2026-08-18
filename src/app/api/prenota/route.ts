import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const data = body as Record<string, unknown>;
  if (!data.nome || !data.email || !data.arrivo || !data.partenza) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const id = `IB-${Date.now().toString(36).toUpperCase()}`;
  return NextResponse.json({ ok: true, id });
}
