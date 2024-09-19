import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const SECRET_KEY = 'supersecretkey';

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

    const token = jwt.sign({ userId: user.id, email: user.email }, SECRET_KEY, { expiresIn: '1h' });

    return NextResponse.json({ message: 'Login bem-sucedido!', token }, { status: 200 });
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    return NextResponse.json({ message: 'Erro ao fazer login.' }, { status: 500 });
  }
}
