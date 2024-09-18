import { NextResponse } from 'next/server';

interface User {
  email: string;
  password: string;
}

const users: User[] = [
  { email: 'teste@teste.com', password: '123456' },
];

export async function GET() {
  return NextResponse.json(users, { status: 200 });
}
