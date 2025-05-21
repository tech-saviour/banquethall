import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

let lastRequestTime: number | null = null;

export async function POST(req: Request) {
  const { event, name, email, phone, people, date } = await req.json();

  const currentTime = Date.now();
  if (lastRequestTime && currentTime - lastRequestTime < 60000) {
    return NextResponse.json({ message: 'Please wait 1 minute before sending another request.' }, { status: 429 });
  }

  lastRequestTime = currentTime;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_EMAIL,
    to: process.env.SMTP_EMAIL,
    subject: 'New Event Booking',
    html: `
      <h2>New Event Booking</h2>
      <p><strong>Event:</strong> ${event}</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Number of People:</strong> ${people}</p>
      <p><strong>Date:</strong> ${date}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Booking submitted successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to send booking email', error }, { status: 500 });
  }
}
