import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  background-color: #ffffff;
  min-height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 800px;
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  color: #001e56;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 20px;
`;

export const BackButton = styled.button`
  background-color: #01cfb5;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 20px;
  transition: background-color 0.3s;
  font-family: 'Poppins', sans-serif;
  
  &:hover {
    background-color: #008c7a;
  }
`;

export const Content = styled.div`
  max-width: 800px;
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

export const Description = styled.p`
  color: #333;
  font-size: 1.1rem;
  margin-bottom: 20px;
  font-family: 'Poppins', sans-serif;
`;

export const IframeContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;
