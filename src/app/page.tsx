"use client";

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { signIn } from 'next-auth/react';
import RegisterModal from '@/components/RegisterModal/RegisterModal';
import { Button, Card, Container, Input, RegisterLink, Title, Toast } from './style';

const LoginPage: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState<{ message: string, success: boolean } | null>(null);

  useEffect(() => {
    const handleEnterKey = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        handleLogin();
      }
    };

    window.addEventListener('keydown', handleEnterKey);

    return () => {
      window.removeEventListener('keydown', handleEnterKey);
    };
  }, [email, password]);

  const handleLogin = async () => {
    try {
      const res = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });

      if (res?.error) {
        showToastMessage(res.error || 'Erro ao fazer login.', false);
      } else {
        router.push('/about');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      showToastMessage('Erro ao fazer login. Tente novamente.', false);
    }
  };

  const showToastMessage = (message: string, success: boolean) => {
    setShowToast({ message, success });
    setTimeout(() => setShowToast(null), 3000);
  };

  return (
    <Container>
      <Card>
        <Title>Login</Title>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Entrar</Button>
        <RegisterLink onClick={() => setShowModal(true)}>Não tem uma conta? Cadastre-se agora</RegisterLink>
      </Card>

      {showModal && <RegisterModal onClose={() => setShowModal(false)} showToastMessage={showToastMessage} />}
      {showToast && <Toast success={showToast.success}>{showToast.message}</Toast>}
    </Container>
  );
};

export default LoginPage;
