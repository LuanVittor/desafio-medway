"use client";

import styled from 'styled-components';
import { useParams, useRouter } from 'next/navigation';
import Navbar from '../../../components/Navbar';
import withAuth from '@/hoc/withAuth';

const PROJECTS = [
  {
    id: '1',
    Name: 'Loja Virtual',
    Tecnologies: ['React', 'Api Rest', 'JavaScript', 'CSS', 'HTML', 'Cypress', 'LocalStorage'],
    StartDate: '01/Nov/2021',
    ConclusionDate: '04/Nov/2021',
    VideoLink: 'https://www.youtube.com/embed/i3THVCZUmNM',
    Description: 'Essa Loja Virtual foi feita usando a API do MercadoLivre e fazendo toda manipulação de informações utilizando apenas props, isso mesmo, apenas props. O maior aprendizado desse projeto veio através da confusão de dados onde era preciso passar informações entre componentes pais e filhos, fazendo a aplicação ficar cheia de funções e de alta complexidade, assim mostrando a necessidade de se usar Redux e React Hooks!',
    GitHubLink: 'https://github.com/LuanVittor/FrontEnd-Online-Store',
  },
  {
    id: '2',
    Name: 'Aplicativo de receitas',
    Tecnologies: ['React', 'Api Rest', 'JavaScript', 'CSS', 'LocalStorage', 'RTL', 'Bootstrap'],
    StartDate: '02/jan/2022',
    ConclusionDate: '10/jan/2022',
    VideoLink: 'https://www.youtube.com/embed/Q7OK1ZuPYhk',
    Description: 'Um aplicativo de receitas feito com o intuito de aprimorar meu conhecimento em React. Nesse aplicativo, utilizei majoritariamente Context API para manipulação de informações e LocalStorage para salvar informações de sessão. O Aplicativo conta com mais de 15 páginas diferentes, a possibilidade de iniciar receitas, favoritar, compartilhar elas! As Comidas/Bebidas são extraídas de uma API assim como todas suas informações.',
    GitHubLink: 'https://github.com/LuanVittor/Recipes-App',
  },
  {
    id: '3',
    Name: 'Kahootify',
    Tecnologies: ['HTML', 'JavaScript', 'CSS'],
    StartDate: '30/Sep/2021',
    ConclusionDate: '02/Oct/2021',
    VideoLink: 'https://www.youtube.com/embed/1r-7QB_1QrM',
    Description: 'Uma aplicação descontraída baseada no jogo Kahoot onde o objetivo é acertar o compositor da música que está tocando em menos tempo possível. A aplicação foi feita INTEIRAMENTE em JavaScript, sem a utilização de qualquer biblioteca ou framework. Todas as informações como gênero musical, artista e nome da música foram retiradas da API do Spotify!',
    GitHubLink: 'https://github.com/LuanVittor/Kahootify',
  },
];

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  background-color: #ffffff;
  min-height: 100vh;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 800px;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #001e56;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 20px;
`;

const BackButton = styled.button`
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

const Content = styled.div`
  max-width: 800px;
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

const Description = styled.p`
  color: #333;
  font-size: 1.1rem;
  margin-bottom: 20px;
  font-family: 'Poppins', sans-serif;
`;

const IframeContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const ProjectDetailPage: React.FC = () => {
  const params = useParams();
  const router = useRouter();

  const project = PROJECTS.find((elem) => elem.id === params.id);

  if (!project) return <div>Projeto não encontrado</div>;

  return (
    <>
      <Navbar />
      <MainContainer>
        <Header>
          <BackButton onClick={() => router.push('/projects')}>Voltar</BackButton>
          <Title>{project.Name}</Title>
        </Header>
        <Content>
          <Description>{project.Description}</Description>
          <IframeContainer>
            <iframe
              width="560"
              height="315"
              src={project.VideoLink}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </IframeContainer>
        </Content>
      </MainContainer>
    </>
  );
};

export default withAuth(ProjectDetailPage);
