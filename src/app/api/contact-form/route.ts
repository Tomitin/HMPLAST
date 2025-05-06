import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// --- Rate limiting setup ---
const rateLimitMap = new Map<string, { count: number; lastRequest: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for') || 'unknown';
  const now = Date.now();

  // Rate limit check
  const record = rateLimitMap.get(ip);
  if (record) {
    if (now - record.lastRequest < RATE_LIMIT_WINDOW_MS) {
      record.count += 1;
      if (record.count > MAX_REQUESTS_PER_WINDOW) {
        return NextResponse.json({ error: 'Too many requests. Try again later.' }, { status: 429 });
      }
    } else {
      rateLimitMap.set(ip, { count: 1, lastRequest: now });
    }
  } else {
    rateLimitMap.set(ip, { count: 1, lastRequest: now });
  }

  const body = await req.json();
  if (body.company) {
    return NextResponse.json({ success: true }, { status: 200 }); // silently ignore spam
  }
  const { name, email, message, subject } = body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,       // your Gmail address
      pass: process.env.GMAIL_PASS,       // app-specific password
    },
  });

  const mailOption = {
    from: `${email}`,
    to: `${process.env.GMAIL_USER}`,
    subject: subject,
    text: `
    ${name} from ${email} wrote:
    ${message}
    `,
  };


  try {
    await transporter.sendMail(mailOption, (err, data) => {
      if (err) {
        console.log(err);
        return NextResponse.json({ error: 'Email could not be sent' }, { status: 500 });
      } else {
        return NextResponse.json({ success: true });
      }
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Email could not be sent' }, { status: 500 });
  }
}