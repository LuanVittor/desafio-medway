import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  min-height: 100vh;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #001e56;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  margin-bottom: 30px;
  text-align: center;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
  width: 100%;
`;