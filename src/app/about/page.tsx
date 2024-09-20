"use client";

import styled, { keyframes } from 'styled-components';
import { useRouter } from 'next/navigation';
import Navbar from '../../components/Navbar/Navbar';
import withAuth from '@/hoc/withAuth';
import { ProfilePicture, Container, Introduction, Name, Description, SectionTitle, Timeline, TimelineItem, JobTitle, JobDescription, SkillsGrid, Button, ButtonGroup, SkillItem, skills } from './style';



const AboutPage: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <Container>
        <ProfilePicture src="/images/eu.jpg" alt="Minha Foto" />
        <Introduction>
          <Name>Luan Vitor Coelho de Araujo</Name>
          <Description>
            Desenvolvedor Full Stack com 4 anos de experiência na criação de soluções inovadoras e escaláveis, focado em otimização de processos e entrega de produtos de alta qualidade.
          </Description>
        </Introduction>

        <SectionTitle>Experiência Profissional</SectionTitle>
        <Timeline>
          <TimelineItem>
            <JobTitle>Full Stack Developer - Hospital Israelita Albert Einstein</JobTitle>
            <JobDescription>
              Desenvolvimento de software para uma plataforma de análise e interpretação de variantes genéticas, contribuindo para o avanço da medicina de precisão.
            </JobDescription>
          </TimelineItem>
          <TimelineItem>
            <JobTitle>Full Stack Developer - Tamoio Boas Impressões</JobTitle>
            <JobDescription>
              Contribuição para o design e desenvolvimento de um projeto de rifas dinâmico, utilizando React no front-end e Node.js no back-end.
            </JobDescription>
          </TimelineItem>
        </Timeline>

        <SectionTitle>Stacks Utilizadas</SectionTitle>
        <SkillsGrid>
          {skills.map((skill, index) => (
            <SkillItem key={index}>{skill}</SkillItem>
          ))}
        </SkillsGrid>

        <ButtonGroup>
          <Button onClick={() => router.push('/projects')}>Meus Projetos</Button>
          <Button onClick={() => router.push('/hobbies')}>Meus Hobbies</Button>
          <Button onClick={() => router.push('/contact')}>Contato</Button>
        </ButtonGroup>
      </Container>
    </>
  );
};

export default withAuth(AboutPage);
