import { NextResponse } from "next/server";
import Stripe from "stripe";

type Item = { name: string; amount: number; quantity: number };

export async function POST(req: Request) {
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json({ error: "Missing STRIPE_SECRET_KEY" }, { status: 500 });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  const body = (await req.json()) as { items?: Item[] };
  const items = body.items ?? [];

  if (!items.length) {
    return NextResponse.json({ error: "No items provided" }, { status: 400 });
  }

  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: items.map((item) => ({
      quantity: item.quantity,
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name
        },
        unit_amount: item.amount
      }
    })),
    success_url: `${baseUrl}/checkout?status=success`,
    cancel_url: `${baseUrl}/checkout?status=cancelled`
  });

  return NextResponse.json({ id: session.id });
}
