"use client";

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Navbar from '../../components/Navbar/Navbar';
import withAuth from '@/hoc/withAuth';
import { Card, CardImage, CardText, CardTitle, Button, MainContainer, ProjectsContainer, Title } from './style';

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
