import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

interface EmailInput {
  name: string;
  email: string;
  query: string;
}

interface ValidatedEmailInput {
  name: string;
  email: string;
  query: string;
}


const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const rateLimitMap = new Map<string, number>();

let transporter: nodemailer.Transporter | null = null;

const getClientIp = (req: NextRequest): string => {
  return req.headers.get('x-forwarded-for') || 'unknown';
};

const getTransporter = () => {
  if (!process.env.SMTP_EMAIL || !process.env.SMTP_PASSWORD) {
    throw new Error('SMTP_EMAIL and SMTP_PASSWORD must be defined in environment variables');
  }

  if (!transporter) {
    transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });
  }

  return transporter;
};

const validateInput = (data: Partial<EmailInput>): ValidatedEmailInput | null => {
  const { name, email, query } = data;
  if (
    typeof name !== 'string' ||
    typeof email !== 'string' ||
    typeof query !== 'string' ||
    !name.trim() ||
    !email.includes('@') ||
    !query.trim()
  ) {
    return null;
  }
  return { name: name.trim(), email: email.trim(), query: query.trim() };
};

export async function POST(req: NextRequest) {
  const ip = getClientIp(req);
  const now = Date.now();

  if (rateLimitMap.has(ip) && now - (rateLimitMap.get(ip) || 0) < RATE_LIMIT_WINDOW_MS) {
    return NextResponse.json(
      { message: 'Please wait at least 1 minute before sending another request.' },
      { status: 429 }
    );
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ message: 'Invalid JSON body' }, { status: 400 });
  }

  const data = validateInput(body);
  if (!data) {
    return NextResponse.json({ message: 'Missing or invalid fields' }, { status: 400 });
  }

  const { name, email, query } = data;

  const mailHtml = `
    <h2>New Enquiry</h2>
    <ul>
      <li><strong>Name:</strong> ${name}</li>
      <li><strong>Email:</strong> ${email}</li>
      <li><strong>Query:</strong> ${query}</li>
    </ul>
  `;

  try {
    const transporter = getTransporter();

    await transporter.sendMail({
      from: process.env.SMTP_EMAIL,
      to: process.env.SMTP_EMAIL,
      subject: 'New Enquiry Received',
      html: mailHtml,
    });

    rateLimitMap.set(ip, now);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error: any) {
    console.error('Email error:', error);
    return NextResponse.json({ message: 'Failed to send email', error: error.message }, { status: 500 });
  }
}
