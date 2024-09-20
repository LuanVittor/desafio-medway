import styled from 'styled-components';

export const Card = styled.div<{ bgImage: string; cursor: string }>`
  position: relative;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
  border-radius: 15px;
  padding: 20px;
  text-align: center;
  color: white;
  transition: transform 0.3s, box-shadow 0.3s;
  height: 250px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: ${(props) => props.cursor};

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2); 
  }
`;