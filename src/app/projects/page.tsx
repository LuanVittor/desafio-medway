"use client";

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Navbar from '../../components/Navbar/Navbar';
import withAuth from '@/hoc/withAuth';
import { Card, CardImage, CardText, CardTitle, Button, MainContainer, ProjectsContainer, Title } from './style';
import { PROJECTS } from '@/data/projectsData';

const ProjectsPage: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <MainContainer>
        <Title>Projetos</Title>
        <ProjectsContainer>
          {PROJECTS.map((project) => (
            <Card key={project.id}>
              {project.image && (
                <CardImage>
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </CardImage>
              )}
              <CardTitle>{project.name}</CardTitle>
              <CardText>{project.shortDescription}</CardText>
              {project.startDate && <CardText>Realizado em: {project.startDate}</CardText>}
              <Button onClick={() => router.push(`/projects/${project.id}`)}>Mais Informações</Button>
            </Card>
          ))}
        </ProjectsContainer>
      </MainContainer>
    </>
  );
};

export default withAuth(ProjectsPage);
