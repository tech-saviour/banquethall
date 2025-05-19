import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

let lastRequestTime: number | null = null; 

export async function POST(req: Request) {
  const { name, email, query } = await req.json();

  const currentTime = Date.now();
  if (lastRequestTime && currentTime - lastRequestTime < 60000) { 
    return NextResponse.json({ message: 'Please wait 1 minute before sending another request.' }, { status: 429 });
  }

  // Update the last request time to the current time
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
    subject: 'New Enquiry',
    html: `
      <h2>New Enquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Query:</strong> ${query}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to send email', error }, { status: 500 });
  }
}
