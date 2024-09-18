"use client";

import styled from 'styled-components';
import { useEffect } from 'react';
import { hobbiesData } from '../data/hobbiesData';


interface HobbyModalProps {
  isOpen: boolean;
  hobby: string | null;
  onClose: () => void;
}

const Modal = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')}; /* Controle de exibição com base na prop "$isOpen" */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
`;

const ModalContent = styled.div`
  position: relative;
  background-color: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 800px;
  max-height: 85vh;
  overflow: hidden;
  font-family: 'Poppins', sans-serif;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  color: #001e56;
  margin-bottom: 15px;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #333;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const ImageGrid = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
`;

const GridImage = styled.img`
  width: 33.33%;
  height: auto;
  border-radius: 5px;
  margin: 0;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #333;
  cursor: pointer;

  &:hover {
    color: #001e56;
  }
`;

const HobbyModal: React.FC<HobbyModalProps> = ({ isOpen, hobby, onClose }) => {
  const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    } else {
      window.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const selectedHobbyData = hobbiesData.find((item) => item.title === hobby);

  return (
    <Modal $isOpen={isOpen} onClick={handleOutsideClick}>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        {selectedHobbyData && (
          <>
            <Title>{selectedHobbyData.title}</Title>
            <ImageGrid>
              {selectedHobbyData.images.map((image, index) => (
                <GridImage key={index} src={image} alt={`Imagem de ${selectedHobbyData.title} ${index + 1}`} />
              ))}
            </ImageGrid>
            <Description>{selectedHobbyData.description}</Description>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default HobbyModal;
