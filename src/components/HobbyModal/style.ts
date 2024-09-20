import styled from 'styled-components';

export const Modal = styled.div<{ $isOpen: boolean }>`
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

export const ModalContent = styled.div`
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

export const Title = styled.h2`
  font-size: 1.8rem;
  color: #001e56;
  margin-bottom: 15px;
`;

export const Description = styled.p`
  font-size: 1.1rem;
  color: #333;
  line-height: 1.6;
  margin-bottom: 20px;
`;

export const ImageGrid = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
`;

export const GridImage = styled.img`
  width: 33.33%;
  height: auto;
  border-radius: 5px;
  margin: 0;
`;

export const CloseButton = styled.button`
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