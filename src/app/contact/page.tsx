"use client";

import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import Navbar from '@/components/Navbar/Navbar';
import { ContactItem, ContactLink, ContactList, Container, Title } from './style';
import withAuth from '@/hoc/withAuth';

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
