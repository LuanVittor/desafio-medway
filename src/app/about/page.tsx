"use client";

import styled, { keyframes } from 'styled-components';
import { useRouter } from 'next/navigation';
import Navbar from '../../components/Navbar';

const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(-20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const slideInLeft = keyframes`
  0% { opacity: 0; transform: translateX(-100px); }
  100% { opacity: 1; transform: translateX(0); }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  padding-top: 100px;
  background-color: #f8f9fa;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.05);
`;

const ProfilePicture = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 4px solid #ffffff;
  margin-bottom: 20px;
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  }
`;

const Introduction = styled.div`
  text-align: center;
  color: #001e56;
  font-family: 'Poppins', sans-serif;
  animation: ${fadeIn} 1.5s ease-in-out;
  margin-bottom: 30px;
`;

const Name = styled.h1`
  margin: 0;
  font-size: 2.5rem;
  color: #001e56;
  font-weight: 800;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
`;

const Description = styled.p`
  font-size: 1.1rem;
  max-width: 600px;
  line-height: 1.5;
  color: #001e56;
  margin-bottom: 30px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: #001e56;
  margin-top: 40px;
  margin-bottom: 20px;
  font-weight: 700;
`;

const Timeline = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 20px;
  position: relative;
  margin-top: 20px;
`;

const TimelineItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 30px;
  position: relative;
  padding-left: 20px;
  animation: ${slideInLeft} 1s ease forwards;
  border-left: 3px solid #01cfb5;

  &:before {
    content: '';
    position: absolute;
    left: -8px;
    top: 0;
    width: 15px;
    height: 15px;
    background-color: #01cfb5;
    border-radius: 50%;
  }
`;

const JobTitle = styled.h3`
  font-size: 1.3rem;
  color: #001e56;
  margin: 0;
`;

const JobDescription = styled.p`
  font-size: 0.9rem;
  color: #333;
  margin: 5px 0 0 0;
  line-height: 1.5;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width: 800px;
  margin-top: 30px;
`;

const SkillItem = styled.div`
  background-color: #ffffff;
  padding: 15px;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  justify-content: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  color: #ffffff;
  background-color: #001e56;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #004085;
    transform: scale(1.05);
  }
`;

const skills = [
  'Python', 'Django', 'JavaScript', 'Angular', 'React', 
  'Node.js', 'Docker', 'Material UI', 'Git - Github', 
  'Redux', 'Testes Unitários'
];

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

export default AboutPage;
