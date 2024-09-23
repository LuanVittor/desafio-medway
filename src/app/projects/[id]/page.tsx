"use client";

import { useParams, useRouter } from 'next/navigation';
import Navbar from '../../../components/Navbar/Navbar';
import withAuth from '@/hoc/withAuth';
import { MainContainer , Header, Content, Description, IframeContainer, BackButton, Title, TechnologiesContainer, TechnologyItem, TechnologiesTitle } from './style';
import { PROJECTS } from '@/data/projectsData';

const ProjectDetailPage: React.FC = () => {
  const params = useParams();
  const router = useRouter();

  const project = PROJECTS.find((project) => project.id === +params.id);

  if (!project) return <div>Projeto não encontrado</div>;

  return (
    <>
      <Navbar />
      <MainContainer>
        <Header>
          <BackButton onClick={() => router.push('/projects')}>Voltar</BackButton>
          <Title>{project.name}</Title>
        </Header>
        <Content>
          <Description>{project.detailedDescription}</Description>
          <IframeContainer>
            <iframe
              width="560"
              height="315"
              src={project.videoLink}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </IframeContainer>
           {project.technologies && (
            <TechnologiesContainer>
              <TechnologiesTitle>Tecnologias Usadas:</TechnologiesTitle>
              {project.technologies.map((tech, index) => (
                <TechnologyItem key={index}>{tech}</TechnologyItem>
              ))}
            </TechnologiesContainer>
          )}
        </Content>
      </MainContainer>
    </>
  );
};

export default withAuth(ProjectDetailPage);
