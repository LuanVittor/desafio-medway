"use client";

import styled from 'styled-components';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import withAuth from '@/hoc/withAuth';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  padding-top: 60px;
  background-color: #f8f9fa;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #001e56;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 30px;
`;

const ContactList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ContactItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.2rem;
  color: #001e56;
  font-family: 'Poppins', sans-serif;
`;

const ContactLink = styled.a`
  color: #001e56;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #004085;
  }
`;

const ContactPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Title>Contato</Title>
        <ContactList>
          <ContactItem>
            <FaPhone /> <span>(11) 99606-0994</span>
          </ContactItem>
          <ContactItem>
            <FaEnvelope /> <ContactLink href="mailto:luan_vittor@hotmail.com">luan_vittor@hotmail.com</ContactLink>
          </ContactItem>
          <ContactItem>
            <FaMapMarkerAlt /> <span>São José dos Campos, SP</span>
          </ContactItem>
          <ContactItem>
            <FaLinkedin /> <ContactLink href="https://www.linkedin.com/in/luan-vittor/" target="_blank">LinkedIn</ContactLink>
          </ContactItem>
          <ContactItem>
            <FaGithub /> <ContactLink href="https://github.com/LuanVittor" target="_blank">GitHub</ContactLink>
          </ContactItem>
        </ContactList>
      </Container>
    </>
  );
};

export default withAuth(ContactPage);
