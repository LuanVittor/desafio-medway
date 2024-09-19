import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background-color: #f0f2f5;
`;

export const Card = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
`;

export const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  font-size: 1rem;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Button = styled.button`
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

export const Title = styled.h1`
  font-size: 2rem;
  color: rgb(0, 30, 86);
  margin-bottom: 20px;
`;

export const RegisterLink = styled.p`
  margin-top: 15px;
  font-size: 1rem;
  color: #333;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: #001e56;
  }
`;

export const Toast = styled.div<{ success: boolean }>`
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
