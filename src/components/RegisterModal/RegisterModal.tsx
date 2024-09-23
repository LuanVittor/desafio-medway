"use client";

import { useState } from 'react';
import { ModalOverlay, ModalContent, CloseButton, PasswordRequirements, Requirement, Button, Input } from './style';

interface RegisterModalProps {
  onClose: () => void;
  showToastMessage: (message: string, success: boolean) => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ onClose, showToastMessage }) => {
  const [email, setEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const validatePassword = (password: string) => {
    const hasLetter = /[A-Za-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const isValidLength = password.length >= 6;
    return { hasLetter, hasNumber, isValidLength };
  };

  const { hasLetter, hasNumber, isValidLength } = validatePassword(signupPassword);

  const handleSignup = async () => {
    if (!hasLetter || !hasNumber || !isValidLength) {
      showToastMessage('A senha deve ter pelo menos 6 caracteres, incluindo uma letra e um número.', false);
      return;
    }

    if (signupPassword !== confirmPassword) {
      showToastMessage('As senhas não coincidem!', false);
      return;
    }

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password: signupPassword }),
      });

      const data = await response.json();

      if (response.ok) {
        showToastMessage('Usuário criado com sucesso!', true);
        onClose();
      } else {
        showToastMessage(data.message || 'Erro ao criar usuário.', false);
      }
    } catch (error) {
      showToastMessage('Erro ao criar usuário. Tente novamente.', false);
    }
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>×</CloseButton>
        <h2 style={{ textAlign: 'center', fontSize: '1.6rem' }}>Crie sua Conta</h2>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          value={signupPassword}
          onChange={(e) => setSignupPassword(e.target.value)}
        />
        <PasswordRequirements>
          A senha deve:
          <Requirement isValid={isValidLength}>Ter pelo menos 6 caracteres</Requirement>
          <Requirement isValid={hasLetter}>Conter pelo menos uma letra</Requirement>
          <Requirement isValid={hasNumber}>Conter pelo menos um número</Requirement>
        </PasswordRequirements>
        <Input
          type="password"
          placeholder="Repita a Senha"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
          <Requirement isValid={signupPassword === confirmPassword && confirmPassword.length > 0}>As senhas devem coincidir</Requirement>
        <Button onClick={handleSignup}>Cadastrar</Button>
      </ModalContent>
    </ModalOverlay>
  );
};

export default RegisterModal;
