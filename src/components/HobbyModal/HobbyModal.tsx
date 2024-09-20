"use client";

import { useEffect } from 'react';
import { hobbiesData } from '../../data/hobbiesData';
import { Modal, ModalContent, CloseButton, Title, ImageGrid, GridImage, Description } from './style';


interface HobbyModalProps {
  isOpen: boolean;
  hobby: string | null;
  onClose: () => void;
}

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
