import { NextResponse } from "next/server";
/** Payment placeholder endpoint. */
export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const amount = Number(body?.amount || 0);
  return NextResponse.json({ ok: true, message: "Payment integration placeholder", amount, currency: "SAR", paymentUrl: null });
}
