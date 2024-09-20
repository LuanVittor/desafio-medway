import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  padding-top: 60px;
  background-color: #f8f9fa;
  min-height: 100vh;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #001e56;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 30px;
`;

export const ContactList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.2rem;
  color: #001e56;
  font-family: 'Poppins', sans-serif;
`;

export const ContactLink = styled.a`
  color: #001e56;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #004085;
  }
`;