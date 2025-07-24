import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

interface BookingData {
  event: string;
  name: string;
  email: string;
  phone: string;
  people: number;
  date: string;
}

interface RawBookingData {
  event?: unknown;
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  people?: unknown;
  date?: unknown;
}


const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const rateLimitMap = new Map<string, number>();

const getClientIp = (req: NextRequest): string => {
  return req.headers.get('x-forwarded-for') || 'unknown';
};


const validateInput = (data: RawBookingData): BookingData | null => {
  const { event, name, email, phone, people, date } = data;
  if (
    typeof event !== 'string' ||
    typeof name !== 'string' ||
    typeof email !== 'string' ||
    typeof phone !== 'string' ||
    typeof date !== 'string' ||
    typeof people !== 'number'
  ) {
    return null;
  }
  return { event, name, email, phone, people, date };
};

let transporter: nodemailer.Transporter | null = null;

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
    return NextResponse.json({ message: 'Invalid JSON payload' }, { status: 400 });
  }

  const data = validateInput(body);
  if (!data) {
    return NextResponse.json({ message: 'Missing or invalid fields in the request' }, { status: 400 });
  }

  const { event, name, email, phone, people, date } = data;

  const mailHtml = `
    <h2>New Event Booking</h2>
    <ul>
      <li><strong>Event:</strong> ${event}</li>
      <li><strong>Name:</strong> ${name}</li>
      <li><strong>Email:</strong> ${email}</li>
      <li><strong>Phone:</strong> ${phone}</li>
      <li><strong>Number of People:</strong> ${people}</li>
      <li><strong>Date:</strong> ${date}</li>
    </ul>
  `;

  try {
    const transporter = getTransporter();

    await transporter.sendMail({
      from: process.env.SMTP_EMAIL,
      to: process.env.SMTP_EMAIL,
      subject: 'New Event Booking',
      html: mailHtml,
    });

    rateLimitMap.set(ip, now);
    return NextResponse.json({ message: 'Booking submitted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Email sending error:', error);
    const errorMessage = typeof error === 'object' && error !== null && 'message' in error ? (error as { message: string }).message : String(error);
    return NextResponse.json({ message: 'Failed to send booking email', error: errorMessage }, { status: 500 });
  }
}
