"use client";

import styled from 'styled-components';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import HobbyCard from '../../components/HobbyCard';
import HobbyModal from '../../components/HobbyModal';
import { hobbiesData } from '../../data/hobbiesData';
import withAuth from '@/hoc/withAuth';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #001e56;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  margin-bottom: 30px;
  text-align: center;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
  width: 100%;
`;

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
