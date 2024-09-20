import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #ffffff;
  min-height: 100vh;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  color: #001e56;
  font-family: 'Poppins', sans-serif;
  margin: 80px 0 20px;
`;

export const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
`;

export const Card = styled.div`
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  padding: 15px;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const CardImage = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
`;

export const CardTitle = styled.h5`
  font-size: 1.5rem;
  color: #001e56;
  margin-top: 10px;
`;

export const CardText = styled.p`
  color: #333;
  font-size: 1rem;
  margin-top: 10px;
`;

export const Button = styled.button`
  background-color: #01cfb5;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #008c7a;
  }
`;