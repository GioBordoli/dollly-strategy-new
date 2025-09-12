import { NextResponse } from "next/server";
import { z } from "zod";

const payloadSchema = z.object({
  name: z.string().min(1, "Nome richiesto"),
  email: z.string().email().optional().or(z.literal("")),
  notes: z.string().optional().or(z.literal("")),
  countryCode: z.enum(["+1", "+39"]),
  phone: z.string().min(4),
});

function normalizeDigits(input: string) {
  return input.replace(/[^\d]/g, "");
}

function toE164(countryCode: "+1" | "+39", rawPhone: string) {
  const digits = normalizeDigits(rawPhone);

  if (countryCode === "+1") {
    if (digits.length !== 10) return null;
    return `+1${digits}`;
  }

  if (countryCode === "+39") {
    if (digits.length < 6 || digits.length > 15) return null;
    return `+39${digits}`;
  }

  return null;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = payloadSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, notes, countryCode, phone } = parsed.data;
    const fullPhone = toE164(countryCode, phone);
    if (!fullPhone) {
      return NextResponse.json(
        { ok: false, error: "Numero non valido per il prefisso selezionato." },
        { status: 400 }
      );
    }

    const url = process.env.N8N_WEBHOOK_URL || "";
    if (!url) {
      return NextResponse.json({ ok: false, error: "Webhook non configurato" }, { status: 500 });
    }

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        notes,
        countryCode,
        phone, // raw
        fullPhone, // E.164
      }),
    });

    if (!res.ok) {
      const t = await res.text().catch(() => "");
      console.error("n8n error:", res.status, t);
      return NextResponse.json({ ok: false }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
} 