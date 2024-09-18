"use client";

import styled, { keyframes } from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const jumpMed = keyframes`
  0% { transform: translateY(0); color: #ffffff; }
  50% { transform: translateY(-10px); color: #001e56; }
  100% { transform: translateY(0); color: #001e56; }
`;

const jumpWay = keyframes`
  0% { transform: translateY(0); color: #ffffff; }
  50% { transform: translateY(-10px); color: #01cfb5; }
  100% { transform: translateY(0); color: #01cfb5; }
`;

const Nav = styled.nav`
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

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px 20px;
`;

const Logo = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
`;

const LetterMed = styled.span<{ $delay: string }>`
  display: inline-block;
  animation: ${jumpMed} 0.5s ease-in-out forwards;
  animation-delay: ${(props) => props.$delay};
  animation-iteration-count: 1;
  color: #ffffff;
  transition: color 0.5s;
`;

const LetterWay = styled.span<{ $delay: string }>`
  display: inline-block;
  animation: ${jumpWay} 0.5s ease-in-out forwards;
  animation-delay: ${(props) => props.$delay};
  animation-iteration-count: 1;
  color: #ffffff;
  transition: color 0.5s;
`;

const NavItems = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;

const StyledLink = styled(Link)`
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

const LogoutButton = styled.button`
  background-color: transparent;
  color: #001e56;
  font-size: 1.1rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #e74c3c;
  }
`;

const Navbar: React.FC = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const isAuth = localStorage.getItem('isAuthenticated');
    if (isAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
  };

  return (
    <Nav>
      <NavContainer>
        <Logo>
          <LetterMed $delay="0s">m</LetterMed>
          <LetterMed $delay="0.3s">e</LetterMed>
          <LetterMed $delay="0.6s">d</LetterMed>
          <LetterWay $delay="0.9s">w</LetterWay>
          <LetterWay $delay="1.2s">a</LetterWay>
          <LetterWay $delay="1.5s">y</LetterWay>
        </Logo>
        <NavItems>
          <StyledLink href="/about">Sobre Mim</StyledLink>
          <StyledLink href="/hobbies">Hobbies</StyledLink>
          <StyledLink href="/projects">Projetos</StyledLink>
          <StyledLink href="/contact">Contato</StyledLink>
          <StyledLink href="/" onClick={handleLogout}>Logout</StyledLink>
        </NavItems>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
