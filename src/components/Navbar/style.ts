import Link from 'next/link';
import styled, { keyframes } from 'styled-components';

interface LetterProps {
  $delay: string;
  secondaryColor: string;
}

const createJumpAnimation = (secondaryColor: string) => keyframes`
  0% { transform: translateY(0); color: #ffffff; }
  50% { transform: translateY(-10px); color: ${secondaryColor}; }
  100% { transform: translateY(0); color: ${secondaryColor}; }
`;

export const Letter = styled.span<LetterProps>`
  display: inline-block;
  animation: ${(props) => createJumpAnimation(props.secondaryColor)} 0.5s ease-in-out forwards;
  animation-delay: ${(props) => props.$delay};
  animation-iteration-count: 1;
  color: #ffffff;
  transition: color 0.5s;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  background: #f0f0f0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-bottom: 5px solid;
  border-image: linear-gradient(to right, #01cfb5, #001e56) 1;
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px 20px;
`;

export const Logo = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
`;

export const NavItems = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  color: #001e56;
  text-decoration: none;
  font-size: 1.2rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  position: relative;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-2px);
  }
`;
