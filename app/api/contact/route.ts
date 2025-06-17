import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  const { name, email, phone, plotSize, message } = await request.json()

  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number.parseInt(process.env.SMTP_PORT || "587"),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  const mailOptions = {
    from: `"Avon Hills Resort" <${process.env.SMTP_FROM}>`,
    to: process.env.CONTACT_EMAIL,
    subject: "New Contact Form Submission - Avon Hills Resort",
    html: `
      <h1>New Contact Form Submission</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Preferred Plot Size:</strong> ${plotSize} Yards</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  }

  try {
    await transport.sendMail(mailOptions)
    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Failed to send email:", error)
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred"
    return NextResponse.json({ error: `Failed to send email: ${errorMessage}` }, { status: 500 })
  }
}

