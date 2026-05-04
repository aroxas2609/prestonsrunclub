import { NextResponse } from "next/server";

type SignupEntry = {
  email: string;
  name?: string;
  createdAt: string;
};

const subscribers: SignupEntry[] = [];

export async function GET() {
  return NextResponse.json({ count: subscribers.length });
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<SignupEntry>;
    const email = body.email?.trim().toLowerCase();
    const name = body.name?.trim();

    if (!email) {
      return NextResponse.json({ error: "Email is required." }, { status: 400 });
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      return NextResponse.json(
        { error: "Please provide a valid email." },
        { status: 400 },
      );
    }

    const exists = subscribers.some((s) => s.email === email);
    if (!exists) {
      subscribers.push({ email, name, createdAt: new Date().toISOString() });
    }

    return NextResponse.json({ ok: true, count: subscribers.length });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
