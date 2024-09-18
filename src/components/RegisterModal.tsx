"use client";

import styled from 'styled-components';
import { useState } from 'react';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 600px;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: #999;

  &:hover {
    color: #333;
  }
`;

const Input = styled.input`
  padding: 10px;
  margin: 5px 0;
  font-size: 1rem;
  width: 95%;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 12px 24px;
  font-size: 1.1rem;
  color: white;
  background-color: #49ba70;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px;
  width: 100%;

  &:hover {
    background-color: #3a8c59;
  }
`;

const PasswordRequirements = styled.div`
  font-size: 0.85rem;
  margin-top: 8px;
  text-align: left;
  color: #333;
`;

const Requirement = styled.div<{ isValid: boolean }>`
  display: flex;
  align-items: center;
  color: ${(props) => (props.isValid ? '#49ba70' : '#666')};
  margin-top: 3px;
  font-size: 0.9rem;

  &:before {
    content: ${(props) => (props.isValid ? '"✔️"' : '"❌"')};
    margin-right: 5px;
  }
`;

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
    const isValidLength = password.length >= 5;
    return { hasLetter, hasNumber, isValidLength };
  };

  const { hasLetter, hasNumber, isValidLength } = validatePassword(signupPassword);

  const handleSignup = () => {
    if (!hasLetter || !hasNumber || !isValidLength) {
      showToastMessage('A senha deve ter pelo menos 5 caracteres, incluindo uma letra e um número.', false);
      return;
    }

    if (signupPassword !== confirmPassword) {
      showToastMessage('As senhas não coincidem!', false);
      return;
    }

    showToastMessage('Usuário criado com sucesso!', true);
    onClose();
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
          <Requirement isValid={isValidLength}>Ter pelo menos 5 caracteres</Requirement>
          <Requirement isValid={hasLetter}>Conter pelo menos uma letra</Requirement>
          <Requirement isValid={hasNumber}>Conter pelo menos um número</Requirement>
        </PasswordRequirements>
        <Input
          type="password"
          placeholder="Repita a Senha"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {signupPassword !== confirmPassword && confirmPassword && (
          <Requirement isValid={signupPassword === confirmPassword}>As senhas devem coincidir</Requirement>
        )}
        <Button onClick={handleSignup}>Cadastrar</Button>
      </ModalContent>
    </ModalOverlay>
  );
};

export default RegisterModal;
