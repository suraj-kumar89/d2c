import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      spend,
      goal,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_content,
      utm_term,
    } = body;

    // ✅ Save to Supabase
    const { error } = await supabase.from("d2c_leads").insert([
      {
        name,
        email,
        monthly_spend: spend,
        growth_goal: goal,
        utm_source,
        utm_medium,
        utm_campaign,
        utm_content,
        utm_term,
      },
    ]);

    if (error) throw error;

    // ✅ Send email via Resend
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "hello@shitanshudigital.com",
      subject: "🚀 New D2C Lead",
      html: `
        <h2>New Lead Received</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Spend:</b> ${spend}</p>
        <p><b>Goal:</b> ${goal}</p>
        <hr/>
        <p><b>UTM Source:</b> ${utm_source}</p>
        <p><b>UTM Medium:</b> ${utm_medium}</p>
        <p><b>UTM Campaign:</b> ${utm_campaign}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}