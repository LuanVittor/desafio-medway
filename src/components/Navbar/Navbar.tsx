"use client";

import { useRouter } from 'next/navigation';
import { NavContainer, Logo, NavItems, Nav, LetterMed, LetterWay, StyledLink } from './style';

const Navbar: React.FC = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('auth-token');
    router.push('/');
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
