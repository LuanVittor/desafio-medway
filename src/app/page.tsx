"use client";

import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import RegisterModal from '@/components/RegisterModal';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background-color: #f0f2f5;
`;

const Card = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  font-size: 1rem;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1.2rem;
  color: white;
  background-color: #49ba70;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  width: 100%;

  &:hover {
    background-color: #3a8c59;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  color: rgb(0, 30, 86);
  margin-bottom: 20px;
`;

const RegisterLink = styled.p`
  margin-top: 15px;
  font-size: 1rem;
  color: #333;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: #001e56;
  }
`;

const Toast = styled.div<{ success: boolean }>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: ${(props) => (props.success ? '#49ba70' : '#e74c3c')};
  color: white;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  animation: fadeInOut 3s forwards;

  @keyframes fadeInOut {
    0% { opacity: 0; transform: translateY(20px); }
    10%, 90% { opacity: 1; transform: translateY(0); }
    100% { opacity: 0; transform: translateY(20px); }
  }
`;

const LoginPage: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
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
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        localStorage.setItem('isAuthenticated', 'true');
        setIsAuthenticated(true);
        router.push('/about');
      } else {
        const data = await response.json();
        showToastMessage(data.message || 'Erro ao fazer login', false);
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
