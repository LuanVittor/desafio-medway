import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { email, password } = await request.json();

  if (!email || !password) {
    return NextResponse.json({ message: 'Email e senha são obrigatórios.' }, { status: 400 });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user || user.password !== password) {
      return NextResponse.json({ message: 'Credenciais inválidas.' }, { status: 401 });
    }

    return NextResponse.json({ message: 'Login bem-sucedido!' }, { status: 200 });
  } catch (error) {
    console.error('Erro no login:', error);
    return NextResponse.json({ message: 'Erro no login.' }, { status: 500 });
  }
}
