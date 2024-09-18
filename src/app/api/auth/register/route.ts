import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { email, password } = await request.json();

  if (!email || !password) {
    return NextResponse.json({ message: 'Email e senha são obrigatórios.' }, { status: 400 });
  }

  try {
    const userExists = await prisma.user.findUnique({
      where: { email },
    });

    if (userExists) {
      return NextResponse.json({ message: 'Usuário já registrado.' }, { status: 409 });
    }

    await prisma.user.create({
      data: {
        email,
        password,
      },
    });

    return NextResponse.json({ message: 'Usuário registrado com sucesso!' }, { status: 201 });
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    return NextResponse.json({ message: 'Erro ao registrar usuário.' }, { status: 500 });
  }
}
