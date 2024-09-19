"use client";

import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import withAuth from '@/hoc/withAuth';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #ffffff;
  min-height: 100vh;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #001e56;
  font-family: 'Poppins', sans-serif;
  margin: 80px 0 20px;
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
`;

const Card = styled.div`
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

const CardImage = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
`;

const CardTitle = styled.h5`
  font-size: 1.5rem;
  color: #001e56;
  margin-top: 10px;
`;

const CardText = styled.p`
  color: #333;
  font-size: 1rem;
  margin-top: 10px;
`;

const Button = styled.button`
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

const ProjectsPage: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <MainContainer>
        <Title>Projetos</Title>
        <ProjectsContainer>
          <Card>
            <CardImage>
              <Image
                src="/images/TrybeStore.png"
                alt="Trybe Store"
                fill
                style={{ objectFit: 'cover' }}
              />
            </CardImage>
            <CardTitle>Trybe Store</CardTitle>
            <CardText>
              Uma loja online completa, feita em React.js, com todas as informações retiradas da API do MercadoLivre.
            </CardText>
            <CardText> Realizado em: 2021</CardText>
            <Button onClick={() => router.push('/projects/1')}>Mais Informações</Button>
          </Card>
          <Card>
            <CardImage>
              <Image
                src="/images/Recipes_App.png"
                alt="Recipes App"
                fill
                style={{ objectFit: 'cover' }}
              />
            </CardImage>
            <CardTitle>Recipes App</CardTitle>
            <CardText>
              Um site complexo de receitas, feito em React.js, com suas informações extraídas de algumas APIs.
            </CardText>
            <CardText> Realizado em: 2021</CardText>
            <Button onClick={() => router.push('/projects/2')}>Mais Informações</Button>
          </Card>
          <Card>
            <CardImage>
              <Image
                src="/images/Kahootify.png"
                alt="Kahootify"
                fill
                style={{ objectFit: 'cover' }}
              />
            </CardImage>
            <CardTitle>Kahootify</CardTitle>
            <CardText>
              Um jogo de adivinhação baseado no jogo Kahoot feito em JavaScript puro, usando a API do Spotify.
            </CardText>
            <CardText> Realizado em: 2021</CardText>
            <Button onClick={() => router.push('/projects/3')}>Mais Informações</Button>
          </Card>
        </ProjectsContainer>
      </MainContainer>
    </>
  );
};

export default withAuth(ProjectsPage);
