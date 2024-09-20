import styled from 'styled-components';

export const ModalOverlay = styled.div`
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

export const ModalContent = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 600px;
  position: relative;
`;

export const CloseButton = styled.button`
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

export const Input = styled.input`
  padding: 10px;
  margin: 5px 0;
  font-size: 1rem;
  width: 95%;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Button = styled.button`
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

export const PasswordRequirements = styled.div`
  font-size: 0.85rem;
  margin-top: 8px;
  text-align: left;
  color: #333;
`;

export const Requirement = styled.div<{ isValid: boolean }>`
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