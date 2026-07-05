import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Faltan campos requeridos" },
        { status: 400 },
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "El servicio de email no está configurado" },
        { status: 500 },
      );
    }

    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "edmilzon.luna@gmail.com",
      subject: `Nuevo mensaje de ${name}`,
      html: `
        <h2>Nuevo mensaje desde el portafolio</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Error al enviar el mensaje" },
      { status: 500 },
    );
  }
}
