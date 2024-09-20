"use client";

import { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import HobbyCard from '../../components/HobbyCard/HobbyCard';
import HobbyModal from '../../components/HobbyModal/HobbyModal';
import { hobbiesData } from '../../data/hobbiesData';
import withAuth from '@/hoc/withAuth';
import { Container, CardsContainer, Title } from './style';

const HobbiesPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedHobby, setSelectedHobby] = useState<string | null>(null);

  const handleCardClick = (hobby: string) => {
    setSelectedHobby(hobby);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedHobby(null);
  };

  return (
    <>
      <Navbar />
      <Container>
        <Title>Hobbies e Curiosidades</Title>
        <CardsContainer>
          {hobbiesData.map((hobby) => (
            <HobbyCard 
              key={hobby.id} 
              title={hobby.title} 
              bgImage={hobby.bgImage} 
              onClick={() => handleCardClick(hobby.title)} 
              cursor={hobby.cursor} 
            />
          ))}
        </CardsContainer>
        <HobbyModal isOpen={isModalOpen} hobby={selectedHobby} onClose={handleCloseModal} />
      </Container>
    </>
  );
};

export default withAuth(HobbiesPage);
