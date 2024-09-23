import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      select: {
        email: true,
      },
    });

    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error('Erro ao buscar emails:', error);
    return NextResponse.json({ message: 'Erro ao buscar emails.' }, { status: 500 });
  }
}
