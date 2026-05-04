import { NextResponse } from "next/server";

type RsvpEntry = {
  name: string;
  email: string;
  paceGroup: string;
  createdAt: string;
};

const rsvps: RsvpEntry[] = [];

export async function GET() {
  return NextResponse.json({
    count: rsvps.length,
    latest: rsvps.slice(-8).reverse(),
  });
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<RsvpEntry>;
    const name = body.name?.trim();
    const email = body.email?.trim().toLowerCase();
    const paceGroup = body.paceGroup?.trim() || "Social";

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 },
      );
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      return NextResponse.json(
        { error: "Please provide a valid email." },
        { status: 400 },
      );
    }

    rsvps.push({
      name,
      email,
      paceGroup,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true, count: rsvps.length });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
